const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("app.js", "utf8");
const dataEnd = source.indexOf("const initialState =");

if (dataEnd === -1) {
  console.error("Could not find lesson data in app.js.");
  process.exit(1);
}

const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(`${source.slice(0, dataEnd)}\nglobalThis.lessons = lessons;`, sandbox);

const lessons = new Map(sandbox.lessons.map((lesson) => [lesson.id, lesson]));
const problems = [];

function lessonText(id) {
  const lesson = lessons.get(id);
  if (!lesson) {
    problems.push(`Missing truth-sensitive lesson: ${id}.`);
    return "";
  }
  return [lesson.intro, ...(lesson.code || []), ...(lesson.steps || []).flatMap((step) => [step.title, step.description])].join("\n");
}

function requirePattern(id, pattern, reason) {
  if (!pattern.test(lessonText(id))) {
    problems.push(`${id}: ${reason}`);
  }
}

function rejectPattern(id, pattern, reason) {
  if (pattern.test(lessonText(id))) {
    problems.push(`${id}: ${reason}`);
  }
}

requirePattern("logical-operators", /short-circuit/i, "must teach short-circuit evaluation.");
requirePattern("logical-operators", /return an operand/i, "must say that && and || return an operand.");
rejectPattern("logical-operators", /&& only gives true|\|\| gives true/i, "must not describe && or || as boolean-only operators.");

requirePattern("callbacks", /return callback\(\)/, "must show whether the callback return is propagated.");
requirePattern("callbacks", /let result = run\(logReady\)/, "must store the enclosing call's return value.");
requirePattern("promises", /let namePromise = .*\.then/, "must show that then returns a distinct Promise.");
requirePattern("promises", /different Promise/i, "must explain that then returns a different Promise.");
requirePattern("async-await", /loadName\(\)/, "must visibly call the async function whose body is visualized.");
requirePattern("arrow-functions", /this\.name/, "must demonstrate the lexical-this behavior named by the chapter.");
requirePattern("methods-and-this", /"Hi, " \+ this\.name/, "must demonstrate behavior that does more than directly read a property.");
requirePattern("this-practical", /ada\.greet\(\).*grace\.greet\(\)/s, "must teach that each method-call receiver supplies its own this value.");
requirePattern("this-practical", /same function/i, "must distinguish shared function identity from the receiving objects.");
requirePattern("inheritance", /class User/, "must define the parent class used by extends.");
requirePattern("inheritance", /let message = sam\.greet\(\)/, "must execute and store the inherited method result.");
requirePattern("static-methods-practical", /fromInput.*trim\(\)/s, "must show why a class-level helper is useful before constructing an instance.");
requirePattern("typescript-unions", /let state: State =/, "must create the runtime state object shown in the diagram.");
requirePattern("typescript-unions", /let message = "".*message = state\.name/s, "must show the narrowed branch producing an observable result.");
requirePattern("typescript-object-types", /let canEdit = user\.admin \?\? false/, "must store the optional-property fallback result.");
requirePattern("rendering-from-data", /let list = document\.querySelector/, "must create the list binding shown in the diagram.");
requirePattern("rendering-from-data", /function createItem/, "must define the helper that map calls.");
requirePattern("debouncing", /onInput\("a"\).*onInput\("ab"\)/s, "must execute the input calls shown in the walkthrough.");
requirePattern("debouncing", /numeric timer ID/i, "must model browser setTimeout's numeric return value.");
rejectPattern("debouncing", /new timer object/i, "must not call a browser timer ID a timer object.");
requirePattern("race-conditions", /let currentQuery/, "must establish the query binding shown in the diagram.");
requirePattern("testing-functions", /let actual =/, "must create the actual binding shown in the diagram.");
requirePattern("testing-functions", /let expected =/, "must create the expected binding shown in the diagram.");
requirePattern("nan", /let invalid = Number\.isNaN/, "must store the boolean result shown in the diagram.");
requirePattern("regular-expressions", /let pattern = \/@\//, "must create the RegExp binding shown in the diagram.");
requirePattern("dates", /internal \[\[DateValue\]\]/i, "must distinguish Date's internal slot from an ordinary property.");
requirePattern("dates", /let year = created\.getUTCFullYear\(\)/, "must store the Date method result shown in the diagram.");
rejectPattern("dates", /label: "wraps"/i, "must not draw Date internal state as an ordinary property wire.");
requirePattern("bind-this", /let message = bound\(\)/, "must store the bound function's result.");
requirePattern("fetch-and-json", /let name = user\.name/, "must show parsed network data being read into an application binding.");
requirePattern("map-collection", /let cachedName = cache\.get\(user\)/, "must store the value retrieved by object identity.");
requirePattern("set-collection", /let tagCount = tags\.size/, "must make the Set's uniqueness observable.");
requirePattern("private-fields", /new Counter\(\)/, "must create the instance shown in the diagram.");
requirePattern("private-fields", /counter\.increment\(\)/, "must execute the mutation shown in the diagram.");
requirePattern("event-listeners", /browser-managed listener state/i, "must distinguish listener registration from an ordinary object property.");
requirePattern("microtasks", /microtask checkpoint/i, "must explain ordering through microtask checkpoints.");
rejectPattern("microtasks", /higher priority/i, "must not describe microtasks as a generic priority system.");

for (const lesson of sandbox.lessons) {
  const code = (lesson.code || []).join("\n");
  const hasTopLevelAwait = (lesson.code || []).some((line) => /^\s*(?:let|const|var)?[^\n]*\bawait\b/.test(line));
  const awaitInsideFunction = /^\s*(?:async\s+function|[^=]*=\s*async\b)/.test(lesson.code?.[0] || "");
  if (hasTopLevelAwait && !awaitInsideFunction && !/module code/i.test(lesson.intro || "")) {
    problems.push(`${lesson.id}: top-level await must be identified as module code or wrapped in an async function.`);
  }
  if (/setTimeout creates a new timer object/i.test(code + lessonText(lesson.id))) {
    problems.push(`${lesson.id}: browser setTimeout returns a numeric timer ID, not a timer object.`);
  }
}

if (problems.length) {
  problems.forEach((problem) => console.error(`Error: ${problem}`));
  process.exit(1);
}

console.log(`Semantic audit passed for ${sandbox.lessons.length} chapters.`);
