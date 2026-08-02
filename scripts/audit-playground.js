const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("app.js", "utf8");
const dataEnd = source.indexOf("const initialState =");
const parserStart = source.indexOf("function makePrimitiveValue");
const parserEnd = source.indexOf("function renderPlayground()", parserStart);

if (dataEnd === -1 || parserStart === -1 || parserEnd === -1) {
  console.error("Could not find playground parser in app.js.");
  process.exit(1);
}

const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(
  `${source.slice(0, dataEnd)}
${source.slice(parserStart, parserEnd)}
globalThis.lessons = lessons;
globalThis.parsePlayground = parsePlayground;`,
  sandbox,
);

const snippets = [
  ...sandbox.lessons.map((lesson, index) => ({
    name: `Chapter ${index + 1}: ${lesson.title}`,
    code: lesson.code.join("\n"),
    expectedLabels: [],
    expectedError: lesson.id === "scope" ? "inside has not been created yet." : "",
  })),
  {
    name: "chapter 21 array push and length",
    code: 'let cart = [];\ncart.push("Book");\nlet itemCount = cart.length;',
    expectedLabels: ['"Book"', "1", "itemCount"],
  },
  {
    name: "multiple push arguments",
    code: 'let cart = [];\ncart.push("Book", "Pen");\nlet itemCount = cart.length;',
    expectedLabels: ['"Book"', '"Pen"', "2", "itemCount"],
    minVerticalGaps: [
      ['"Book"', '"Pen"', 12],
      ['"Pen"', "2", 12],
    ],
  },
  {
    name: "multiple push arguments with longer second item",
    code: 'let cart = [];\ncart.push("Book", "paper");\nlet itemCount = cart.length;',
    expectedLabels: ['"Book"', '"paper"', "2", "itemCount"],
    minVerticalGaps: [
      ['"Book"', '"paper"', 12],
      ['"paper"', "2", 12],
    ],
  },
  {
    name: "push return value",
    code: 'let cart = ["Book"];\nlet itemCount = cart.push("Pen");',
    expectedLabels: ['"Book"', '"Pen"', "2", "itemCount"],
  },
  {
    name: "function expression call returns value",
    code: "const add = function(a, b) { return a + b; };\nlet result = add(3, 4);",
    expectedLabels: ["add", "fn", "result", "7"],
  },
  {
    name: "block scoped variable is not visible outside",
    code: "let outside = 1;\n{\n  let inside = 2;\n}\ninside;",
    expectedLabels: ["outside", "1"],
    missingLabels: ["inside", "2"],
    expectedError: "inside has not been created yet.",
  },
];

const problems = [];

snippets.forEach((snippet) => {
  const diagram = sandbox.parsePlayground(snippet.code);
  if (snippet.expectedError) {
    if (diagram.error !== snippet.expectedError) {
      problems.push(`${snippet.name}: expected error "${snippet.expectedError}", got "${diagram.error}".`);
      return;
    }
  } else if (diagram.error) {
    problems.push(`${snippet.name}: ${diagram.error}`);
    return;
  }

  const labels = Object.values(diagram.nodes).map((node) => node.label);
  snippet.expectedLabels.forEach((label) => {
    if (!labels.includes(label)) {
      problems.push(`${snippet.name}: expected label ${label} in playground diagram.`);
    }
  });

  (snippet.missingLabels || []).forEach((label) => {
    if (labels.includes(label)) {
      problems.push(`${snippet.name}: did not expect label ${label} in playground diagram.`);
    }
  });

  (snippet.minVerticalGaps || []).forEach(([firstLabel, secondLabel, minGap]) => {
    const first = Object.values(diagram.nodes).find((node) => node.label === firstLabel);
    const second = Object.values(diagram.nodes).find((node) => node.label === secondLabel);
    if (!first || !second) return;

    const gap = Math.abs(first.y - second.y);
    if (gap < minGap) {
      problems.push(`${snippet.name}: expected at least ${minGap} layout units between ${firstLabel} and ${secondLabel}, got ${gap}.`);
    }
  });
});

if (problems.length) {
  problems.forEach((problem) => console.error(`Error: ${problem}`));
  process.exit(1);
}

console.log(`Playground audit passed for ${snippets.length} snippets.`);
