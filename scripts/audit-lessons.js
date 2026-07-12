const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("app.js", "utf8");
const dataEnd = source.indexOf("const initialState =");

if (dataEnd === -1) {
  console.error("Could not find lesson data in app.js.");
  process.exit(1);
}

const dataSource = `${source.slice(0, dataEnd)}
globalThis.lessons = lessons;`;

const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(dataSource, sandbox);

const maxLabelLengthByKind = {
  value: 8,
  string: 22,
  object: 10,
  "object-large": 14,
  variable: 2,
  "variable-wide": 18,
};

const problems = [];
const warnings = [];

function location(lessonIndex, lesson, stepIndex) {
  return `Chapter ${lessonIndex + 1} (${lesson.title}), step ${stepIndex + 1}`;
}

sandbox.lessons.forEach((lesson, lessonIndex) => {
  const nodeIds = new Set(Object.keys(lesson.nodes || {}));

  Object.entries(lesson.nodes || {}).forEach(([id, node]) => {
    if (typeof node.x !== "number" || typeof node.y !== "number") {
      problems.push(`Chapter ${lessonIndex + 1} (${lesson.title}): node "${id}" needs numeric x/y coordinates.`);
    }

    const maxLength = maxLabelLengthByKind[node.kind];
    const plainLabel = String(node.label || "").replace(/\\n/g, "");
    if (maxLength && plainLabel.length > maxLength) {
      warnings.push(
        `Chapter ${lessonIndex + 1} (${lesson.title}): node "${id}" label "${plainLabel}" may overflow a ${node.kind} shape.`
      );
    }
  });

  lesson.steps.forEach((step, stepIndex) => {
    const visible = new Set(step.visible || []);

    (step.visible || []).forEach((id) => {
      if (!nodeIds.has(id)) {
        problems.push(`${location(lessonIndex, lesson, stepIndex)}: visible node "${id}" is not defined.`);
      }
    });

    (step.active || []).forEach((id) => {
      if (!nodeIds.has(id)) {
        problems.push(`${location(lessonIndex, lesson, stepIndex)}: active node "${id}" is not defined.`);
      } else if (!visible.has(id)) {
        problems.push(`${location(lessonIndex, lesson, stepIndex)}: active node "${id}" is not visible.`);
      }
    });

    (step.wires || []).forEach((wire) => {
      ["from", "to"].forEach((key) => {
        const id = wire[key];
        if (!nodeIds.has(id)) {
          problems.push(`${location(lessonIndex, lesson, stepIndex)}: wire "${wire.id}" ${key} node "${id}" is not defined.`);
        } else if (!visible.has(id)) {
          problems.push(`${location(lessonIndex, lesson, stepIndex)}: wire "${wire.id}" ${key} node "${id}" is not visible.`);
        }
      });
    });
  });
});

warnings.forEach((warning) => console.warn(`Warning: ${warning}`));

if (problems.length) {
  problems.forEach((problem) => console.error(`Error: ${problem}`));
  process.exit(1);
}

console.log(`Lesson audit passed for ${sandbox.lessons.length} chapters with ${warnings.length} warnings.`);
