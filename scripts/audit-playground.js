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
    code: (lesson.playgroundCode || lesson.code).join("\n"),
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
    name: "shared method receives a different this for each call",
    code: 'let ada = { name: "Ada", greet() { return this.name; } };\nlet grace = { name: "Grace", greet: ada.greet };\nlet first = ada.greet();\nlet second = grace.greet();',
    expectedLabels: ["ada", "grace", "first", "second", '"Ada"', '"Grace"'],
    missingLabels: ["ada.greet()", "grace.greet()"],
  },
  {
    name: "method combines data from its receiving object",
    code: 'let user = { name: "Ada", sayHi() { return "Hi, " + this.name; } };\nlet result = user.sayHi();',
    expectedLabels: ["user", "result", '"Ada"', '"Hi, Ada"'],
    missingLabels: ["user.sayHi()"],
  },
  {
    name: "returned function keeps and updates closure state",
    code: "function makeCounter() {\n  let count = 0;\n  return function next() {\n    count = count + 1;\n    return count;\n  };\n}\nlet next = makeCounter();\nlet current = next();",
    expectedLabels: ["makeCounter", "next", "fn", "current", "1"],
    expectedWireLabels: ["remembers count"],
    missingLabels: ["undefined", "next()"],
  },
  {
    name: "class constructor creates a real instance",
    code: 'class User { constructor(name) { this.name = name; } }\nlet ada = new User("Ada");',
    expectedLabels: ["User", "class", "ada", "{ }", '"Ada"'],
    missingLabels: ['new User("Ada")'],
  },
  {
    name: "static factory cleans input before construction",
    code: 'class User { constructor(name) { this.name = name; } static fromInput(input) { return new User(input.trim()); } }\nlet ada = User.fromInput("  Ada  ");',
    expectedLabels: ["User", "class", "ada", "{ }", '"Ada"'],
    missingLabels: ['User.fromInput("  Ada  ")'],
  },
  {
    name: "inherited method lookup returns a real value",
    code: "class User { greet() { return 'Hi'; } }\nclass Admin extends User {}\nlet sam = new Admin();\nlet message = sam.greet();",
    expectedLabels: ["User", "Admin", "sam", "message", "{ }", '"Hi"'],
    missingLabels: ["new Admin()", "sam.greet()"],
  },
  {
    name: "Map stores and retrieves by object identity",
    code: 'let cache = new Map();\nlet user = {};\ncache.set(user, "Ada");\nlet cachedName = cache.get(user);',
    expectedLabels: ["cache", "Map", "user", "cachedName", '"Ada"'],
    missingLabels: ["new Map()", "cache.get(user)"],
  },
  {
    name: "Set exposes an observable unique count",
    code: 'let tags = new Set();\ntags.add("js");\ntags.add("js");\nlet tagCount = tags.size;',
    expectedLabels: ["tags", "Set", "tagCount", '"js"', "1"],
    missingLabels: ["new Set()", "tags.size"],
  },
  {
    name: "Date method returns a stored year",
    code: 'let created = new Date("2026-01-01T00:00:00Z");\nlet year = created.getUTCFullYear();',
    expectedLabels: ["created", "dt", "year", "2026"],
    missingLabels: ["created.getUTCFullYear()"],
  },
  {
    name: "optional object property uses a real fallback value",
    code: 'type User = { name: string; admin?: boolean };\nlet user: User = { name: "Ada" };\nlet canEdit = user.admin ?? false;',
    expectedLabels: ["user", "canEdit", '"Ada"', "false"],
    missingLabels: ["user.admin ?? false"],
  },
  {
    name: "bound function call uses the stored receiver",
    code: 'let user = { name: "Ada" };\nfunction sayHi() { return this.name; }\nlet bound = sayHi.bind(user);\nlet message = bound();',
    expectedLabels: ["user", "sayHi", "bound", "message", '"Ada"', "fn"],
    missingLabels: ["sayHi.bind(user)", "bound()"],
  },
  {
    name: "fetch fixture exposes parsed JSON data",
    code: "let response = await fetch('/user.json');\nlet user = await response.json();\nlet name = user.name;",
    expectedLabels: ["response", "Response", "user", "name", "{ }", '"Ada"'],
    missingLabels: ["await fetch('/user.json')", "await response.json()", "user.name"],
  },
  {
    name: "multiple function calls stay in view",
    code: "function double(number) { return number * 2; }\nconst add = function(a, b) { return a + b; };\nconst multiply = (a, b) => a * b;\nlet doubled = double(4);\nlet added = add(3, 4);\nlet multiplied = multiply(3, 4);",
    expectedLabels: ["double", "add", "multiply", "doubled", "added", "multiplied", "8", "7", "12"],
    visibleBounds: { minY: 8, maxY: 92 },
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
const canvasBounds = { minX: 8, maxX: 92, minY: 8, maxY: 80 };

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

  const outsideCanvas = Object.entries(diagram.nodes).filter(([, node]) =>
    node.x < canvasBounds.minX || node.x > canvasBounds.maxX || node.y < canvasBounds.minY || node.y > canvasBounds.maxY
  );
  if (outsideCanvas.length) {
    problems.push(
      `${snippet.name}: playground nodes outside canvas bounds: ${outsideCanvas.map(([id, node]) => `${id} at ${node.x},${node.y}`).join(", ")}.`
    );
  }

  diagram.wires.forEach((wire) => {
    if (!diagram.nodes[wire.from] || !diagram.nodes[wire.to]) {
      problems.push(`${snippet.name}: playground wire ${wire.id} has a missing endpoint.`);
      return;
    }

    if (wire.id.startsWith("prop-") && diagram.nodes[wire.to].x - diagram.nodes[wire.from].x < 12) {
      problems.push(`${snippet.name}: playground property wire ${wire.id} needs more horizontal spacing.`);
    }
  });
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

  (snippet.expectedWireLabels || []).forEach((label) => {
    if (!diagram.wires.some((wire) => wire.label === label)) {
      problems.push(`${snippet.name}: expected wire label ${label} in playground diagram.`);
    }
  });

  if (snippet.visibleBounds) {
    const outsideBounds = Object.values(diagram.nodes).filter((node) => node.y < snippet.visibleBounds.minY || node.y > snippet.visibleBounds.maxY);
    if (outsideBounds.length) {
      problems.push(`${snippet.name}: nodes outside vertical canvas bounds: ${outsideBounds.map((node) => `${node.label} at ${node.y}`).join(", ")}.`);
    }
  }
});

if (problems.length) {
  problems.forEach((problem) => console.error(`Error: ${problem}`));
  process.exit(1);
}

console.log(`Playground audit passed for ${snippets.length} snippets.`);
