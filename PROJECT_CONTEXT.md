# Playful JS Project Context

This file exists so a new Codex/chat window can continue the project without relying on prior conversation history.

## Project Goal

Playful JS is a visual JavaScript learning app for beginners who learn better through diagrams than videos. It teaches JavaScript by showing variables, values, objects, function calls, DOM nodes, async work, and other concepts as connected visual mental models.

The app should teach practical JavaScript first, then offer a deeper mental-model library.

## Current Structure

- `index.html`: app shell.
- `app.js`: lesson data, diagram renderer, chapter picker, quiz logic, and app state.
- `src/styles.css`: Tailwind entry.
- `dist/styles.css`: generated CSS committed for simple static serving.
- `Instruction.md`: course design rules and visual accuracy constraints.
- `scripts/audit-lessons.js`: local lesson data audit.

Lesson order in `app.js`:

- `practicalLessons`: beginner-first practical lessons.
- `conceptLessons`: mental-model library lessons.
- `lessons = [...practicalLessons, ...conceptLessons]`.

At this point the project has 75 chapters total.

## Non-Negotiable Teaching Rules

- Diagrams must be faithful to JavaScript execution.
- Do not skip a state if skipping it would teach a false mental model.
- Assignment should be shown as:
  1. create or identify the left-side variable/property,
  2. evaluate the right-side expression,
  3. point the left-side wire to the resulting value.
- Function calls should show:
  1. function value is evaluated,
  2. arguments are evaluated,
  3. parameters are created in the call frame,
  4. body returns a value,
  5. receiving variable points to the returned value.
- Avoid visual shortcuts where a variable or value appears magically without a step explaining what JavaScript did.
- Variables are boxes.
- Primitive values are circles or pills.
- Objects and functions are object-like values.
- Wires represent references to values.
- Visible variable boxes and primitive value nodes must use full white backgrounds. Do not use opacity-based dimming for visible nodes.
- Future-step nodes should be hidden, not ghosted.
- Lesson text must be beginner-friendly while staying technically accurate.

## Visual Style Rules

- Use Tailwind utility classes where practical.
- Prefer Tailwind default colors and spacing over custom arbitrary values.
- Use shared CSS for repeated base styles instead of repeating the same utility stack everywhere.
- The diagram should preserve a hand-drawn feel via Playpen Sans for diagram/lesson headings, while UI controls can stay Inter/system-like.
- Property labels on wires should have a white pill background so line color does not reduce readability.
- Wires should sit behind value pills and nodes.
- Wire endpoints should use small socket/nub details where they connect to values.

## Run Locally

```sh
npm install
npm run build:css
npm run serve
```

Then open:

```txt
http://127.0.0.1:8080
```

If port `8080` is busy:

```sh
npm run serve:alt
```

Then open:

```txt
http://127.0.0.1:8081
```

## Validation

Run all local checks:

```sh
npm run check
```

This runs:

```sh
node --check app.js
npm run build:css
npm run audit:lessons
```

The audit checks lesson data for:

- undefined visible nodes,
- undefined active nodes,
- active nodes that are not visible,
- wires whose endpoints are missing or hidden,
- likely label overflow for node shapes.

## Screenshot Verification

Use Chrome headless for spot checks:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless \
  --disable-gpu \
  --hide-scrollbars \
  --window-size=1600,1000 \
  --screenshot=/private/tmp/playful-js-check.png \
  "http://127.0.0.1:8080?chapter=0&step=0"
```

Query params are zero-based:

- `chapter=0` means the first visible chapter.
- `step=0` means the first step in that chapter.

## Recent Important Fixes

- The beginner-first practical path was added before the conceptual library.
- Early practical chapters were audited so they do not skip key evaluation/assignment steps.
- String chapter labels preserve spaces where that matters.
- For loops now show each pass and final counter state clearly.
- Event Listeners now show `count` being initialized before listener registration, the callback being stored without running, the browser calling it on click, and `count` moving from `0` to `1`.
- A reusable lesson audit script was added and wired into `npm run check`.

## Near-Term Next Step

Continue improving the beginner practical curriculum so everyday JavaScript features map back to the mental models. The next useful phase is likely:

- expand practical chapters after arrays into functions, callbacks, array methods, objects/classes, async, DOM, fetch, and project-oriented examples;
- group/search chapters more intentionally as the list grows;
- keep screenshot-checking visually dense chapters after each batch.

