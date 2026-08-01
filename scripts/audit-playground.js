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
  ...sandbox.lessons.slice(0, 21).map((lesson, index) => ({
    name: `Chapter ${index + 1}: ${lesson.title}`,
    code: lesson.code.join("\n"),
    expectedLabels: [],
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
  },
  {
    name: "push return value",
    code: 'let cart = ["Book"];\nlet itemCount = cart.push("Pen");',
    expectedLabels: ['"Book"', '"Pen"', "2", "itemCount"],
  },
];

const problems = [];

snippets.forEach((snippet) => {
  const diagram = sandbox.parsePlayground(snippet.code);
  if (diagram.error) {
    problems.push(`${snippet.name}: ${diagram.error}`);
    return;
  }

  const labels = Object.values(diagram.nodes).map((node) => node.label);
  snippet.expectedLabels.forEach((label) => {
    if (!labels.includes(label)) {
      problems.push(`${snippet.name}: expected label ${label} in playground diagram.`);
    }
  });
});

if (problems.length) {
  problems.forEach((problem) => console.error(`Error: ${problem}`));
  process.exit(1);
}

console.log(`Playground audit passed for ${snippets.length} snippets.`);
