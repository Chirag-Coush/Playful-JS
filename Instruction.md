Playful JS course design notes

- The diagrams must stay behaviorally faithful to JavaScript execution. Do not skip a state if skipping it would teach a false mental model.
- Assignment should be shown as: create/identify the left-side variable or property, evaluate the right-side expression, then point the left-side wire to the resulting value.
- Function calls should show the call sequence clearly: the function value is evaluated, arguments are evaluated, parameters are created in the call frame, the body returns a value, and only then does the receiving variable point to the returned value.
- Avoid visual shortcuts where a variable or value appears "magically" without the explanation step naming what JavaScript just did.
- Keep visual conventions consistent across chapters: variables are boxes, primitive values are circles/pills, objects/functions are object-like values, and wires represent references to values.
- Visible variable boxes and primitive value nodes must use a full white background, never opacity-based dimming. Hidden future-step nodes should be fully hidden, not ghosted.
- Every chapter should be understandable to a beginner learning JavaScript for the first time, while still being accurate enough not to create misconceptions.
- Introduce a new technical term in plain language before relying on it. Do not assume that words such as callback, accumulator, prototype, compile-time, Promise, DOM, task, or microtask are already understood.
- Keep function-call vocabulary precise: a function name is a binding used to find a function value, a parameter is a local binding declared by the function, and an argument is the expression or value supplied at the call site. A callback is a function value used as an argument so other code can call it.
- Prefer one execution change per lesson step. If a sentence needs to describe several calls, assignments, or state changes, split it unless the combined view is explicitly a recap.
- Visible chapter titles should be unique. If two nearby chapters teach the same underlying idea, rename, repurpose, merge, or reorder them so each chapter has a clear reason to exist.
- Before adding a chapter, search both practical and concept lessons for duplicate topics. Add a chapter only when it teaches a distinct everyday skill or a necessary mental model.
