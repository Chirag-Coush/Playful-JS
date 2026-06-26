# Playful JS

An interactive visual JavaScript learning playground.

The app now starts with practical JavaScript basics and uses visual mental
models inside each lesson. The original conceptual chapters are still available
as a mental model library after the beginner-first chapters.

One early mental model is:

```js
let x = 10;
let y = x;
x = 0;
```

Variables are shown as labeled boxes, primitive values are shown as floating
values, and assignment is shown as a wire that can move from one value to
another.

Current learning structure:

- Everyday JavaScript basics: variables, constants, arithmetic, input, conversion, Math, and random numbers.
- Decisions and branching: if statements, logical operators, ternary, switch, and strict equality.
- Strings in real projects: string methods, slicing, and method chaining.
- Loops and repeated work: for loops.
- Arrays and lists: arrays, push, and index access.
- Mental model library: values, objects, mutation, identity, functions, scope, closures, async, DOM, modules, and modern JavaScript concepts.

## Run

From a fresh terminal, go to the project folder first:

```sh
cd "/Users/chiragcoushikgar/Library/Mobile Documents/com~apple~CloudDocs/Portfolio/1.Code/Playful-JS"
```

Install dependencies once. You can skip this if `node_modules` already exists:

```sh
npm install
```

Build the Tailwind CSS:

```sh
npm run build:css
```

Serve this folder locally. Keep this terminal window open while using the app:

```sh
npm run serve
```

Then visit `http://127.0.0.1:8080`.

If port `8080` is already busy, use the alternate local port:

```sh
npm run serve:alt
```

Then visit `http://127.0.0.1:8081`.

If the page still does not load, a stale server may be holding the port. Find it:

```sh
lsof -i :8080
```

Then stop the listed process by replacing `<PID>` with the number in the `PID`
column:

```sh
kill <PID>
```

After that, run `npm run serve` again.

For ongoing CSS edits, run:

```sh
npm run watch:css
```

Use `Ctrl+C` in the server terminal to stop the local server.

## Check

Run the project checks before handing work off:

```sh
npm run check
```

This checks JavaScript syntax, rebuilds Tailwind CSS, and audits lesson data for
missing nodes, hidden wire endpoints, invisible active nodes, and likely label
overflow.

## Continue The Project

If this conversation context is unavailable, start with `PROJECT_CONTEXT.md` and
`Instruction.md`. They capture the course goal, visual rules, JavaScript
accuracy rules, validation commands, and the current chapter structure.
