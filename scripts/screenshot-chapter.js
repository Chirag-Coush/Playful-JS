const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const vm = require("vm");

const chapterNumber = Number(process.argv[2]);
const baseUrl = process.argv[3] || "http://127.0.0.1:8080";
const outputDir = process.argv[4] || "/private/tmp/playful-js-screenshots";

if (!Number.isInteger(chapterNumber) || chapterNumber < 1) {
  console.error("Usage: npm run screenshots:chapter -- <chapter-number> [base-url] [output-dir]");
  process.exit(1);
}

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
if (!fs.existsSync(chromePath)) {
  console.error(`Chrome was not found at ${chromePath}`);
  process.exit(1);
}

const source = fs.readFileSync("app.js", "utf8");
const dataEnd = source.indexOf("const lessons =");
const dataSource = `${source.slice(0, dataEnd)}
const lessons = [...practicalLessons, ...conceptLessons];
globalThis.lessons = lessons;`;

const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(dataSource, sandbox);

const lessonIndex = chapterNumber - 1;
const lesson = sandbox.lessons[lessonIndex];

if (!lesson) {
  console.error(`Chapter ${chapterNumber} does not exist. Found ${sandbox.lessons.length} chapters.`);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

lesson.steps.forEach((_, stepIndex) => {
  const file = path.join(
    outputDir,
    `chapter-${String(chapterNumber).padStart(2, "0")}-step-${String(stepIndex + 1).padStart(2, "0")}.png`,
  );
  const url = `${baseUrl}?chapter=${lessonIndex}&step=${stepIndex}`;
  const result = spawnSync(chromePath, [
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1600,1000",
    `--screenshot=${file}`,
    url,
  ], { stdio: "inherit" });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
});

console.log(`Captured ${lesson.steps.length} states for Chapter ${chapterNumber}: ${lesson.title}`);
console.log(outputDir);
