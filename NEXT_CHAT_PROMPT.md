# Paste This Into The Next Chat

We are working in the local clone of this project:

```txt
Playful-JS
```

The project is **Playful JS**, an interactive visual JavaScript learning app for beginners who learn better through diagrams than videos. The goal is to teach practical JavaScript first, while using accurate visual mental models: variables are boxes, primitive values are circles/pills, objects/functions are object-like values, and wires represent references to values.

Before making changes, read:

- `PROJECT_CONTEXT.md`
- `Instruction.md`
- `README.md`

Important rules:

- Diagrams must be faithful to JavaScript execution.
- Do not skip states if skipping would teach a false mental model.
- Assignment should show: create/identify the left side, evaluate the right side, then point the left-side wire to the resulting value.
- Function calls should show: evaluate function, evaluate arguments, create parameters, return a value, then store the returned value.
- Visible variable boxes and primitive values must have full white backgrounds, never opacity-based dimming.
- Future-step nodes should be hidden, not ghosted.
- Use Tailwind defaults and reusable CSS where possible. Avoid arbitrary custom values unless necessary.
- Screenshot every state for dense visual chapters, not just the first or final state.

Current state:

- The app has 97 chapters.
- Practical lessons come first in `practicalLessons`.
- The older conceptual library follows in `conceptLessons`.
- Recent practical sections already added:
  - basics, decisions, strings, loops, arrays,
  - functions/scope/callbacks/array methods,
  - objects/nested objects/arrays of objects/`this`/classes,
  - constructors/static methods/getters/inheritance/sorting arrays of objects.
  - TypeScript bridge: type annotations, object types, union narrowing, and generics.

Useful commands:

```sh
npm run check
npm run serve
npm run screenshots:chapter -- 22
```

`npm run check` runs JavaScript syntax validation, Tailwind build, and lesson data audit.

For visual checks, keep the local server running and capture every state for new/dense chapters, for example:

```sh
npm run screenshots:chapter -- 34 http://127.0.0.1:8080 /private/tmp/playful-js-ch34-all
```

Next recommended work:

1. Continue after the new practical TypeScript bridge.
2. Suggested next practical direction:
   - component/data-flow mental models before a separate React track,
   - React-style props and state update patterns,
   - URL/search params and basic routing mental models if needed,
   - debugging with console/devtools workflows.
3. Keep the chapter sequence beginner-friendly and practical. Each chapter should answer both:
   - what the syntax does,
   - where it appears in real projects.
4. For every new chapter:
   - first search existing `practicalLessons` and `conceptLessons` for the topic and decide whether to improve/reorder an existing chapter instead of adding a duplicate,
   - only add a new chapter if it teaches a distinct everyday skill or a mental model needed for real projects,
   - add lesson data to `practicalLessons` before `conceptLessons`,
   - keep diagrams behaviorally accurate,
   - run `npm run check`,
   - run `npm run screenshots:chapter -- <chapter-number>` for dense chapters,
   - inspect screenshots and fix layout issues before committing.
5. Browser/app JavaScript, async, storage, testing, production patterns, and the beginner TypeScript bridge are already represented in the practical track or mental-model library. Prefer improving weak existing chapters over adding duplicates.
6. Continue only where it supports confidence with React, Next.js, and real projects:
   - component/data-flow mental models before creating a separate React track,
   - props/state and parent-child data flow,
   - URL/search params and basic routing mental models if needed,
   - debugging with console/devtools,
   - reading common React/Next.js TypeScript patterns.
7. Avoid unnecessary chapters. The course is not meant to cover every JavaScript edge case. Aim for the learner to complete 80% and feel confident reading/writing everyday JavaScript and understanding React/Next.js fundamentals.
8. If a topic already exists in the mental model library, decide whether the practical track needs a shorter applied version. If not, link the idea through copy/sequence rather than duplicating it.

Please continue from the current repository state. Start by checking `git status -sb`, then build the next practical chapter batch.
