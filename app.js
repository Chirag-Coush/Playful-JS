const practicalLessons = [
  {
    id: "variables-and-constants-practical",
    section: "Everyday JavaScript basics",
    number: "Practical 1",
    title: "Variables and Constants",
    universeTitle: "Variables remember values for later code",
    intro:
      "Real projects use variables to keep track of changing information, and constants for values that should not be reassigned.",
    code: ["let score = 0;", "score = score + 1;", 'const appName = "Quiz";'],
    legend: ["variable", "value", "wire"],
    nodes: {
      score: { label: "score", kind: "variable-wide", x: 24, y: 36 },
      zero: { label: "0", kind: "value", x: 66, y: 26 },
      one: { label: "1", kind: "value", x: 66, y: 48 },
      appName: { label: "appName", kind: "variable-wide", x: 24, y: 72 },
      quiz: { label: '"Quiz"', kind: "string", x: 66, y: 72 },
    },
    steps: [
      {
        title: "Create score",
        description:
          "let creates a variable. score starts by pointing to the number value 0.",
        line: 0,
        visible: ["score", "zero"],
        wires: [{ id: "score-zero", from: "score", to: "zero", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["score", "zero"],
      },
      {
        title: "Read score before changing it",
        description:
          "score = score + 1 reads the old score first. JavaScript evaluates the right side before moving the left-side wire.",
        line: 1,
        visible: ["score", "zero"],
        wires: [{ id: "score-zero", from: "score", to: "zero", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["score", "zero"],
      },
      {
        title: "Point score to the new result",
        description:
          "0 + 1 produces the number 1. Reassignment moves score from 0 to 1.",
        line: 1,
        visible: ["score", "zero", "one"],
        wires: [{ id: "score-one", from: "score", to: "one", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["score", "one"],
      },
      {
        title: "Create a constant",
        description:
          "const also creates a variable-like binding, but JavaScript will not let you reassign that binding later.",
        line: 2,
        visible: ["score", "one", "appName", "quiz"],
        wires: [
          { id: "score-one", from: "score", to: "one", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "appName-quiz", from: "appName", to: "quiz", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["appName", "quiz"],
      },
    ],
    quiz: {
      prompt: "Which line is allowed to move its wire later?",
      options: ["let score", "const appName", "both are frozen"],
      answer: "let score",
      correct: "Correct. let bindings can be reassigned; const bindings cannot.",
      wrong: "Not quite. const prevents reassignment of the binding, while let can move to another value.",
    },
  },
  {
    id: "arithmetic-operators",
    section: "Everyday JavaScript basics",
    number: "Practical 2",
    title: "Arithmetic Operators",
    universeTitle: "Math expressions create result values",
    intro:
      "Arithmetic operators are how project code calculates totals, counters, discounts, scores, and positions.",
    code: ["let price = 20;", "let tax = 5;", "let total = price + tax;"],
    legend: ["variable", "value", "wire"],
    nodes: {
      price: { label: "price", kind: "variable-wide", x: 22, y: 28 },
      tax: { label: "tax", kind: "variable-wide", x: 22, y: 52 },
      total: { label: "total", kind: "variable-wide", x: 22, y: 76 },
      twenty: { label: "20", kind: "value", x: 60, y: 28 },
      five: { label: "5", kind: "value", x: 60, y: 52 },
      twentyFive: { label: "25", kind: "value", x: 72, y: 76 },
    },
    steps: [
      {
        title: "Store the price",
        description: "price points to 20.",
        line: 0,
        visible: ["price", "twenty"],
        wires: [{ id: "price-twenty", from: "price", to: "twenty", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["price", "twenty"],
      },
      {
        title: "Store the tax",
        description: "tax points to 5.",
        line: 1,
        visible: ["price", "twenty", "tax", "five"],
        wires: [
          { id: "price-twenty", from: "price", to: "twenty", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "tax-five", from: "tax", to: "five", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["tax", "five"],
      },
      {
        title: "Evaluate the right side",
        description: "price + tax reads 20 and 5, then creates the result value 25.",
        line: 2,
        visible: ["price", "twenty", "tax", "five", "twentyFive"],
        wires: [
          { id: "price-twenty", from: "price", to: "twenty", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "tax-five", from: "tax", to: "five", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["twenty", "five", "twentyFive"],
      },
      {
        title: "Store total",
        description: "total points to the result value 25. It does not point to price or tax.",
        line: 2,
        visible: ["price", "twenty", "tax", "five", "total", "twentyFive"],
        wires: [
          { id: "price-twenty", from: "price", to: "twenty", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "tax-five", from: "tax", to: "five", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "total-twentyFive", from: "total", to: "twentyFive", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["total", "twentyFive"],
      },
    ],
    quiz: {
      prompt: "What value does total point to?",
      options: ["20", "5", "25"],
      answer: "25",
      correct: "Correct. price + tax evaluates to 25, then total points to 25.",
      wrong: "Not quite. JavaScript evaluates the whole right side before assignment.",
    },
  },
  {
    id: "accept-user-input",
    section: "Everyday JavaScript basics",
    number: "Practical 3",
    title: "Accept User Input",
    universeTitle: "User input usually arrives as a string",
    intro:
      "Browser input and prompt values usually arrive as strings, even when the user types digits.",
    code: ['let input = prompt("Age?");', "let age = Number(input);", "let nextAge = age + 1;"],
    legend: ["variable", "value", "wire"],
    nodes: {
      input: { label: "input", kind: "variable-wide", x: 22, y: 34 },
      stringAge: { label: '"42"', kind: "string", x: 62, y: 34 },
      age: { label: "age", kind: "variable-wide", x: 22, y: 58 },
      numberAge: { label: "42", kind: "value", x: 62, y: 58 },
      nextAge: { label: "nextAge", kind: "variable-wide", x: 22, y: 82 },
      fortyThree: { label: "43", kind: "value", x: 72, y: 82 },
    },
    steps: [
      {
        title: "Prompt returns text",
        description: 'If the user types 42, prompt returns the string value "42", not the number 42.',
        line: 0,
        visible: ["input", "stringAge"],
        wires: [{ id: "input-stringAge", from: "input", to: "stringAge", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["input", "stringAge"],
      },
      {
        title: "Convert before math",
        description: 'Number(input) reads the string "42" and creates the number value 42.',
        line: 1,
        visible: ["input", "stringAge", "age", "numberAge"],
        wires: [
          { id: "input-stringAge", from: "input", to: "stringAge", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "age-numberAge", from: "age", to: "numberAge", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["age", "numberAge"],
      },
      {
        title: "Evaluate age + 1",
        description: "age + 1 reads the number 42, adds 1, and creates the number value 43.",
        line: 2,
        visible: ["input", "stringAge", "age", "numberAge", "fortyThree"],
        wires: [
          { id: "input-stringAge", from: "input", to: "stringAge", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "age-numberAge", from: "age", to: "numberAge", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["numberAge", "fortyThree"],
      },
      {
        title: "Store nextAge",
        description: "After the right side is evaluated, nextAge points to the result value 43.",
        line: 2,
        visible: ["input", "stringAge", "age", "numberAge", "nextAge", "fortyThree"],
        wires: [
          { id: "input-stringAge", from: "input", to: "stringAge", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "age-numberAge", from: "age", to: "numberAge", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "nextAge-fortyThree", from: "nextAge", to: "fortyThree", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["nextAge", "fortyThree"],
      },
    ],
    quiz: {
      prompt: "What does prompt usually give you?",
      options: ["a string", "a number", "an object"],
      answer: "a string",
      correct: "Correct. Convert input before doing number math.",
      wrong: "Not quite. Prompt and form input values usually start as strings.",
    },
  },
  {
    id: "type-conversion-practical",
    section: "Everyday JavaScript basics",
    number: "Practical 4",
    title: "Type Conversion",
    universeTitle: "Conversion changes the kind of value you work with",
    intro:
      "Conversion is common when data comes from forms, URLs, APIs, or localStorage.",
    code: ['let countText = "3";', "let count = Number(countText);", "let label = String(count);"],
    legend: ["variable", "value", "wire"],
    nodes: {
      countText: { label: "countText", kind: "variable-wide", x: 18, y: 32 },
      stringThree: { label: '"3"', kind: "string", x: 62, y: 32 },
      count: { label: "count", kind: "variable-wide", x: 18, y: 58 },
      numberThree: { label: "3", kind: "value", x: 62, y: 58 },
      label: { label: "label", kind: "variable-wide", x: 18, y: 82 },
      stringAgain: { label: '"3"', kind: "string", x: 62, y: 82 },
    },
    steps: [
      {
        title: "Start with text",
        description: 'countText points to the string "3".',
        line: 0,
        visible: ["countText", "stringThree"],
        wires: [{ id: "countText-stringThree", from: "countText", to: "stringThree", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["countText", "stringThree"],
      },
      {
        title: "Convert to number",
        description: 'Number(countText) creates the number 3, so count can be used in arithmetic.',
        line: 1,
        visible: ["countText", "stringThree", "count", "numberThree"],
        wires: [
          { id: "countText-stringThree", from: "countText", to: "stringThree", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "count-numberThree", from: "count", to: "numberThree", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["count", "numberThree"],
      },
      {
        title: "Convert back to text",
        description: "String(count) creates a string value for labels, messages, or attributes.",
        line: 2,
        visible: ["countText", "stringThree", "count", "numberThree", "label", "stringAgain"],
        wires: [
          { id: "countText-stringThree", from: "countText", to: "stringThree", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "count-numberThree", from: "count", to: "numberThree", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "label-stringAgain", from: "label", to: "stringAgain", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["label", "stringAgain"],
      },
    ],
    quiz: {
      prompt: "Why convert form text before arithmetic?",
      options: ["forms give strings", "numbers cannot be stored", "objects require it"],
      answer: "forms give strings",
      correct: "Correct. Most user input starts as text.",
      wrong: "Not quite. The practical reason is that input often arrives as a string.",
    },
  },
  {
    id: "math-and-random",
    section: "Everyday JavaScript basics",
    number: "Practical 5",
    title: "Math and Random Numbers",
    universeTitle: "Math helpers create useful number values",
    intro:
      "The Math object gives you helpers for random values and rounding. This example uses floor for dice, and shows ceil when you need to round up.",
    code: ["let random = Math.random();", "let scaled = random * 6;", "let roundedDown = Math.floor(scaled);", "let roundedUp = Math.ceil(scaled);", "let dice = roundedDown + 1;"],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      math: { label: "Math", kind: "variable-wide", x: 18, y: 18 },
      randomValue: { label: "0.7", kind: "value", x: 62, y: 18 },
      random: { label: "random", kind: "variable-wide", x: 18, y: 34 },
      scaled: { label: "scaled", kind: "variable-wide", x: 18, y: 50 },
      scaledValue: { label: "4.3", kind: "value", x: 62, y: 48 },
      roundedDown: { label: "roundedDown", kind: "variable-wide", x: 18, y: 64 },
      roundedUp: { label: "roundedUp", kind: "variable-wide", x: 18, y: 78 },
      four: { label: "4", kind: "value", x: 62, y: 64 },
      five: { label: "5", kind: "value", x: 80, y: 78 },
      dice: { label: "dice", kind: "variable-wide", x: 58, y: 88 },
    },
    steps: [
      {
        title: "Call Math.random",
        description: "Math.random() creates a number from 0 up to, but not including, 1.",
        line: 0,
        visible: ["math", "random", "randomValue"],
        wires: [{ id: "random-randomValue", from: "random", to: "randomValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["random", "randomValue"],
      },
      {
        title: "Scale the range",
        description: "Multiplying by 6 changes the range from 0-1 to 0-6.",
        line: 1,
        visible: ["math", "random", "randomValue", "scaled", "scaledValue"],
        wires: [
          { id: "random-randomValue", from: "random", to: "randomValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "scaled-scaledValue", from: "scaled", to: "scaledValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["scaled", "scaledValue"],
      },
      {
        title: "Round down",
        description: "Math.floor(4.3) creates the number 4. For dice, this gives us a whole number from 0 to 5.",
        line: 2,
        visible: ["math", "random", "randomValue", "scaled", "scaledValue", "roundedDown", "four"],
        wires: [
          { id: "random-randomValue", from: "random", to: "randomValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "scaled-scaledValue", from: "scaled", to: "scaledValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "roundedDown-four", from: "roundedDown", to: "four", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["roundedDown", "four"],
      },
      {
        title: "Round up when needed",
        description: "Math.ceil(4.3) creates the number 5. Use ceil when any leftover fraction should move to the next whole number.",
        line: 3,
        visible: ["math", "random", "randomValue", "scaled", "scaledValue", "roundedDown", "four", "roundedUp", "five"],
        wires: [
          { id: "random-randomValue", from: "random", to: "randomValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "scaled-scaledValue", from: "scaled", to: "scaledValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "roundedDown-four", from: "roundedDown", to: "four", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "roundedUp-five", from: "roundedUp", to: "five", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["roundedUp", "five"],
      },
      {
        title: "Shift to a dice range",
        description: "roundedDown + 1 creates 5. Adding 1 changes the floor range from 0-5 to a dice range of 1-6.",
        line: 4,
        visible: ["math", "random", "randomValue", "scaled", "scaledValue", "roundedDown", "four", "roundedUp", "five", "dice"],
        wires: [
          { id: "random-randomValue", from: "random", to: "randomValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "scaled-scaledValue", from: "scaled", to: "scaledValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "roundedDown-four", from: "roundedDown", to: "four", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "roundedUp-five", from: "roundedUp", to: "five", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "dice-five", from: "dice", to: "five", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["dice", "five"],
      },
    ],
    quiz: {
      prompt: "Which helper rounds 4.3 up to 5?",
      options: ["Math.ceil", "Math.floor", "Math.random"],
      answer: "Math.ceil",
      correct: "Correct. ceil moves a fractional number up to the next whole number.",
      wrong: "Not quite. floor rounds down; ceil rounds up.",
    },
  },
  {
    id: "if-statements-practical",
    section: "Decisions and branching",
    number: "Practical 6",
    title: "If Statements",
    universeTitle: "if chooses which code path runs",
    intro:
      "Real projects use if statements for validation, permissions, empty states, loading states, and game rules.",
    code: ["let age = 17;", 'let message = "Wait";', "if (age >= 18) {", '  message = "Enter";', "}"],
    legend: ["variable", "value", "wire"],
    nodes: {
      age: { label: "age", kind: "variable-wide", x: 20, y: 28 },
      seventeen: { label: "17", kind: "value", x: 60, y: 28 },
      condition: { label: "false", kind: "string", x: 62, y: 52 },
      message: { label: "message", kind: "variable-wide", x: 20, y: 76 },
      wait: { label: '"Wait"', kind: "string", x: 62, y: 76 },
      enter: { label: '"Enter"', kind: "string", x: 78, y: 76 },
    },
    steps: [
      {
        title: "Store age",
        description: "age points to 17.",
        line: 0,
        visible: ["age", "seventeen"],
        wires: [{ id: "age-seventeen", from: "age", to: "seventeen", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["age", "seventeen"],
      },
      {
        title: "Set the default message",
        description: 'message starts at "Wait". This value remains unless the if block runs.',
        line: 1,
        visible: ["age", "seventeen", "message", "wait"],
        wires: [
          { id: "age-seventeen", from: "age", to: "seventeen", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "message-wait", from: "message", to: "wait", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["message", "wait"],
      },
      {
        title: "Ask the condition",
        description: "age >= 18 evaluates to false because 17 is less than 18.",
        line: 2,
        visible: ["age", "seventeen", "message", "wait", "condition"],
        wires: [
          { id: "age-seventeen", from: "age", to: "seventeen", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "message-wait", from: "message", to: "wait", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["condition"],
      },
      {
        title: "Skip the block",
        description: 'Because the condition is false, JavaScript skips message = "Enter". message still points to "Wait".',
        line: 2,
        visible: ["age", "seventeen", "message", "wait", "condition", "enter"],
        wires: [
          { id: "age-seventeen", from: "age", to: "seventeen", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "message-wait", from: "message", to: "wait", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["message", "wait"],
        muted: ["enter"],
      },
    ],
    quiz: {
      prompt: "What does message point to after this code?",
      options: ['"Wait"', '"Enter"', "false"],
      answer: '"Wait"',
      correct: "Correct. The if block did not run because the condition was false.",
      wrong: "Not quite. A false if condition skips the code inside the block.",
    },
  },
  {
    id: "logical-operators",
    section: "Decisions and branching",
    number: "Practical 7",
    title: "Logical Operators",
    universeTitle: "Logical operators combine questions",
    intro:
      "Use &&, ||, and ! when one decision depends on more than one boolean fact.",
    code: ["let loggedIn = true;", "let isAdmin = false;", "let canEdit = loggedIn && isAdmin;", "let canView = loggedIn || isAdmin;", "let blocked = !loggedIn;"],
    legend: ["variable", "value", "wire"],
    nodes: {
      loggedIn: { label: "loggedIn", kind: "variable-wide", x: 20, y: 22 },
      trueValue: { label: "true", kind: "string", x: 64, y: 22 },
      isAdmin: { label: "isAdmin", kind: "variable-wide", x: 20, y: 42 },
      falseValue: { label: "false", kind: "string", x: 64, y: 42 },
      canEdit: { label: "canEdit", kind: "variable-wide", x: 20, y: 58 },
      canView: { label: "canView", kind: "variable-wide", x: 20, y: 72 },
      blocked: { label: "blocked", kind: "variable-wide", x: 20, y: 86 },
    },
    steps: [
      {
        title: "Store the first fact",
        description: "loggedIn points to true.",
        line: 0,
        visible: ["loggedIn", "trueValue"],
        wires: [{ id: "loggedIn-trueValue", from: "loggedIn", to: "trueValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["loggedIn", "trueValue"],
      },
      {
        title: "Store the second fact",
        description: "isAdmin points to false.",
        line: 1,
        visible: ["loggedIn", "trueValue", "isAdmin", "falseValue"],
        wires: [
          { id: "loggedIn-trueValue", from: "loggedIn", to: "trueValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "isAdmin-falseValue", from: "isAdmin", to: "falseValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["isAdmin", "falseValue"],
      },
      {
        title: "Combine with &&",
        description: "&& only gives true when both sides are true. Here one side is false, so the expression creates false.",
        line: 2,
        visible: ["loggedIn", "trueValue", "isAdmin", "falseValue"],
        wires: [
          { id: "loggedIn-trueValue", from: "loggedIn", to: "trueValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "isAdmin-falseValue", from: "isAdmin", to: "falseValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["trueValue", "falseValue"],
      },
      {
        title: "Store canEdit",
        description: "After the expression is evaluated, canEdit points to the boolean result false.",
        line: 2,
        visible: ["loggedIn", "trueValue", "isAdmin", "falseValue", "canEdit"],
        wires: [
          { id: "loggedIn-trueValue", from: "loggedIn", to: "trueValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "isAdmin-falseValue", from: "isAdmin", to: "falseValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "canEdit-falseValue", from: "canEdit", to: "falseValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 8 } },
        ],
        active: ["canEdit", "falseValue"],
      },
      {
        title: "Try ||",
        description: "|| gives true when at least one side is true. loggedIn is true, so loggedIn || isAdmin creates true.",
        line: 3,
        visible: ["loggedIn", "trueValue", "isAdmin", "falseValue", "canEdit"],
        wires: [
          { id: "loggedIn-trueValue", from: "loggedIn", to: "trueValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "isAdmin-falseValue", from: "isAdmin", to: "falseValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "canEdit-falseValue", from: "canEdit", to: "falseValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 8 } },
        ],
        active: ["trueValue"],
      },
      {
        title: "Store canView",
        description: "After || is evaluated, canView points to true because one side of the expression was true.",
        line: 3,
        visible: ["loggedIn", "trueValue", "isAdmin", "falseValue", "canEdit", "canView"],
        wires: [
          { id: "loggedIn-trueValue", from: "loggedIn", to: "trueValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "isAdmin-falseValue", from: "isAdmin", to: "falseValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "canEdit-falseValue", from: "canEdit", to: "falseValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 8 } },
          { id: "canView-trueValue", from: "canView", to: "trueValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 8 } },
        ],
        active: ["canView", "trueValue"],
      },
      {
        title: "Flip with !",
        description: "! flips a boolean. loggedIn is true, so !loggedIn creates false and blocked points to false.",
        line: 4,
        visible: ["loggedIn", "trueValue", "isAdmin", "falseValue", "canEdit", "canView", "blocked"],
        wires: [
          { id: "loggedIn-trueValue", from: "loggedIn", to: "trueValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "isAdmin-falseValue", from: "isAdmin", to: "falseValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "canEdit-falseValue", from: "canEdit", to: "falseValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 8 } },
          { id: "canView-trueValue", from: "canView", to: "trueValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 8 } },
          { id: "blocked-falseValue", from: "blocked", to: "falseValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: -8 } },
        ],
        active: ["blocked", "falseValue"],
      },
    ],
    quiz: {
      prompt: "Which operator gives true when at least one side is true?",
      options: ["||", "&&", "!"],
      answer: "||",
      correct: "Correct. || only needs one side to be true.",
      wrong: "Not quite. && needs both sides; ! flips one boolean.",
    },
  },
  {
    id: "ternary-operator",
    section: "Decisions and branching",
    number: "Practical 8",
    title: "Ternary Operator",
    universeTitle: "A ternary chooses one of two values",
    intro:
      "The ternary operator is a compact way to choose a value for labels, classes, or messages.",
    code: ["let count = 0;", 'let label = count === 0 ? "Empty" : "Ready";'],
    legend: ["variable", "value", "wire"],
    nodes: {
      count: { label: "count", kind: "variable-wide", x: 20, y: 34 },
      zero: { label: "0", kind: "value", x: 58, y: 34 },
      condition: { label: "true", kind: "string", x: 72, y: 34 },
      label: { label: "label", kind: "variable-wide", x: 20, y: 70 },
      empty: { label: '"Empty"', kind: "string", x: 58, y: 70 },
      ready: { label: '"Ready"', kind: "string", x: 78, y: 70 },
    },
    steps: [
      {
        title: "Store count",
        description: "count points to 0.",
        line: 0,
        visible: ["count", "zero"],
        wires: [{ id: "count-zero", from: "count", to: "zero", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["count", "zero"],
      },
      {
        title: "Evaluate the condition",
        description: "count === 0 evaluates to true.",
        line: 1,
        visible: ["count", "zero", "condition"],
        wires: [{ id: "count-zero", from: "count", to: "zero", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["condition"],
      },
      {
        title: "Choose the first value",
        description: 'Because the condition is true, the ternary produces "Empty".',
        line: 1,
        visible: ["count", "zero", "condition", "label", "empty", "ready"],
        wires: [
          { id: "count-zero", from: "count", to: "zero", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "label-empty", from: "label", to: "empty", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["label", "empty"],
        muted: ["ready"],
      },
    ],
    quiz: {
      prompt: "Which value is chosen when the condition is true?",
      options: ['"Empty"', '"Ready"', "both"],
      answer: '"Empty"',
      correct: "Correct. condition ? first : second chooses the first value when true.",
      wrong: "Not quite. A ternary chooses only one branch.",
    },
  },
  {
    id: "switches-practical",
    section: "Decisions and branching",
    number: "Practical 9",
    title: "Switches",
    universeTitle: "switch matches one case value",
    intro:
      "switch is useful when one value can map to several possible actions or labels.",
    code: ['let role = "editor";', 'let access = "none";', "switch (role) {", '  case "admin": access = "all"; break;', '  case "editor": access = "write"; break;', "}"],
    legend: ["variable", "value", "wire"],
    nodes: {
      role: { label: "role", kind: "variable-wide", x: 20, y: 34 },
      editor: { label: '"editor"', kind: "string", x: 62, y: 34 },
      adminCase: { label: '"admin"', kind: "string", x: 62, y: 52 },
      editorCase: { label: '"editor"', kind: "string", x: 62, y: 66 },
      access: { label: "access", kind: "variable-wide", x: 20, y: 80 },
      none: { label: '"none"', kind: "string", x: 62, y: 80 },
      write: { label: '"write"', kind: "string", x: 82, y: 80 },
    },
    steps: [
      {
        title: "Store role",
        description: 'role points to "editor".',
        line: 0,
        visible: ["role", "editor"],
        wires: [{ id: "role-editor", from: "role", to: "editor", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["role", "editor"],
      },
      {
        title: "Set a default",
        description: 'access starts by pointing to "none". A matching case can reassign it later.',
        line: 1,
        visible: ["role", "editor", "access", "none"],
        wires: [
          { id: "role-editor", from: "role", to: "editor", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "access-none", from: "access", to: "none", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["access", "none"],
      },
      {
        title: "Check cases in order",
        description: 'The "admin" case does not match the role value.',
        line: 3,
        visible: ["role", "editor", "access", "none", "adminCase"],
        wires: [
          { id: "role-editor", from: "role", to: "editor", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "access-none", from: "access", to: "none", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["adminCase"],
        muted: ["adminCase"],
      },
      {
        title: "Find the matching case",
        description: 'The "editor" case matches, so that case body runs.',
        line: 4,
        visible: ["role", "editor", "access", "none", "adminCase", "editorCase"],
        wires: [
          { id: "role-editor", from: "role", to: "editor", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "access-none", from: "access", to: "none", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["editorCase"],
      },
      {
        title: "Store the case result",
        description: 'The matching case moves access from "none" to "write". break stops the switch from continuing.',
        line: 4,
        visible: ["role", "editor", "editorCase", "access", "none", "write"],
        wires: [
          { id: "role-editor", from: "role", to: "editor", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "access-write", from: "access", to: "write", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["access", "write"],
        muted: ["none"],
      },
    ],
    quiz: {
      prompt: "Which case runs for role = \"editor\"?",
      options: ['case "admin"', 'case "editor"', "all cases"],
      answer: 'case "editor"',
      correct: "Correct. switch compares the value to each case until it finds a match.",
      wrong: "Not quite. Only the matching case should run, then break exits.",
    },
  },
  {
    id: "string-methods-practical",
    section: "Strings in real projects",
    number: "Practical 10",
    title: "String Methods",
    universeTitle: "String methods create cleaned or checked values",
    intro:
      "String methods are used constantly for forms, search, filenames, labels, and API data cleanup.",
    code: ['let name = "  Ada Lovelace  ";', "let clean = name.trim();", "let hasAda = clean.includes(\"Ada\");"],
    legend: ["variable", "value", "wire"],
    nodes: {
      name: { label: "name", kind: "variable-wide", x: 20, y: 32 },
      raw: { label: '"  Ada Lovelace  "', kind: "string", x: 68, y: 32 },
      clean: { label: "clean", kind: "variable-wide", x: 20, y: 58 },
      cleanValue: { label: '"Ada Lovelace"', kind: "string", x: 68, y: 58 },
      hasAda: { label: "hasAda", kind: "variable-wide", x: 20, y: 82 },
      trueValue: { label: "true", kind: "string", x: 64, y: 82 },
    },
    steps: [
      {
        title: "Start with messy text",
        description: 'name points to the full messy string, including the spaces around "Ada Lovelace".',
        line: 0,
        visible: ["name", "raw"],
        wires: [{ id: "name-raw", from: "name", to: "raw", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["name", "raw"],
      },
      {
        title: "Trim spaces",
        description: 'trim() removes only the outer spaces, so clean points to "Ada Lovelace". It does not mutate name.',
        line: 1,
        visible: ["name", "raw", "clean", "cleanValue"],
        wires: [
          { id: "name-raw", from: "name", to: "raw", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "clean-cleanValue", from: "clean", to: "cleanValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["clean", "cleanValue"],
      },
      {
        title: "Check for text",
        description: 'includes("Ada") asks whether the cleaned string contains "Ada". It returns true; it does not create the string "Ada".',
        line: 2,
        visible: ["name", "raw", "clean", "cleanValue", "hasAda", "trueValue"],
        wires: [
          { id: "name-raw", from: "name", to: "raw", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "clean-cleanValue", from: "clean", to: "cleanValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "hasAda-trueValue", from: "hasAda", to: "trueValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["hasAda", "trueValue"],
      },
    ],
    quiz: {
      prompt: "Does trim() change the original string value?",
      options: ["no", "yes", "only sometimes"],
      answer: "no",
      correct: "Correct. Strings are primitive values; trim creates a new string.",
      wrong: "Not quite. String methods like trim return a new string value.",
    },
  },
  {
    id: "string-slicing-practical",
    section: "Strings in real projects",
    number: "Practical 11",
    title: "String Slicing",
    universeTitle: "slice copies part of a string",
    intro:
      "Slicing is useful for initials, file extensions, short IDs, and formatting UI text. For unknown filenames, find the cut point first.",
    code: ['let filename = "waterfal-image.jpg";', 'let dotIndex = filename.lastIndexOf(".");', "let extension = filename.slice(dotIndex + 1);", "let nameOnly = filename.slice(0, dotIndex);"],
    legend: ["variable", "value", "wire"],
    nodes: {
      filename: { label: "filename", kind: "variable-wide", x: 18, y: 22 },
      photo: { label: '"waterfal-image.jpg"', kind: "string", x: 64, y: 22 },
      dotIndex: { label: "dotIndex", kind: "variable-wide", x: 18, y: 42 },
      fourteen: { label: "14", kind: "value", x: 64, y: 42 },
      extension: { label: "extension", kind: "variable-wide", x: 18, y: 62 },
      jpg: { label: '"jpg"', kind: "string", x: 64, y: 62 },
      nameOnly: { label: "nameOnly", kind: "variable-wide", x: 18, y: 82 },
      baseName: { label: '"waterfal-image"', kind: "string", x: 64, y: 82 },
    },
    steps: [
      {
        title: "Store the full string",
        description: 'filename points to the string "waterfal-image.jpg". String positions start at index 0.',
        line: 0,
        visible: ["filename", "photo"],
        wires: [{ id: "filename-photo", from: "filename", to: "photo", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["filename", "photo"],
      },
      {
        title: "Find the dot first",
        description: 'lastIndexOf(".") finds the final dot at index 14. That index depends on the filename length.',
        line: 1,
        visible: ["filename", "photo", "dotIndex", "fourteen"],
        wires: [
          { id: "filename-photo", from: "filename", to: "photo", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "dotIndex-fourteen", from: "dotIndex", to: "fourteen", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["dotIndex", "fourteen"],
      },
      {
        title: "Slice after the dot",
        description: 'slice(dotIndex + 1) starts after the dot, so it creates the new string "jpg" even when the filename is longer.',
        line: 2,
        visible: ["filename", "photo", "dotIndex", "fourteen", "extension", "jpg"],
        wires: [
          { id: "filename-photo", from: "filename", to: "photo", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "dotIndex-fourteen", from: "dotIndex", to: "fourteen", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "extension-jpg", from: "extension", to: "jpg", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["extension", "jpg"],
      },
      {
        title: "Slice before the dot",
        description: 'slice(0, dotIndex) copies from the start up to the dot, creating "waterfal-image". For "Adventure.jpg", it would create "Adventure".',
        line: 3,
        visible: ["filename", "photo", "dotIndex", "fourteen", "extension", "jpg", "nameOnly", "baseName"],
        wires: [
          { id: "filename-photo", from: "filename", to: "photo", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "dotIndex-fourteen", from: "dotIndex", to: "fourteen", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "extension-jpg", from: "extension", to: "jpg", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "nameOnly-baseName", from: "nameOnly", to: "baseName", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["nameOnly", "baseName"],
      },
    ],
    quiz: {
      prompt: "Why find dotIndex before slicing the extension?",
      options: ["names vary", "slice mutates", "dots vanish"],
      answer: "names vary",
      correct: "Correct. Finding the dot avoids hard-coding an index that only works for one filename.",
      wrong: "Not quite. The point is to find the right cut position for whatever filename you have.",
    },
  },
  {
    id: "method-chaining-practical",
    section: "Strings in real projects",
    number: "Practical 12",
    title: "Method Chaining",
    universeTitle: "Each method passes a value to the next method",
    intro:
      "Chaining is common when cleaning input before comparing, searching, or saving it.",
    code: ['let email = "  ADA@EXAMPLE.COM ";', "let clean = email.trim().toLowerCase();"],
    legend: ["variable", "value", "wire"],
    nodes: {
      email: { label: "email", kind: "variable-wide", x: 20, y: 36 },
      raw: { label: '"  ADA@EXAMPLE.COM "', kind: "string", x: 68, y: 36 },
      trimmed: { label: '"ADA@EXAMPLE.COM"', kind: "string", x: 68, y: 58 },
      clean: { label: "clean", kind: "variable-wide", x: 20, y: 80 },
      lower: { label: '"ada@example.com"', kind: "string", x: 68, y: 80 },
    },
    steps: [
      {
        title: "Start with raw input",
        description: "email points to the messy string with outer spaces and uppercase letters.",
        line: 0,
        visible: ["email", "raw"],
        wires: [{ id: "email-raw", from: "email", to: "raw", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["email", "raw"],
      },
      {
        title: "Run the first method",
        description: "trim() creates an intermediate string without the outer spaces. The uppercase letters are still there.",
        line: 1,
        visible: ["email", "raw", "trimmed"],
        wires: [{ id: "email-raw", from: "email", to: "raw", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["trimmed"],
      },
      {
        title: "Run the next method",
        description: "toLowerCase() runs on the trimmed value and creates the lowercase string that clean points to.",
        line: 1,
        visible: ["email", "raw", "trimmed", "clean", "lower"],
        wires: [
          { id: "email-raw", from: "email", to: "raw", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "clean-lower", from: "clean", to: "lower", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["clean", "lower"],
      },
    ],
    quiz: {
      prompt: "In email.trim().toLowerCase(), what does toLowerCase run on?",
      options: ["the trimmed string", "the original variable box", "the method name"],
      answer: "the trimmed string",
      correct: "Correct. Each method returns a value, then the next method runs on that value.",
      wrong: "Not quite. Chaining passes the returned value to the next method.",
    },
  },
  {
    id: "strict-equality-practical",
    section: "Decisions and branching",
    number: "Practical 13",
    title: "Strict Equality",
    universeTitle: "=== compares value and type",
    intro:
      "Use strict equality in real projects so JavaScript does not silently convert values during comparison.",
    code: ['let input = "5";', "let count = 5;", "let same = input === count;"],
    legend: ["variable", "value", "wire"],
    nodes: {
      input: { label: "input", kind: "variable-wide", x: 20, y: 32 },
      stringFive: { label: '"5"', kind: "string", x: 62, y: 32 },
      count: { label: "count", kind: "variable-wide", x: 20, y: 56 },
      numberFive: { label: "5", kind: "value", x: 62, y: 56 },
      same: { label: "same", kind: "variable-wide", x: 20, y: 82 },
      falseValue: { label: "false", kind: "string", x: 62, y: 82 },
    },
    steps: [
      {
        title: "Store a string",
        description: 'input points to the string "5".',
        line: 0,
        visible: ["input", "stringFive"],
        wires: [{ id: "input-stringFive", from: "input", to: "stringFive", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["input", "stringFive"],
      },
      {
        title: "Store a number",
        description: "count points to the number 5. It looks similar, but it is a different kind of value.",
        line: 1,
        visible: ["input", "stringFive", "count", "numberFive"],
        wires: [
          { id: "input-stringFive", from: "input", to: "stringFive", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "count-numberFive", from: "count", to: "numberFive", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["count", "numberFive"],
      },
      {
        title: "Compare strictly",
        description: "=== does not convert the string to a number, so the answer is false.",
        line: 2,
        visible: ["input", "stringFive", "count", "numberFive", "same", "falseValue"],
        wires: [
          { id: "input-stringFive", from: "input", to: "stringFive", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "count-numberFive", from: "count", to: "numberFive", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "same-falseValue", from: "same", to: "falseValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["same", "falseValue"],
      },
    ],
    quiz: {
      prompt: 'What is "5" === 5?',
      options: ["false", "true", '"55"'],
      answer: "false",
      correct: "Correct. One is a string and one is a number.",
      wrong: "Not quite. Strict equality checks type too.",
    },
  },
  {
    id: "for-loops-practical",
    section: "Loops and repeated work",
    number: "Practical 14",
    title: "For Loops",
    universeTitle: "A loop repeats a block while a condition stays true",
    intro:
      "Loops are useful when code needs to repeat work for counters, arrays, animation frames, or repeated UI rows.",
    code: ["let total = 0;", "for (let i = 1; i <= 3; i++) {", "  total = total + i;", "}"],
    legend: ["variable", "value", "wire"],
    nodes: {
      total: { label: "total", kind: "variable-wide", x: 20, y: 30 },
      i: { label: "i", kind: "variable", x: 22, y: 62 },
      zero: { label: "0", kind: "value", x: 58, y: 22 },
      one: { label: "1", kind: "value", x: 58, y: 42 },
      two: { label: "2", kind: "value", x: 58, y: 62 },
      three: { label: "3", kind: "value", x: 72, y: 62 },
      four: { label: "4", kind: "value", x: 56, y: 82 },
      six: { label: "6", kind: "value", x: 78, y: 82 },
    },
    steps: [
      {
        title: "Start total",
        description: "total begins at 0.",
        line: 0,
        visible: ["total", "zero"],
        wires: [{ id: "total-zero", from: "total", to: "zero", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["total", "zero"],
      },
      {
        title: "Create loop counter",
        description: "The loop creates i and starts it at 1. Then JavaScript checks i <= 3, which is true.",
        line: 1,
        visible: ["total", "zero", "i", "one"],
        wires: [
          { id: "total-zero", from: "total", to: "zero", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "i-one", from: "i", to: "one", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["i", "one"],
      },
      {
        title: "First pass: add 1",
        description: "The body runs with i pointing to 1. total = total + i creates 1, so total moves from 0 to 1.",
        line: 2,
        visible: ["total", "i", "one"],
        wires: [
          { id: "total-one", from: "total", to: "one", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: -8 } },
          { id: "i-one", from: "i", to: "one", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 8 } },
        ],
        active: ["total", "i", "one"],
      },
      {
        title: "Second pass: add 2",
        description: "After i++, i points to 2. The condition is still true, so total becomes 1 + 2, which is 3.",
        line: 2,
        visible: ["total", "i", "one", "two", "three"],
        wires: [
          { id: "i-two", from: "i", to: "two", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "total-three", from: "total", to: "three", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["total", "i", "two", "three"],
      },
      {
        title: "Third pass: add 3",
        description: "After another i++, i points to 3. The body runs one last time, so total becomes 3 + 3, which is 6.",
        line: 2,
        visible: ["total", "i", "three", "six"],
        wires: [
          { id: "i-three", from: "i", to: "three", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: -10 } },
          { id: "total-six", from: "total", to: "six", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["total", "i", "three", "six"],
      },
      {
        title: "Stop when the condition is false",
        description: "i++ runs again, so i becomes 4. Now i <= 3 is false, so the loop stops and total stays 6.",
        line: 1,
        visible: ["total", "i", "four", "six"],
        wires: [
          { id: "i-four", from: "i", to: "four", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "total-six", from: "total", to: "six", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["four", "six"],
        notes: [{ text: "1 + 2 + 3 = 6. The loop does not run for 4.", x: 64, y: 52 }],
      },
    ],
    quiz: {
      prompt: "Why does total change during the loop?",
      options: ["its wire moves each pass", "numbers mutate", "i points to total"],
      answer: "its wire moves each pass",
      correct: "Correct. Reassignment updates total after each calculation.",
      wrong: "Not quite. The variable total is reassigned during each loop pass.",
    },
  },
  {
    id: "arrays-practical",
    section: "Arrays and lists",
    number: "Practical 15",
    title: "Arrays",
    universeTitle: "Arrays keep ordered values behind index properties",
    intro:
      "Arrays are the everyday structure for lists: todos, users, products, scores, messages, and search results.",
    code: ['let todos = ["Learn"];', 'todos.push("Build");', "let first = todos[0];"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      todos: { label: "todos", kind: "variable-wide", x: 18, y: 46 },
      array: { label: "[ ]", kind: "object", x: 42, y: 46 },
      learn: { label: '"Learn"', kind: "string", x: 70, y: 32 },
      build: { label: '"Build"', kind: "string", x: 70, y: 58 },
      first: { label: "first", kind: "variable-wide", x: 18, y: 82 },
    },
    steps: [
      {
        title: "Create an array",
        description: 'The array value has index 0 pointing to "Learn".',
        line: 0,
        visible: ["todos", "array", "learn"],
        wires: [
          { id: "todos-array", from: "todos", to: "array", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-learn", from: "array", to: "learn", label: "0", tone: "cyan", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
        ],
        active: ["todos", "array", "learn"],
      },
      {
        title: "Push a new item",
        description: 'push mutates the array object by adding index 1 pointing to "Build".',
        line: 1,
        visible: ["todos", "array", "learn", "build"],
        wires: [
          { id: "todos-array", from: "todos", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-learn", from: "array", to: "learn", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-build", from: "array", to: "build", label: "1", tone: "orange", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["array", "build"],
      },
      {
        title: "Read by index",
        description: 'todos[0] follows the 0 property wire and returns "Learn", so first points to that string.',
        line: 2,
        visible: ["todos", "array", "learn", "build", "first"],
        wires: [
          { id: "todos-array", from: "todos", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-learn", from: "array", to: "learn", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-build", from: "array", to: "build", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "first-learn", from: "first", to: "learn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 16 } },
        ],
        active: ["first", "learn"],
      },
    ],
    quiz: {
      prompt: "What does todos[0] read?",
      options: ['"Learn"', '"Build"', "the array itself"],
      answer: '"Learn"',
      correct: "Correct. Index 0 points to the first item.",
      wrong: "Not quite. Array indexes start at 0.",
    },
  },
  {
    id: "functions-practical",
    section: "Functions and reusable logic",
    number: "Practical 16",
    title: "Functions",
    universeTitle: "A function stores reusable work as a value",
    intro:
      "Functions let real projects name a piece of work, run it with different inputs, and use the returned value later.",
    code: ["function greet(name) {", '  return "Hi, " + name;', "}", 'let message = greet("Ada");'],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      greet: { label: "greet", kind: "variable-wide", x: 18, y: 32 },
      fn: { label: "fn", kind: "object", x: 44, y: 32 },
      ada: { label: '"Ada"', kind: "string", x: 42, y: 66 },
      name: { label: "name", kind: "variable-wide", x: 62, y: 66 },
      hiAda: { label: '"Hi, Ada"', kind: "string", x: 78, y: 46 },
      message: { label: "message", kind: "variable-wide", x: 18, y: 82 },
    },
    steps: [
      {
        title: "Create the function value",
        description: "The function declaration creates a function value and makes greet point to it.",
        line: 0,
        visible: ["greet", "fn"],
        wires: [{ id: "greet-fn", from: "greet", to: "fn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["greet", "fn"],
      },
      {
        title: "Evaluate the argument",
        description: 'Calling greet("Ada") first evaluates the argument value "Ada".',
        line: 3,
        visible: ["greet", "fn", "ada"],
        wires: [{ id: "greet-fn", from: "greet", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["ada"],
      },
      {
        title: "Create the parameter wire",
        description: 'During the call, JavaScript creates the local parameter name and points it to "Ada".',
        line: 0,
        visible: ["greet", "fn", "ada", "name"],
        wires: [
          { id: "greet-fn", from: "greet", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "name", to: "ada", tone: "orange", fromAnchor: { side: "left" }, toAnchor: { side: "right" } },
        ],
        active: ["name", "ada"],
      },
      {
        title: "Return a new string",
        description: 'The return line reads name and creates the string value "Hi, Ada".',
        line: 1,
        visible: ["greet", "fn", "ada", "name", "hiAda"],
        wires: [
          { id: "greet-fn", from: "greet", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "name", to: "ada", tone: "slate", fromAnchor: { side: "left" }, toAnchor: { side: "right" } },
        ],
        active: ["name", "hiAda"],
      },
      {
        title: "Store the returned value",
        description: "After the function returns, message points to the returned string. The local name parameter is gone.",
        line: 3,
        visible: ["greet", "fn", "message", "hiAda"],
        wires: [
          { id: "greet-fn", from: "greet", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "message-hiAda", from: "message", to: "hiAda", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["message", "hiAda"],
      },
    ],
    quiz: {
      prompt: "What does message point to?",
      options: ['"Hi, Ada"', "greet", "name"],
      answer: '"Hi, Ada"',
      correct: "Correct. message points to the value returned by the function call.",
      wrong: "Not quite. The function call returns a string, and message points to that string.",
    },
  },
  {
    id: "variable-scope-practical",
    section: "Functions and reusable logic",
    number: "Practical 17",
    title: "Variable Scope",
    universeTitle: "Local variables live inside a call",
    intro:
      "Scope explains why helper variables inside a function do not leak into the rest of your app.",
    code: ['let outside = "global";', "function show() {", '  let inside = "local";', "}", "show();"],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      outside: { label: "outside", kind: "variable-wide", x: 18, y: 30 },
      global: { label: '"global"', kind: "string", x: 52, y: 30 },
      show: { label: "show", kind: "variable-wide", x: 18, y: 54 },
      fn: { label: "fn", kind: "object", x: 52, y: 54 },
      inside: { label: "inside", kind: "variable-wide", x: 18, y: 78 },
      local: { label: '"local"', kind: "string", x: 52, y: 78 },
    },
    steps: [
      {
        title: "Create an outside variable",
        description: 'outside points to "global" in the outer scope.',
        line: 0,
        visible: ["outside", "global"],
        wires: [{ id: "outside-global", from: "outside", to: "global", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["outside", "global"],
      },
      {
        title: "Create the function",
        description: "show points to a function value. The inside variable is not created yet.",
        line: 1,
        visible: ["outside", "global", "show", "fn"],
        wires: [
          { id: "outside-global", from: "outside", to: "global", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "show-fn", from: "show", to: "fn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["show", "fn"],
      },
      {
        title: "Call the function",
        description: 'During show(), JavaScript creates inside and points it to "local" in the function call frame.',
        line: 4,
        visible: ["outside", "global", "show", "fn", "inside", "local"],
        wires: [
          { id: "outside-global", from: "outside", to: "global", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "show-fn", from: "show", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "inside-local", from: "inside", to: "local", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["inside", "local"],
      },
      {
        title: "Leave the function",
        description: "When the call finishes, the local inside variable is gone. outside still exists.",
        line: 4,
        visible: ["outside", "global", "show", "fn"],
        wires: [
          { id: "outside-global", from: "outside", to: "global", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "show-fn", from: "show", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["outside", "global"],
      },
    ],
    quiz: {
      prompt: "Where does inside exist?",
      options: ["inside show()", "everywhere", "inside outside"],
      answer: "inside show()",
      correct: "Correct. inside is local to the function call.",
      wrong: "Not quite. A variable declared inside a function is local to that function call.",
    },
  },
  {
    id: "callbacks-practical",
    section: "Functions and reusable logic",
    number: "Practical 18",
    title: "Callbacks",
    universeTitle: "A callback is a function passed for later use",
    intro:
      "Callbacks are used for events, timers, array methods, and async work. You pass a function so another function can call it.",
    code: ["function run(callback) {", "  callback();", "}", 'run(() => console.log("Ready"));'],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      run: { label: "run", kind: "variable-wide", x: 18, y: 34 },
      runFn: { label: "fn", kind: "object", x: 42, y: 34 },
      callbackValue: { label: "fn", kind: "object", x: 70, y: 34 },
      callback: { label: "callback", kind: "variable-wide", x: 42, y: 62 },
      ready: { label: '"Ready"', kind: "string", x: 70, y: 72 },
    },
    steps: [
      {
        title: "Create run",
        description: "run points to a function value that expects another function as input.",
        line: 0,
        visible: ["run", "runFn"],
        wires: [{ id: "run-runFn", from: "run", to: "runFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["run", "runFn"],
      },
      {
        title: "Create the callback value",
        description: "The arrow function is also a function value. Passing it does not run it yet.",
        line: 3,
        visible: ["run", "runFn", "callbackValue"],
        wires: [{ id: "run-runFn", from: "run", to: "runFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["callbackValue"],
      },
      {
        title: "Parameter points to callback",
        description: "Inside run, the callback parameter points to the function value that was passed in.",
        line: 0,
        visible: ["run", "runFn", "callbackValue", "callback"],
        wires: [
          { id: "run-runFn", from: "run", to: "runFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "callback-callbackValue", from: "callback", to: "callbackValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["callback", "callbackValue"],
      },
      {
        title: "run calls the callback",
        description: 'callback() calls the function value, so console.log receives "Ready".',
        line: 1,
        visible: ["callback", "callbackValue", "ready"],
        wires: [
          { id: "callback-callbackValue", from: "callback", to: "callbackValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "callbackValue-ready", from: "callbackValue", to: "ready", label: "logs", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["callbackValue", "ready"],
      },
    ],
    quiz: {
      prompt: "When does the callback run?",
      options: ["when callback() is called", "when it is written", "never"],
      answer: "when callback() is called",
      correct: "Correct. Passing a callback and calling a callback are separate moments.",
      wrong: "Not quite. A callback function runs only when something calls it.",
    },
  },
  {
    id: "foreach-practical",
    section: "Arrays and lists",
    number: "Practical 19",
    title: "forEach",
    universeTitle: "forEach calls a callback once per item",
    intro:
      "Use forEach when you want to do something for each item, such as render rows, attach listeners, or log values.",
    code: ['let names = ["Ada", "Grace"];', "names.forEach(name => console.log(name));"],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      names: { label: "names", kind: "variable-wide", x: 16, y: 34 },
      array: { label: "[ ]", kind: "object", x: 42, y: 34 },
      ada: { label: '"Ada"', kind: "string", x: 70, y: 24 },
      grace: { label: '"Grace"', kind: "string", x: 70, y: 44 },
      callback: { label: "fn", kind: "object", x: 42, y: 68 },
      name: { label: "name", kind: "variable-wide", x: 62, y: 68 },
    },
    steps: [
      {
        title: "Create the array",
        description: 'names points to an array whose indexes point to "Ada" and "Grace".',
        line: 0,
        visible: ["names", "array", "ada", "grace"],
        wires: [
          { id: "names-array", from: "names", to: "array", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-ada", from: "array", to: "ada", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-grace", from: "array", to: "grace", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["names", "array"],
      },
      {
        title: "Pass a callback",
        description: "forEach receives a callback function. It will call that function for each array item.",
        line: 1,
        visible: ["names", "array", "ada", "grace", "callback"],
        wires: [
          { id: "names-array", from: "names", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-ada", from: "array", to: "ada", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-grace", from: "array", to: "grace", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["callback"],
      },
      {
        title: "First call gets Ada",
        description: 'On the first pass, the local parameter name points to "Ada".',
        line: 1,
        visible: ["names", "array", "ada", "grace", "callback", "name"],
        wires: [
          { id: "names-array", from: "names", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-ada", from: "array", to: "ada", label: "0", tone: "orange", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-grace", from: "array", to: "grace", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "name", to: "ada", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 14 } },
        ],
        active: ["name", "ada"],
      },
      {
        title: "Second call gets Grace",
        description: 'On the second pass, forEach calls the callback again and name points to "Grace".',
        line: 1,
        visible: ["names", "array", "ada", "grace", "callback", "name"],
        wires: [
          { id: "names-array", from: "names", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-ada", from: "array", to: "ada", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-grace", from: "array", to: "grace", label: "1", tone: "orange", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "name-grace", from: "name", to: "grace", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 14 } },
        ],
        active: ["name", "grace"],
      },
    ],
    quiz: {
      prompt: "What does forEach return for you to store?",
      options: ["undefined", "a new array", "the first item"],
      answer: "undefined",
      correct: "Correct. forEach is for doing work, not building a new array.",
      wrong: "Not quite. forEach calls a callback for side effects and returns undefined.",
    },
  },
  {
    id: "map-practical",
    section: "Arrays and lists",
    number: "Practical 20",
    title: "map",
    universeTitle: "map transforms each item into a new array",
    intro:
      "Use map when every input item should become one output item, such as product cards, labels, or calculated prices.",
    code: ["let prices = [10, 20];", "let withTax = prices.map(price => price * 1.2);"],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      prices: { label: "prices", kind: "variable-wide", x: 16, y: 30 },
      source: { label: "[ ]", kind: "object", x: 42, y: 30 },
      ten: { label: "10", kind: "value", x: 68, y: 20 },
      twenty: { label: "20", kind: "value", x: 68, y: 40 },
      callback: { label: "fn", kind: "object", x: 42, y: 62 },
      withTax: { label: "withTax", kind: "variable-wide", x: 16, y: 82 },
      resultArray: { label: "[ ]", kind: "object", x: 42, y: 82 },
      twelve: { label: "12", kind: "value", x: 68, y: 74 },
      twentyFour: { label: "24", kind: "value", x: 68, y: 90 },
    },
    steps: [
      {
        title: "Start with prices",
        description: "prices points to an array containing 10 and 20.",
        line: 0,
        visible: ["prices", "source", "ten", "twenty"],
        wires: [
          { id: "prices-source", from: "prices", to: "source", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-ten", from: "source", to: "ten", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "source-twenty", from: "source", to: "twenty", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["prices", "source"],
      },
      {
        title: "Pass a transform callback",
        description: "map receives a callback that turns each price into price * 1.2.",
        line: 1,
        visible: ["prices", "source", "ten", "twenty", "callback"],
        wires: [
          { id: "prices-source", from: "prices", to: "source", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-ten", from: "source", to: "ten", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "source-twenty", from: "source", to: "twenty", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["callback"],
      },
      {
        title: "Create transformed values",
        description: "The callback runs once for each item and returns 12 and 24.",
        line: 1,
        visible: ["prices", "source", "ten", "twenty", "callback", "twelve", "twentyFour"],
        wires: [
          { id: "prices-source", from: "prices", to: "source", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-ten", from: "source", to: "ten", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "source-twenty", from: "source", to: "twenty", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["twelve", "twentyFour"],
      },
      {
        title: "Store the new array",
        description: "map returns a new array. withTax points to that new array, while prices still points to the original array.",
        line: 1,
        visible: ["prices", "source", "ten", "twenty", "withTax", "resultArray", "twelve", "twentyFour"],
        wires: [
          { id: "prices-source", from: "prices", to: "source", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-ten", from: "source", to: "ten", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "source-twenty", from: "source", to: "twenty", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "withTax-resultArray", from: "withTax", to: "resultArray", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "resultArray-twelve", from: "resultArray", to: "twelve", label: "0", tone: "cyan", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "resultArray-twentyFour", from: "resultArray", to: "twentyFour", label: "1", tone: "cyan", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["withTax", "resultArray"],
      },
    ],
    quiz: {
      prompt: "Does map mutate prices?",
      options: ["no, it returns a new array", "yes", "only sometimes"],
      answer: "no, it returns a new array",
      correct: "Correct. map builds and returns a new array.",
      wrong: "Not quite. map returns a new array and leaves the original array in place.",
    },
  },
  {
    id: "filter-practical",
    section: "Arrays and lists",
    number: "Practical 21",
    title: "filter",
    universeTitle: "filter keeps items that pass a test",
    intro:
      "Use filter for search results, visible lists, completed todos, enabled settings, and any keep-or-remove decision.",
    code: ["let scores = [45, 80, 95];", "let passed = scores.filter(score => score >= 60);"],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      scores: { label: "scores", kind: "variable-wide", x: 16, y: 30 },
      source: { label: "[ ]", kind: "object", x: 42, y: 30 },
      fortyFive: { label: "45", kind: "value", x: 68, y: 18 },
      eighty: { label: "80", kind: "value", x: 68, y: 34 },
      ninetyFive: { label: "95", kind: "value", x: 68, y: 50 },
      callback: { label: "fn", kind: "object", x: 42, y: 64 },
      passed: { label: "passed", kind: "variable-wide", x: 16, y: 84 },
      resultArray: { label: "[ ]", kind: "object", x: 42, y: 84 },
    },
    steps: [
      {
        title: "Start with scores",
        description: "scores points to an array containing 45, 80, and 95.",
        line: 0,
        visible: ["scores", "source", "fortyFive", "eighty", "ninetyFive"],
        wires: [
          { id: "scores-source", from: "scores", to: "source", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-fortyFive", from: "source", to: "fortyFive", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -16 }, toAnchor: { side: "left" } },
          { id: "source-eighty", from: "source", to: "eighty", label: "1", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-ninetyFive", from: "source", to: "ninetyFive", label: "2", tone: "slate", fromAnchor: { side: "right", offset: 16 }, toAnchor: { side: "left" } },
        ],
        active: ["scores", "source"],
      },
      {
        title: "Run the test",
        description: "filter calls the callback for each score. 45 fails the >= 60 test; 80 and 95 pass.",
        line: 1,
        visible: ["scores", "source", "fortyFive", "eighty", "ninetyFive", "callback"],
        wires: [
          { id: "scores-source", from: "scores", to: "source", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-fortyFive", from: "source", to: "fortyFive", label: "false", tone: "slate", fromAnchor: { side: "right", offset: -16 }, toAnchor: { side: "left" } },
          { id: "source-eighty", from: "source", to: "eighty", label: "true", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-ninetyFive", from: "source", to: "ninetyFive", label: "true", tone: "orange", fromAnchor: { side: "right", offset: 16 }, toAnchor: { side: "left" } },
        ],
        active: ["callback", "eighty", "ninetyFive"],
      },
      {
        title: "Build a filtered array",
        description: "filter returns a new array containing only the values that passed the test.",
        line: 1,
        visible: ["scores", "source", "fortyFive", "eighty", "ninetyFive", "passed", "resultArray"],
        wires: [
          { id: "scores-source", from: "scores", to: "source", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-fortyFive", from: "source", to: "fortyFive", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -16 }, toAnchor: { side: "left" } },
          { id: "source-eighty", from: "source", to: "eighty", label: "1", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-ninetyFive", from: "source", to: "ninetyFive", label: "2", tone: "slate", fromAnchor: { side: "right", offset: 16 }, toAnchor: { side: "left" } },
          { id: "passed-resultArray", from: "passed", to: "resultArray", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "resultArray-eighty", from: "resultArray", to: "eighty", label: "0", tone: "cyan", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left", offset: 12 } },
          { id: "resultArray-ninetyFive", from: "resultArray", to: "ninetyFive", label: "1", tone: "cyan", fromAnchor: { side: "right", offset: 10 }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["passed", "resultArray"],
      },
    ],
    quiz: {
      prompt: "Which value is removed by filter?",
      options: ["45", "80", "95"],
      answer: "45",
      correct: "Correct. 45 does not pass score >= 60.",
      wrong: "Not quite. filter keeps only values where the callback returns true.",
    },
  },
  {
    id: "reduce-practical",
    section: "Arrays and lists",
    number: "Practical 22",
    title: "reduce",
    universeTitle: "reduce carries one result through every item",
    intro:
      "Use reduce when many items should become one result, such as totals, grouped data, counts, or lookup objects.",
    code: ["let cart = [5, 10, 15];", "let total = cart.reduce((sum, price) => sum + price, 0);"],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      cart: { label: "cart", kind: "variable-wide", x: 16, y: 28 },
      array: { label: "[ ]", kind: "object", x: 42, y: 28 },
      five: { label: "5", kind: "value", x: 68, y: 16 },
      ten: { label: "10", kind: "value", x: 68, y: 32 },
      fifteen: { label: "15", kind: "value", x: 68, y: 48 },
      sum: { label: "sum", kind: "variable-wide", x: 24, y: 70 },
      zero: { label: "0", kind: "value", x: 46, y: 70 },
      total: { label: "total", kind: "variable-wide", x: 16, y: 88 },
      thirty: { label: "30", kind: "value", x: 68, y: 88 },
    },
    steps: [
      {
        title: "Start with cart items",
        description: "cart points to an array of prices: 5, 10, and 15.",
        line: 0,
        visible: ["cart", "array", "five", "ten", "fifteen"],
        wires: [
          { id: "cart-array", from: "cart", to: "array", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-five", from: "array", to: "five", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -16 }, toAnchor: { side: "left" } },
          { id: "array-ten", from: "array", to: "ten", label: "1", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-fifteen", from: "array", to: "fifteen", label: "2", tone: "slate", fromAnchor: { side: "right", offset: 16 }, toAnchor: { side: "left" } },
        ],
        active: ["cart", "array"],
      },
      {
        title: "Start the accumulator",
        description: "The second argument, 0, is the first value of sum.",
        line: 1,
        visible: ["cart", "array", "five", "ten", "fifteen", "sum", "zero"],
        wires: [
          { id: "cart-array", from: "cart", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-five", from: "array", to: "five", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -16 }, toAnchor: { side: "left" } },
          { id: "array-ten", from: "array", to: "ten", label: "1", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-fifteen", from: "array", to: "fifteen", label: "2", tone: "slate", fromAnchor: { side: "right", offset: 16 }, toAnchor: { side: "left" } },
          { id: "sum-zero", from: "sum", to: "zero", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["sum", "zero"],
      },
      {
        title: "Add every item",
        description: "reduce runs the callback for 5, then 10, then 15. sum becomes 5, then 15, then 30.",
        line: 1,
        visible: ["cart", "array", "five", "ten", "fifteen", "sum", "thirty"],
        wires: [
          { id: "cart-array", from: "cart", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-five", from: "array", to: "five", label: "+5", tone: "slate", fromAnchor: { side: "right", offset: -16 }, toAnchor: { side: "left" } },
          { id: "array-ten", from: "array", to: "ten", label: "+10", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-fifteen", from: "array", to: "fifteen", label: "+15", tone: "slate", fromAnchor: { side: "right", offset: 16 }, toAnchor: { side: "left" } },
          { id: "sum-thirty", from: "sum", to: "thirty", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: -12 } },
        ],
        active: ["sum", "thirty"],
      },
      {
        title: "Store the reduced result",
        description: "reduce returns the final accumulator value, so total points to 30.",
        line: 1,
        visible: ["cart", "array", "five", "ten", "fifteen", "total", "thirty"],
        wires: [
          { id: "cart-array", from: "cart", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-five", from: "array", to: "five", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -16 }, toAnchor: { side: "left" } },
          { id: "array-ten", from: "array", to: "ten", label: "1", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-fifteen", from: "array", to: "fifteen", label: "2", tone: "slate", fromAnchor: { side: "right", offset: 16 }, toAnchor: { side: "left" } },
          { id: "total-thirty", from: "total", to: "thirty", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["total", "thirty"],
      },
    ],
    quiz: {
      prompt: "What kind of result does reduce usually create?",
      options: ["one final value", "one value per item", "no value"],
      answer: "one final value",
      correct: "Correct. reduce folds many items into one result.",
      wrong: "Not quite. reduce is used when a list becomes one accumulated result.",
    },
  },
  {
    id: "function-expressions-arrows-practical",
    section: "Functions and reusable logic",
    number: "Practical 23",
    title: "Function Expressions and Arrows",
    universeTitle: "Different function syntax can still create function values",
    intro:
      "Production code uses declarations, function expressions, and arrow functions. They look different, but all create function values.",
    code: ["const add = function(a, b) { return a + b; };", "const multiply = (a, b) => a * b;", "let result = multiply(3, 4);"],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      add: { label: "add", kind: "variable-wide", x: 16, y: 28 },
      addFn: { label: "fn", kind: "object", x: 42, y: 28 },
      multiply: { label: "multiply", kind: "variable-wide", x: 16, y: 52 },
      multiplyFn: { label: "fn", kind: "object", x: 42, y: 52 },
      three: { label: "3", kind: "value", x: 62, y: 72 },
      four: { label: "4", kind: "value", x: 78, y: 72 },
      twelve: { label: "12", kind: "value", x: 78, y: 52 },
      result: { label: "result", kind: "variable-wide", x: 16, y: 84 },
    },
    steps: [
      {
        title: "Store a function expression",
        description: "The function expression creates a function value, and add points to it.",
        line: 0,
        visible: ["add", "addFn"],
        wires: [{ id: "add-addFn", from: "add", to: "addFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["add", "addFn"],
      },
      {
        title: "Store an arrow function",
        description: "The arrow syntax also creates a function value, and multiply points to it.",
        line: 1,
        visible: ["add", "addFn", "multiply", "multiplyFn"],
        wires: [
          { id: "add-addFn", from: "add", to: "addFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "multiply-multiplyFn", from: "multiply", to: "multiplyFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["multiply", "multiplyFn"],
      },
      {
        title: "Evaluate the call",
        description: "multiply(3, 4) evaluates the arguments 3 and 4, calls the function, and creates 12.",
        line: 2,
        visible: ["add", "addFn", "multiply", "multiplyFn", "three", "four", "twelve"],
        wires: [
          { id: "add-addFn", from: "add", to: "addFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "multiply-multiplyFn", from: "multiply", to: "multiplyFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["three", "four", "twelve"],
      },
      {
        title: "Store result",
        description: "After the call returns, result points to 12.",
        line: 2,
        visible: ["add", "addFn", "multiply", "multiplyFn", "result", "twelve"],
        wires: [
          { id: "add-addFn", from: "add", to: "addFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "multiply-multiplyFn", from: "multiply", to: "multiplyFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "result-twelve", from: "result", to: "twelve", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["result", "twelve"],
      },
    ],
    quiz: {
      prompt: "What do function expressions and arrows create?",
      options: ["function values", "only strings", "arrays"],
      answer: "function values",
      correct: "Correct. Different syntax can still create function values.",
      wrong: "Not quite. Both examples create function values that variables can point to.",
    },
  },
  {
    id: "objects-practical",
    section: "Objects and app data",
    number: "Practical 24",
    title: "JavaScript Objects",
    universeTitle: "Objects group related values behind property names",
    intro:
      "Objects are how everyday app code represents one thing: a user, product, todo, form field, or API record.",
    code: ['let user = { name: "Ada", role: "admin" };', "let label = user.name;"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 16, y: 42 },
      object: { label: "{ }", kind: "object", x: 42, y: 42 },
      ada: { label: '"Ada"', kind: "string", x: 72, y: 30 },
      admin: { label: '"admin"', kind: "string", x: 72, y: 54 },
      label: { label: "label", kind: "variable-wide", x: 16, y: 78 },
    },
    steps: [
      {
        title: "Create the object",
        description: "The object value has property wires named name and role.",
        line: 0,
        visible: ["user", "object", "ada", "admin"],
        wires: [
          { id: "user-object", from: "user", to: "object", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "object-ada", from: "object", to: "ada", label: "name", tone: "cyan", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "object-admin", from: "object", to: "admin", label: "role", tone: "cyan", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["user", "object"],
      },
      {
        title: "Read a property",
        description: 'user.name follows user to the object, then follows the name wire to "Ada".',
        line: 1,
        visible: ["user", "object", "ada", "admin"],
        wires: [
          { id: "user-object", from: "user", to: "object", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "object-ada", from: "object", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "object-admin", from: "object", to: "admin", label: "role", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["object", "ada"],
      },
      {
        title: "Store the property value",
        description: 'label points to the same string value "Ada". It does not point to user.name itself.',
        line: 1,
        visible: ["user", "object", "ada", "admin", "label"],
        wires: [
          { id: "user-object", from: "user", to: "object", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "object-ada", from: "object", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "object-admin", from: "object", to: "admin", label: "role", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "label-ada", from: "label", to: "ada", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 16 } },
        ],
        active: ["label", "ada"],
      },
    ],
    quiz: {
      prompt: "What does user.name evaluate to?",
      options: ['"Ada"', "user", "name"],
      answer: '"Ada"',
      correct: "Correct. user.name follows the name property wire to the string value.",
      wrong: "Not quite. A property read evaluates to the value behind that property.",
    },
  },
  {
    id: "nested-objects-practical",
    section: "Objects and app data",
    number: "Practical 25",
    title: "Nested Objects",
    universeTitle: "Nested objects are separate object values",
    intro:
      "Nested objects appear in settings, API responses, user profiles, carts, forms, and almost every real app shape.",
    code: ['let user = { profile: { city: "London" } };', "let city = user.profile.city;"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 14, y: 44 },
      userObj: { label: "{ }", kind: "object", x: 38, y: 44 },
      profileObj: { label: "{ }", kind: "object", x: 62, y: 44 },
      london: { label: '"London"', kind: "string", x: 82, y: 44 },
      cityVar: { label: "city", kind: "variable-wide", x: 14, y: 78 },
    },
    steps: [
      {
        title: "Create the outer object",
        description: "user points to an object. Its profile property points to another object value.",
        line: 0,
        visible: ["user", "userObj", "profileObj"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-profileObj", from: "userObj", to: "profileObj", label: "profile", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["user", "userObj", "profileObj"],
      },
      {
        title: "Add city inside profile",
        description: 'The nested profile object has its own city property pointing to "London".',
        line: 0,
        visible: ["user", "userObj", "profileObj", "london"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-profileObj", from: "userObj", to: "profileObj", label: "profile", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "profileObj-london", from: "profileObj", to: "london", label: "city", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["profileObj", "london"],
      },
      {
        title: "Follow the property chain",
        description: "user.profile.city follows two property wires: profile first, then city.",
        line: 1,
        visible: ["user", "userObj", "profileObj", "london"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-profileObj", from: "userObj", to: "profileObj", label: "profile", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "profileObj-london", from: "profileObj", to: "london", label: "city", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["profileObj", "london"],
      },
      {
        title: "Store city",
        description: 'city points to "London". The nested objects stay separate and still connected.',
        line: 1,
        visible: ["user", "userObj", "profileObj", "london", "cityVar"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-profileObj", from: "userObj", to: "profileObj", label: "profile", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "profileObj-london", from: "profileObj", to: "london", label: "city", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "cityVar-london", from: "cityVar", to: "london", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 18 } },
        ],
        active: ["cityVar", "london"],
      },
    ],
    quiz: {
      prompt: "Is profile part of the outer object, or a separate object value?",
      options: ["separate object value", "same object only", "a string"],
      answer: "separate object value",
      correct: "Correct. The profile property points to another object value.",
      wrong: "Not quite. Nested object syntax creates another object value.",
    },
  },
  {
    id: "arrays-of-objects-practical",
    section: "Objects and app data",
    number: "Practical 26",
    title: "Arrays of Objects",
    universeTitle: "Lists often contain object values",
    intro:
      "APIs often return arrays of objects. UI code then maps, filters, and reads properties from each object.",
    code: ['let users = [{ name: "Ada" }, { name: "Grace" }];', "let names = users.map(user => user.name);"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      users: { label: "users", kind: "variable-wide", x: 12, y: 36 },
      array: { label: "[ ]", kind: "object", x: 34, y: 36 },
      adaObj: { label: "{ }", kind: "object", x: 56, y: 24 },
      graceObj: { label: "{ }", kind: "object", x: 56, y: 48 },
      ada: { label: '"Ada"', kind: "string", x: 78, y: 24 },
      grace: { label: '"Grace"', kind: "string", x: 78, y: 48 },
      names: { label: "names", kind: "variable-wide", x: 34, y: 82 },
      resultArray: { label: "[ ]", kind: "object", x: 58, y: 82 },
      adaName: { label: '"Ada"', kind: "string", x: 82, y: 74 },
      graceName: { label: '"Grace"', kind: "string", x: 82, y: 90 },
    },
    steps: [
      {
        title: "Create the user list",
        description: "users points to an array. Each array index points to a user object.",
        line: 0,
        visible: ["users", "array", "adaObj", "graceObj"],
        wires: [
          { id: "users-array", from: "users", to: "array", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-adaObj", from: "array", to: "adaObj", label: "0", tone: "cyan", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-graceObj", from: "array", to: "graceObj", label: "1", tone: "cyan", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["users", "array"],
      },
      {
        title: "Each object has a name",
        description: 'Each object has a name property pointing to its own string value.',
        line: 0,
        visible: ["users", "array", "adaObj", "graceObj", "ada", "grace"],
        wires: [
          { id: "users-array", from: "users", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-adaObj", from: "array", to: "adaObj", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-graceObj", from: "array", to: "graceObj", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "adaObj-ada", from: "adaObj", to: "ada", label: "name", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "graceObj-grace", from: "graceObj", to: "grace", label: "name", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["adaObj", "graceObj", "ada", "grace"],
      },
      {
        title: "map reads each name",
        description: "The callback receives each user object and returns user.name.",
        line: 1,
        visible: ["users", "array", "adaObj", "graceObj", "ada", "grace"],
        wires: [
          { id: "users-array", from: "users", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-adaObj", from: "array", to: "adaObj", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-graceObj", from: "array", to: "graceObj", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "adaObj-ada", from: "adaObj", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "graceObj-grace", from: "graceObj", to: "grace", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["ada", "grace"],
      },
      {
        title: "Store the names array",
        description: 'map returns a new array containing "Ada" and "Grace".',
        line: 1,
        visible: ["users", "array", "adaObj", "graceObj", "names", "resultArray", "adaName", "graceName"],
        wires: [
          { id: "users-array", from: "users", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-adaObj", from: "array", to: "adaObj", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-graceObj", from: "array", to: "graceObj", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "names-resultArray", from: "names", to: "resultArray", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "resultArray-adaName", from: "resultArray", to: "adaName", label: "0", tone: "cyan", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left" } },
          { id: "resultArray-graceName", from: "resultArray", to: "graceName", label: "1", tone: "cyan", fromAnchor: { side: "right", offset: 10 }, toAnchor: { side: "left" } },
        ],
        active: ["names", "resultArray"],
      },
    ],
    quiz: {
      prompt: "What does users.map(user => user.name) return?",
      options: ["a new array of names", "the original users", "one object"],
      answer: "a new array of names",
      correct: "Correct. map turns each user object into its name value.",
      wrong: "Not quite. map returns a new array with one result per original item.",
    },
  },
  {
    id: "this-practical",
    section: "Objects and app data",
    number: "Practical 27",
    title: "What is this?",
    universeTitle: "this points to the object receiving the method call",
    intro:
      "In object methods, this is useful when behavior needs to read or change data on the same object.",
    code: ['let user = { name: "Ada", greet() { return this.name; } };', "let result = user.greet();"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 14, y: 40 },
      userObj: { label: "{ }", kind: "object", x: 38, y: 40 },
      ada: { label: '"Ada"', kind: "string", x: 70, y: 28 },
      greetFn: { label: "fn", kind: "object", x: 70, y: 52 },
      thisVar: { label: "this", kind: "variable-wide", x: 38, y: 76 },
      result: { label: "result", kind: "variable-wide", x: 14, y: 88 },
    },
    steps: [
      {
        title: "Create object with a method",
        description: "user points to an object with a name property and a greet method.",
        line: 0,
        visible: ["user", "userObj", "ada", "greetFn"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "cyan", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "userObj-greetFn", from: "userObj", to: "greetFn", label: "greet", tone: "cyan", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["user", "userObj"],
      },
      {
        title: "Call as user.greet()",
        description: "Because the call is user.greet(), this points to the user object during the method call.",
        line: 1,
        visible: ["user", "userObj", "ada", "greetFn", "thisVar"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "userObj-greetFn", from: "userObj", to: "greetFn", label: "greet", tone: "orange", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "thisVar-userObj", from: "thisVar", to: "userObj", tone: "orange", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["thisVar", "userObj"],
      },
      {
        title: "Read this.name",
        description: 'this.name follows this to the user object, then follows name to "Ada".',
        line: 0,
        visible: ["user", "userObj", "ada", "greetFn", "thisVar"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "userObj-greetFn", from: "userObj", to: "greetFn", label: "greet", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "thisVar-userObj", from: "thisVar", to: "userObj", tone: "slate", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["thisVar", "ada"],
      },
      {
        title: "Store result",
        description: 'The method returns "Ada", so result points to that string.',
        line: 1,
        visible: ["user", "userObj", "ada", "greetFn", "result"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "userObj-greetFn", from: "userObj", to: "greetFn", label: "greet", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "result-ada", from: "result", to: "ada", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 16 } },
        ],
        active: ["result", "ada"],
      },
    ],
    quiz: {
      prompt: "During user.greet(), what does this point to?",
      options: ["the user object", "the string Ada", "the result variable"],
      answer: "the user object",
      correct: "Correct. In user.greet(), this points to the object before the dot.",
      wrong: "Not quite. For a method call, this points to the object receiving the call.",
    },
  },
  {
    id: "classes-practical",
    section: "Objects and app data",
    number: "Practical 28",
    title: "Classes",
    universeTitle: "A class is a recipe for object instances",
    intro:
      "Classes are common in app models, UI helpers, data wrappers, and framework code. They create objects with shared behavior.",
    code: ["class User {", "  constructor(name) { this.name = name; }", "}", 'let ada = new User("Ada");'],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      User: { label: "User", kind: "variable-wide", x: 14, y: 34 },
      classFn: { label: "class", kind: "object-large", x: 42, y: 34 },
      adaText: { label: '"Ada"', kind: "string", x: 78, y: 56 },
      nameParam: { label: "name", kind: "variable-wide", x: 56, y: 74 },
      instance: { label: "{ }", kind: "object", x: 56, y: 48 },
      adaVar: { label: "ada", kind: "variable-wide", x: 20, y: 82 },
    },
    steps: [
      {
        title: "Create the class value",
        description: "The class declaration creates a class function value, and User points to it.",
        line: 0,
        visible: ["User", "classFn"],
        wires: [{ id: "User-classFn", from: "User", to: "classFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["User", "classFn"],
      },
      {
        title: "Evaluate the new argument",
        description: 'new User("Ada") evaluates the argument "Ada" before the constructor runs.',
        line: 3,
        visible: ["User", "classFn", "adaText"],
        wires: [{ id: "User-classFn", from: "User", to: "classFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["adaText"],
      },
      {
        title: "Constructor receives name",
        description: 'The constructor parameter name points to "Ada" during construction.',
        line: 1,
        visible: ["User", "classFn", "adaText", "nameParam"],
        wires: [
          { id: "User-classFn", from: "User", to: "classFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "nameParam-adaText", from: "nameParam", to: "adaText", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["nameParam", "adaText"],
      },
      {
        title: "new creates an instance",
        description: 'new creates an object instance. this.name = name adds a name property pointing to "Ada".',
        line: 1,
        visible: ["User", "classFn", "adaText", "nameParam", "instance"],
        wires: [
          { id: "User-classFn", from: "User", to: "classFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "nameParam-adaText", from: "nameParam", to: "adaText", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "instance-adaText", from: "instance", to: "adaText", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 14 } },
        ],
        active: ["instance", "adaText"],
      },
      {
        title: "Store the instance",
        description: "After construction finishes, ada points to the new object instance.",
        line: 3,
        visible: ["User", "classFn", "adaText", "instance", "adaVar"],
        wires: [
          { id: "User-classFn", from: "User", to: "classFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "instance-adaText", from: "instance", to: "adaText", label: "name", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 14 } },
          { id: "adaVar-instance", from: "adaVar", to: "instance", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "bottom" } },
        ],
        active: ["adaVar", "instance"],
      },
    ],
    quiz: {
      prompt: "What does new User(\"Ada\") create?",
      options: ["a new object instance", "only a string", "the class itself"],
      answer: "a new object instance",
      correct: "Correct. new creates an instance object and runs the constructor.",
      wrong: "Not quite. A class is a recipe; new creates an object from that recipe.",
    },
  },
  {
    id: "constructors-practical",
    section: "Objects and app data",
    number: "Practical 29",
    title: "Constructors",
    universeTitle: "new makes this point to a fresh object",
    intro:
      "Constructor functions are the older pattern behind classes. You still see them in older code and browser APIs.",
    code: ["function User(name) {", "  this.name = name;", "}", 'let ada = new User("Ada");'],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      User: { label: "User", kind: "variable-wide", x: 16, y: 34 },
      fn: { label: "fn", kind: "object", x: 42, y: 34 },
      adaText: { label: '"Ada"', kind: "string", x: 76, y: 56 },
      thisVar: { label: "this", kind: "variable-wide", x: 34, y: 76 },
      instance: { label: "{ }", kind: "object", x: 56, y: 52 },
      ada: { label: "ada", kind: "variable-wide", x: 16, y: 88 },
    },
    steps: [
      {
        title: "Create constructor function",
        description: "User points to a function value that is meant to be called with new.",
        line: 0,
        visible: ["User", "fn"],
        wires: [{ id: "User-fn", from: "User", to: "fn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["User", "fn"],
      },
      {
        title: "new creates a fresh object",
        description: "During new User, JavaScript creates a fresh object and makes this point to it.",
        line: 3,
        visible: ["User", "fn", "thisVar", "instance", "adaText"],
        wires: [
          { id: "User-fn", from: "User", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "thisVar-instance", from: "thisVar", to: "instance", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["thisVar", "instance"],
      },
      {
        title: "Assign property on this",
        description: 'this.name = name adds a name property to the fresh object, pointing to "Ada".',
        line: 1,
        visible: ["User", "fn", "instance", "adaText"],
        wires: [
          { id: "User-fn", from: "User", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "instance-adaText", from: "instance", to: "adaText", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["instance", "adaText"],
      },
      {
        title: "Store returned instance",
        description: "Constructor calls return the fresh object by default, so ada points to that object.",
        line: 3,
        visible: ["User", "fn", "instance", "adaText", "ada"],
        wires: [
          { id: "User-fn", from: "User", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "instance-adaText", from: "instance", to: "adaText", label: "name", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "ada-instance", from: "ada", to: "instance", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "bottom" } },
        ],
        active: ["ada", "instance"],
      },
    ],
    quiz: {
      prompt: "What does new make this point to?",
      options: ["a fresh object", "the string", "nothing"],
      answer: "a fresh object",
      correct: "Correct. new creates an object and binds this to it.",
      wrong: "Not quite. With new, this starts as the fresh object being built.",
    },
  },
  {
    id: "static-methods-practical",
    section: "Objects and app data",
    number: "Practical 30",
    title: "Static Methods",
    universeTitle: "Static helpers live on the class",
    intro:
      "Static methods are useful for helpers related to a class, such as parsing, formatting, or validation.",
    code: ["class User {", "  static fromName(name) { return new User(name); }", "}", 'let ada = User.fromName("Ada");'],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      User: { label: "User", kind: "variable-wide", x: 14, y: 38 },
      classObj: { label: "class", kind: "object-large", x: 42, y: 38 },
      fromName: { label: "fn", kind: "object", x: 72, y: 38 },
      adaText: { label: '"Ada"', kind: "string", x: 72, y: 70 },
      instance: { label: "{ }", kind: "object", x: 50, y: 70 },
      ada: { label: "ada", kind: "variable-wide", x: 14, y: 84 },
    },
    steps: [
      {
        title: "Class has a static property",
        description: "The static method is a property on the class value, not on each user instance.",
        line: 1,
        visible: ["User", "classObj", "fromName"],
        wires: [
          { id: "User-classObj", from: "User", to: "classObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "classObj-fromName", from: "classObj", to: "fromName", label: "fromName", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["classObj", "fromName"],
      },
      {
        title: "Call User.fromName",
        description: 'User.fromName("Ada") follows the static property and calls that function.',
        line: 3,
        visible: ["User", "classObj", "fromName", "adaText"],
        wires: [
          { id: "User-classObj", from: "User", to: "classObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "classObj-fromName", from: "classObj", to: "fromName", label: "fromName", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["fromName", "adaText"],
      },
      {
        title: "Helper returns an instance",
        description: 'The helper creates a User instance whose name property points to "Ada".',
        line: 1,
        visible: ["User", "classObj", "fromName", "adaText", "instance"],
        wires: [
          { id: "User-classObj", from: "User", to: "classObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "classObj-fromName", from: "classObj", to: "fromName", label: "fromName", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "instance-adaText", from: "instance", to: "adaText", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["instance", "adaText"],
      },
      {
        title: "Store ada",
        description: "ada points to the object returned by the static helper.",
        line: 3,
        visible: ["User", "classObj", "fromName", "adaText", "instance", "ada"],
        wires: [
          { id: "User-classObj", from: "User", to: "classObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "classObj-fromName", from: "classObj", to: "fromName", label: "fromName", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "instance-adaText", from: "instance", to: "adaText", label: "name", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "ada-instance", from: "ada", to: "instance", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "bottom" } },
        ],
        active: ["ada", "instance"],
      },
    ],
    quiz: {
      prompt: "Where does a static method live?",
      options: ["on the class", "on every string", "inside each number"],
      answer: "on the class",
      correct: "Correct. Static methods are called on the class itself.",
      wrong: "Not quite. Static means the method belongs to the class value.",
    },
  },
  {
    id: "getters-setters-practical",
    section: "Objects and app data",
    number: "Practical 31",
    title: "Getters",
    universeTitle: "Property access can run methods",
    intro:
      "Getters let app code expose a property-like API while still running logic behind the scenes.",
    code: ["class User {", "  get label() { return this.name.toUpperCase(); }", "}", "let text = user.label;"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 14, y: 44 },
      userObj: { label: "{ }", kind: "object", x: 40, y: 44 },
      ada: { label: '"Ada"', kind: "string", x: 70, y: 32 },
      getter: { label: "get", kind: "object", x: 70, y: 56 },
      upper: { label: '"ADA"', kind: "string", x: 78, y: 76 },
      text: { label: "text", kind: "variable-wide", x: 14, y: 84 },
    },
    steps: [
      {
        title: "Object has data and getter",
        description: "The object has a normal name value and a getter function for label.",
        line: 1,
        visible: ["user", "userObj", "ada", "getter"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "cyan", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "userObj-getter", from: "userObj", to: "getter", label: "label", tone: "cyan", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["userObj", "getter"],
      },
      {
        title: "Read user.label",
        description: "Reading label runs the getter function. It is not just a plain stored string.",
        line: 3,
        visible: ["user", "userObj", "ada", "getter"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "userObj-getter", from: "userObj", to: "getter", label: "label", tone: "orange", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["getter"],
      },
      {
        title: "Getter returns a value",
        description: 'The getter reads this.name and returns the new string "ADA".',
        line: 1,
        visible: ["user", "userObj", "ada", "getter", "upper"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "getter-upper", from: "getter", to: "upper", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["getter", "upper"],
      },
      {
        title: "Store text",
        description: 'text points to the returned string "ADA".',
        line: 3,
        visible: ["user", "userObj", "ada", "getter", "upper", "text"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "userObj-getter", from: "userObj", to: "getter", label: "label", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "text-upper", from: "text", to: "upper", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 14 } },
        ],
        active: ["text", "upper"],
      },
    ],
    quiz: {
      prompt: "What happens when code reads user.label?",
      options: ["the getter runs", "nothing can run", "the object disappears"],
      answer: "the getter runs",
      correct: "Correct. Getter syntax looks like property access but runs a function.",
      wrong: "Not quite. A getter is invoked when the property is read.",
    },
  },
  {
    id: "inheritance-super-practical",
    section: "Objects and app data",
    number: "Practical 32",
    title: "Inheritance and super",
    universeTitle: "super calls the parent class constructor",
    intro:
      "Inheritance appears in frameworks and libraries. Use it sparingly, but understand what super does when you see it.",
    code: ["class Admin extends User {", "  constructor(name, level) {", "    super(name); this.level = level;", "  }", "}"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      User: { label: "User", kind: "variable-wide", x: 14, y: 28 },
      userClass: { label: "class", kind: "object-large", x: 42, y: 28 },
      Admin: { label: "Admin", kind: "variable-wide", x: 14, y: 54 },
      adminClass: { label: "class", kind: "object-large", x: 42, y: 54 },
      instance: { label: "{ }", kind: "object", x: 62, y: 72 },
      ada: { label: '"Ada"', kind: "string", x: 84, y: 62 },
      two: { label: "2", kind: "value", x: 84, y: 82 },
    },
    steps: [
      {
        title: "Admin extends User",
        description: "Admin links to User so it can reuse User's constructor and shared methods.",
        line: 0,
        visible: ["User", "userClass", "Admin", "adminClass"],
        wires: [
          { id: "User-userClass", from: "User", to: "userClass", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "Admin-adminClass", from: "Admin", to: "adminClass", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "adminClass-userClass", from: "adminClass", to: "userClass", label: "extends", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["Admin", "adminClass"],
      },
      {
        title: "super(name) runs parent setup",
        description: 'super(name) calls User constructor logic, adding name: "Ada" to the new object.',
        line: 2,
        visible: ["User", "userClass", "Admin", "adminClass", "instance", "ada"],
        wires: [
          { id: "Admin-adminClass", from: "Admin", to: "adminClass", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "adminClass-userClass", from: "adminClass", to: "userClass", label: "super", tone: "orange", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
          { id: "instance-ada", from: "instance", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left" } },
        ],
        active: ["userClass", "instance", "ada"],
      },
      {
        title: "Child adds its own property",
        description: "After super, Admin constructor can add its own level property.",
        line: 2,
        visible: ["Admin", "adminClass", "instance", "ada", "two"],
        wires: [
          { id: "Admin-adminClass", from: "Admin", to: "adminClass", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "instance-ada", from: "instance", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left" } },
          { id: "instance-two", from: "instance", to: "two", label: "level", tone: "orange", fromAnchor: { side: "right", offset: 10 }, toAnchor: { side: "left" } },
        ],
        active: ["instance", "two"],
      },
    ],
    quiz: {
      prompt: "What does super(name) do here?",
      options: ["calls User setup", "deletes Admin", "creates a string only"],
      answer: "calls User setup",
      correct: "Correct. super calls the parent class constructor.",
      wrong: "Not quite. In a subclass constructor, super calls the parent constructor.",
    },
  },
  {
    id: "sorting-objects-practical",
    section: "Objects and app data",
    number: "Practical 33",
    title: "Sorting Arrays of Objects",
    universeTitle: "sort reorders the same array object",
    intro:
      "Sorting shows up in product lists, tables, leaderboards, search results, and dashboards.",
    code: ['let users = [{ name: "Ada", age: 36 }, { name: "Grace", age: 30 }];', "users.sort((a, b) => a.age - b.age);"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      users: { label: "users", kind: "variable-wide", x: 14, y: 40 },
      array: { label: "[ ]", kind: "object", x: 38, y: 40 },
      adaObj: { label: "Ada", kind: "object-large", x: 68, y: 28 },
      graceObj: { label: "Grace", kind: "object-large", x: 68, y: 54 },
      age36: { label: "36", kind: "value", x: 88, y: 28 },
      age30: { label: "30", kind: "value", x: 88, y: 54 },
    },
    steps: [
      {
        title: "Start with original order",
        description: "users points to an array where index 0 is Ada and index 1 is Grace.",
        line: 0,
        visible: ["users", "array", "adaObj", "graceObj", "age36", "age30"],
        wires: [
          { id: "users-array", from: "users", to: "array", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-adaObj", from: "array", to: "adaObj", label: "0", tone: "cyan", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-graceObj", from: "array", to: "graceObj", label: "1", tone: "cyan", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "adaObj-age36", from: "adaObj", to: "age36", label: "age", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "graceObj-age30", from: "graceObj", to: "age30", label: "age", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["users", "array"],
      },
      {
        title: "Compare ages",
        description: "a.age - b.age compares numbers. 30 should come before 36.",
        line: 1,
        visible: ["users", "array", "adaObj", "graceObj", "age36", "age30"],
        wires: [
          { id: "users-array", from: "users", to: "array", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "adaObj-age36", from: "adaObj", to: "age36", label: "age", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "graceObj-age30", from: "graceObj", to: "age30", label: "age", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["age30", "age36"],
      },
      {
        title: "sort mutates the array",
        description: "sort reorders the existing array. users still points to the same array object.",
        line: 1,
        visible: ["users", "array", "adaObj", "graceObj", "age36", "age30"],
        wires: [
          { id: "users-array", from: "users", to: "array", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-graceObj", from: "array", to: "graceObj", label: "0", tone: "orange", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "array-adaObj", from: "array", to: "adaObj", label: "1", tone: "orange", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "adaObj-age36", from: "adaObj", to: "age36", label: "age", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "graceObj-age30", from: "graceObj", to: "age30", label: "age", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["array", "graceObj", "adaObj"],
      },
    ],
    quiz: {
      prompt: "Does sort create a new array by default?",
      options: ["no, it mutates", "yes, always", "only strings"],
      answer: "no, it mutates",
      correct: "Correct. sort reorders the existing array object.",
      wrong: "Not quite. Array sort mutates the array it is called on.",
    },
  },
  {
    id: "typescript-annotations",
    section: "TypeScript bridge",
    number: "Chapter 61",
    title: "Type Annotations",
    universeTitle: "Types are checked before JavaScript runs",
    intro:
      "TypeScript adds type notes to JavaScript. The notes help the editor and compiler catch mistakes, but they are not runtime values.",
    code: ["let count: number = 0;", "count = count + 1;", 'count = "one"; // TypeScript error'],
    legend: ["variable", "wire", "value"],
    nodes: {
      count: { label: "count", kind: "variable-wide", x: 18, y: 38 },
      zero: { label: "0", kind: "value", x: 54, y: 28 },
      one: { label: "1", kind: "value", x: 54, y: 54 },
      textOne: { label: '"one"', kind: "string", x: 74, y: 78 },
    },
    steps: [
      {
        title: "Create a typed variable",
        description:
          "At runtime, count is still a normal variable pointing to 0. The : number annotation is a compile-time check.",
        line: 0,
        visible: ["count", "zero"],
        wires: [
          { id: "count-zero", from: "count", to: "zero", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["count", "zero"],
        notes: [{ text: ": number is checked before runtime", x: 58, y: 16 }],
      },
      {
        title: "Number work is allowed",
        description:
          "count + 1 reads the old number, creates 1, and moves count to the new number value.",
        line: 1,
        visible: ["count", "zero", "one"],
        wires: [
          { id: "count-one", from: "count", to: "one", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["count", "one"],
      },
      {
        title: "Wrong type is rejected",
        description:
          'TypeScript reports an error before this JavaScript runs because "one" is a string, not a number.',
        line: 2,
        visible: ["count", "one", "textOne"],
        wires: [
          { id: "count-one", from: "count", to: "one", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["textOne"],
        notes: [{ text: "No runtime wire moves when compilation stops", x: 52, y: 88 }],
      },
    ],
    quiz: {
      prompt: "Where does TypeScript use type annotations?",
      options: ["before runtime", "as object properties", "after the browser paints"],
      answer: "before runtime",
      correct: "Correct. TypeScript checks annotations before the JavaScript runs.",
      wrong: "Not quite. Type annotations are compile-time checks, not runtime values.",
    },
  },
  {
    id: "typescript-object-types",
    section: "TypeScript bridge",
    number: "Chapter 62",
    title: "Object Types",
    universeTitle: "Object types describe expected property wires",
    intro:
      "Object types and interfaces describe the shape code expects: which properties should exist and what kinds of values they should point to.",
    code: ["type User = { name: string; admin?: boolean };", 'let user: User = { name: "Ada" };', "user.admin ?? false;"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 16, y: 38 },
      userObj: { label: "{ }", kind: "object", x: 44, y: 38 },
      ada: { label: '"Ada"', kind: "string", x: 72, y: 38 },
      missing: { label: "undefined", kind: "string", x: 44, y: 70 },
      falseValue: { label: "false", kind: "string", x: 72, y: 70 },
    },
    steps: [
      {
        title: "Describe the object shape",
        description:
          "The User type is a compile-time description. It does not create a runtime object by itself.",
        line: 0,
        visible: [],
        wires: [],
        active: [],
        notes: [{ text: "User expects name; admin is optional", x: 50, y: 42 }],
      },
      {
        title: "Create a matching object",
        description:
          'The runtime object has a name property pointing to "Ada". The user variable points to that object.',
        line: 1,
        visible: ["user", "userObj", "ada"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["user", "userObj", "ada"],
      },
      {
        title: "Optional property may be missing",
        description:
          "admin? means the property can be absent. Reading it gives undefined at runtime.",
        line: 2,
        visible: ["user", "userObj", "ada", "missing"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["missing"],
      },
      {
        title: "Fallback handles missing data",
        description:
          "Because user.admin is undefined, ?? chooses false. The object itself did not gain an admin property.",
        line: 2,
        visible: ["userObj", "missing", "falseValue"],
        wires: [],
        active: ["falseValue"],
      },
    ],
    quiz: {
      prompt: "What does admin? mean in this object type?",
      options: ["the property is optional", "the value must be a string", "the object is a Promise"],
      answer: "the property is optional",
      correct: "Correct. The property may be missing, so code should handle undefined.",
      wrong: "Not quite. The question mark marks an optional property.",
    },
  },
  {
    id: "typescript-unions",
    section: "TypeScript bridge",
    number: "Chapter 63",
    title: "Union Types",
    universeTitle: "Unions narrow after checks",
    intro:
      "A union type says a value can be one of several shapes. Code narrows the union by checking a property before using shape-specific data.",
    code: ["type State = { status: 'loading' } | { status: 'success'; name: string };", "if (state.status === 'success') {", "  show(state.name);", "}"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      state: { label: "state", kind: "variable-wide", x: 14, y: 42 },
      stateObj: { label: "{ }", kind: "object", x: 40, y: 42 },
      success: { label: '"success"', kind: "string", x: 70, y: 30 },
      ada: { label: '"Ada"', kind: "string", x: 70, y: 54 },
      result: { label: "show()", kind: "variable-wide", x: 40, y: 82 },
    },
    steps: [
      {
        title: "State points to one shape",
        description:
          'At runtime, state points to one object. This object has status "success" and a name property.',
        line: 0,
        visible: ["state", "stateObj", "success", "ada"],
        wires: [
          { id: "state-stateObj", from: "state", to: "stateObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "stateObj-success", from: "stateObj", to: "success", label: "status", tone: "orange", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "stateObj-ada", from: "stateObj", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["state", "stateObj"],
        notes: [{ text: "TypeScript knows State can be loading or success", x: 50, y: 16 }],
      },
      {
        title: "Check the status property",
        description:
          'state.status === "success" reads the status property and narrows the type for the if block.',
        line: 1,
        visible: ["state", "stateObj", "success", "ada"],
        wires: [
          { id: "state-stateObj", from: "state", to: "stateObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "stateObj-success", from: "stateObj", to: "success", label: "status", tone: "orange", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "stateObj-ada", from: "stateObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["success"],
      },
      {
        title: "Narrowed code can read name",
        description:
          "Inside the success branch, TypeScript allows state.name because that shape includes the name property.",
        line: 2,
        visible: ["stateObj", "success", "ada", "result"],
        wires: [
          { id: "stateObj-success", from: "stateObj", to: "success", label: "status", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "stateObj-ada", from: "stateObj", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "result-ada", from: "result", to: "ada", label: "uses", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["result", "ada"],
      },
    ],
    quiz: {
      prompt: "Why check state.status before reading state.name?",
      options: ["to narrow the union", "to create a new class", "to stringify the object"],
      answer: "to narrow the union",
      correct: "Correct. The check proves which shape you have inside the branch.",
      wrong: "Not quite. The check narrows the union so shape-specific properties are safe.",
    },
  },
  {
    id: "typescript-generics",
    section: "TypeScript bridge",
    number: "Chapter 64",
    title: "Generics",
    universeTitle: "Generics preserve a type relationship",
    intro:
      "Generics let a function describe a relationship between inputs and outputs without choosing one exact type up front.",
    code: ["function first<T>(items: T[]): T | undefined {", "  return items[0];", "}", 'let name = first(["Ada", "Grace"]);'],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      firstVar: { label: "first", kind: "variable-wide", x: 14, y: 32 },
      firstFn: { label: "fn", kind: "object", x: 42, y: 32 },
      array: { label: "[ ]", kind: "object", x: 42, y: 62 },
      ada: { label: '"Ada"', kind: "string", x: 70, y: 54 },
      grace: { label: '"Grace"', kind: "string", x: 70, y: 70 },
      name: { label: "name", kind: "variable-wide", x: 14, y: 88 },
    },
    steps: [
      {
        title: "Generic function is a normal function",
        description:
          "first points to a function value. <T> is a TypeScript type parameter, not a runtime value.",
        line: 0,
        visible: ["firstVar", "firstFn"],
        wires: [
          { id: "firstVar-firstFn", from: "firstVar", to: "firstFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["firstVar", "firstFn"],
        notes: [{ text: "T exists for the checker, not at runtime", x: 58, y: 18 }],
      },
      {
        title: "Call with a string array",
        description:
          'The argument is an array of strings. TypeScript infers T as string for this call.',
        line: 3,
        visible: ["firstVar", "firstFn", "array", "ada", "grace"],
        wires: [
          { id: "firstVar-firstFn", from: "firstVar", to: "firstFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-ada", from: "array", to: "ada", label: "0", tone: "orange", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left" } },
          { id: "array-grace", from: "array", to: "grace", label: "1", tone: "orange", fromAnchor: { side: "right", offset: 10 }, toAnchor: { side: "left" } },
        ],
        active: ["array", "ada", "grace"],
      },
      {
        title: "Return the first item",
        description:
          'items[0] returns "Ada" for this array. The return type also includes undefined because another call could pass an empty array.',
        line: 1,
        visible: ["array", "ada", "grace"],
        wires: [
          { id: "array-ada", from: "array", to: "ada", label: "0", tone: "orange", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left" } },
          { id: "array-grace", from: "array", to: "grace", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 10 }, toAnchor: { side: "left" } },
        ],
        active: ["ada"],
      },
      {
        title: "Store the returned string",
        description:
          'name points to "Ada" in this run. The generic preserved the relationship between the array item type and the possible return value.',
        line: 3,
        visible: ["name", "ada"],
        wires: [
          { id: "name-ada", from: "name", to: "ada", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["name", "ada"],
      },
    ],
    quiz: {
      prompt: "Why does first return T | undefined?",
      options: ["arrays can be empty", "CSS order matters", "timers can pause"],
      answer: "arrays can be empty",
      correct: "Correct. items[0] can be undefined when the array has no first item.",
      wrong: "Not quite. The type must allow the empty-array case.",
    },
  },
];

const conceptLessons = [
  {
    id: "values-and-wires",
    number: "Chapter 1",
    title: "Values and Wires",
    universeTitle: "Variables point to values",
    intro:
      "Watch JavaScript assignments as wires. A variable can point to a value, but it does not point to another variable.",
    code: ["let x = 10;", "let y = x;", "x = 0;"],
    legend: ["variable", "value", "wire"],
    nodes: {
      x: { label: "x", kind: "variable", x: 25, y: 34 },
      y: { label: "y", kind: "variable", x: 25, y: 66 },
      ten: { label: "10", kind: "value", x: 67, y: 50 },
      zero: { label: "0", kind: "value", x: 67, y: 25 },
    },
    steps: [
      {
        title: "Declare x",
        description:
          "JavaScript creates a variable named x. Think of it as a labeled box that can hold a wire.",
        line: 0,
        visible: ["x"],
        wires: [],
        active: ["x"],
      },
      {
        title: "Point x to 10",
        description:
          "The number 10 is a primitive value. Assignment points x's wire to that value.",
        line: 0,
        visible: ["x", "ten"],
        wires: [
          {
            id: "x-ten",
            from: "x",
            to: "ten",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["x", "ten"],
      },
      {
        title: "Declare y and evaluate x",
        description:
          "JavaScript asks: what value does x currently point to? The answer is 10.",
        line: 1,
        visible: ["x", "y", "ten"],
        wires: [
          {
            id: "x-ten",
            from: "x",
            to: "ten",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["x", "y", "ten"],
      },
      {
        title: "Point y to the same value",
        description:
          "y does not point to x. y points to the value that came out of evaluating x: 10.",
        line: 1,
        visible: ["x", "y", "ten"],
        wires: [
          {
            id: "x-ten",
            from: "x",
            to: "ten",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "y-ten",
            from: "y",
            to: "ten",
            tone: "cyan",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["y", "ten"],
      },
      {
        title: "Move x to 0",
        description:
          "Reassigning x only moves x's wire. y stays connected to 10, so the old value did not change.",
        line: 2,
        visible: ["x", "y", "ten", "zero"],
        wires: [
          {
            id: "x-zero",
            from: "x",
            to: "zero",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "y-ten",
            from: "y",
            to: "ten",
            tone: "cyan",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["x", "zero"],
        notes: [
          {
            text: "10 is still here. y still points to it.",
            x: 67,
            y: 67,
          },
        ],
      },
    ],
    quiz: {
      prompt: "After all three lines run, what value does y point to?",
      options: ["0", "10", "x"],
      answer: "10",
      correct:
        "Correct. y still points to 10 because assigning x = 0 moved only x's wire.",
      wrong: "Not quite. y was assigned the value of x at that moment, which was 10.",
    },
  },
  {
    id: "objects-and-properties",
    number: "Chapter 2",
    title: "Objects and Properties",
    universeTitle: "Objects hold property wires",
    intro:
      "An object is a value too, but it can contain named property wires that point to other values.",
    code: [
      "let sherlock = {",
      '  surname: "Holmes",',
      '  address: { city: "London" }',
      "};",
    ],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      sherlock: { label: "sherlock", kind: "variable-wide", x: 18, y: 48 },
      outer: { label: "{ }", kind: "object", x: 40, y: 48 },
      holmes: { label: '"Holmes"', kind: "string", x: 65, y: 28 },
      address: { label: "{ }", kind: "object", x: 62, y: 62 },
      london: { label: '"London"', kind: "string", x: 82, y: 62 },
    },
    steps: [
      {
        title: "Declare sherlock",
        description:
          "JavaScript creates a variable named sherlock. The variable is ready to point at a value.",
        line: 0,
        visible: ["sherlock"],
        wires: [],
        active: ["sherlock"],
      },
      {
        title: "Create an object value",
        description:
          "The opening brace starts an object literal. This creates a new object value with its own identity.",
        line: 0,
        visible: ["sherlock", "outer"],
        wires: [
          {
            id: "sherlock-outer",
            from: "sherlock",
            to: "outer",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["sherlock", "outer"],
      },
      {
        title: "Add the surname property",
        description:
          'The property name surname lives inside the object. Its wire points to the string value "Holmes".',
        line: 1,
        visible: ["sherlock", "outer", "holmes"],
        wires: [
          {
            id: "sherlock-outer",
            from: "sherlock",
            to: "outer",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "surname-holmes",
            from: "outer",
            to: "holmes",
            label: "surname",
            tone: "cyan",
            fromAnchor: { side: "right", offset: -18 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["outer", "holmes"],
      },
      {
        title: "Create the nested object",
        description:
          "The address property will point to another object value. Nested objects are separate values, not a special part of the outer object.",
        line: 2,
        visible: ["sherlock", "outer", "holmes", "address"],
        wires: [
          {
            id: "sherlock-outer",
            from: "sherlock",
            to: "outer",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "surname-holmes",
            from: "outer",
            to: "holmes",
            label: "surname",
            tone: "slate",
            fromAnchor: { side: "right", offset: -18 },
            toAnchor: { side: "left" },
          },
          {
            id: "address-object",
            from: "outer",
            to: "address",
            label: "address",
            tone: "orange",
            fromAnchor: { side: "right", offset: 18 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["outer", "address"],
      },
      {
        title: "Add city inside address",
        description:
          'The nested object gets its own property named city. That property points to the string value "London".',
        line: 2,
        visible: ["sherlock", "outer", "holmes", "address", "london"],
        wires: [
          {
            id: "sherlock-outer",
            from: "sherlock",
            to: "outer",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "surname-holmes",
            from: "outer",
            to: "holmes",
            label: "surname",
            tone: "slate",
            fromAnchor: { side: "right", offset: -18 },
            toAnchor: { side: "left" },
          },
          {
            id: "address-object",
            from: "outer",
            to: "address",
            label: "address",
            tone: "slate",
            fromAnchor: { side: "right", offset: 18 },
            toAnchor: { side: "left" },
          },
          {
            id: "city-london",
            from: "address",
            to: "london",
            label: "city",
            tone: "cyan",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["address", "london"],
        notes: [
          {
            text: "The outer object points to the address object. It does not contain London directly.",
            x: 52,
            y: 82,
          },
        ],
      },
    ],
    quiz: {
      prompt: "Which thing points directly to the value \"London\"?",
      options: ["sherlock", "address.city", "surname"],
      answer: "address.city",
      correct:
        'Correct. The city property on the address object points to "London".',
      wrong:
        'Not quite. sherlock points to the outer object; the nested city property points to "London".',
    },
  },
  {
    id: "mutation-vs-reassignment",
    number: "Chapter 3",
    title: "Mutation vs Reassignment",
    universeTitle: "Moving a wire is not changing an object",
    intro:
      "Reassignment moves a variable wire. Mutation changes a property wire inside an object. This difference is behind many real bugs.",
    code: [
      'let user = { name: "Ada" };',
      "let admin = user;",
      'admin.name = "Grace";',
    ],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 18, y: 38 },
      admin: { label: "admin", kind: "variable-wide", x: 18, y: 66 },
      person: { label: "{ }", kind: "object", x: 45, y: 52 },
      ada: { label: '"Ada"', kind: "string", x: 72, y: 35 },
      grace: { label: '"Grace"', kind: "string", x: 72, y: 68 },
    },
    steps: [
      {
        title: "Create user and an object",
        description:
          'The variable user points to a new object. The object has a name property pointing to "Ada".',
        line: 0,
        visible: ["user", "person", "ada"],
        wires: [
          {
            id: "user-person",
            from: "user",
            to: "person",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "person",
            to: "ada",
            label: "name",
            tone: "cyan",
            fromAnchor: { side: "right", offset: -12 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["user", "person", "ada"],
      },
      {
        title: "Create admin",
        description:
          "JavaScript creates another variable named admin. It is empty until assignment finishes.",
        line: 1,
        visible: ["user", "admin", "person", "ada"],
        wires: [
          {
            id: "user-person",
            from: "user",
            to: "person",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "person",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -12 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["admin"],
      },
      {
        title: "admin points to the same object",
        description:
          "admin = user evaluates user first. The result is the object value, so admin points to that same object.",
        line: 1,
        visible: ["user", "admin", "person", "ada"],
        wires: [
          {
            id: "user-person",
            from: "user",
            to: "person",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "admin-person",
            from: "admin",
            to: "person",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "person",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -12 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["admin", "person"],
      },
      {
        title: "Mutate the shared object",
        description:
          'admin.name = "Grace" does not move admin. It changes the name property wire inside the shared object.',
        line: 2,
        visible: ["user", "admin", "person", "ada", "grace"],
        wires: [
          {
            id: "user-person",
            from: "user",
            to: "person",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "admin-person",
            from: "admin",
            to: "person",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-grace",
            from: "person",
            to: "grace",
            label: "name",
            tone: "orange",
            fromAnchor: { side: "right", offset: 12 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["person", "grace"],
        notes: [
          {
            text: 'user.name is also "Grace" because user and admin share the object.',
            x: 50,
            y: 84,
          },
        ],
      },
    ],
    quiz: {
      prompt: 'After admin.name = "Grace", what is user.name?',
      options: ['"Ada"', '"Grace"', "undefined"],
      answer: '"Grace"',
      correct:
        'Correct. user and admin point to the same object, and that object now has name -> "Grace".',
      wrong:
        'Not quite. The mutation changed the shared object, so user sees the new name too.',
    },
  },
  {
    id: "object-identity",
    number: "Chapter 4",
    title: "Object Identity",
    universeTitle: "Same shape does not mean same object",
    intro:
      "Objects are compared by identity. Two empty objects can look identical but still be two different values.",
    code: ["let a = {};", "let b = {};", "let c = a;", "a === b;", "a === c;"],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      a: { label: "a", kind: "variable", x: 18, y: 30 },
      b: { label: "b", kind: "variable", x: 18, y: 55 },
      c: { label: "c", kind: "variable", x: 18, y: 78 },
      objA: { label: "{ }", kind: "object", x: 48, y: 36 },
      objB: { label: "{ }", kind: "object", x: 48, y: 62 },
      falseValue: { label: "false", kind: "string", x: 77, y: 36 },
      trueValue: { label: "true", kind: "string", x: 77, y: 62 },
    },
    steps: [
      {
        title: "a gets a new object",
        description:
          "Every object literal creates a new object value. a points to the first one.",
        line: 0,
        visible: ["a", "objA"],
        wires: [
          {
            id: "a-objA",
            from: "a",
            to: "objA",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["a", "objA"],
      },
      {
        title: "b gets another new object",
        description:
          "b points to a different object value. It has the same shape, but it is not the same object.",
        line: 1,
        visible: ["a", "b", "objA", "objB"],
        wires: [
          {
            id: "a-objA",
            from: "a",
            to: "objA",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "b-objB",
            from: "b",
            to: "objB",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["b", "objB"],
      },
      {
        title: "c points where a points",
        description:
          "c = a evaluates a first. The answer is the first object, so c points to that same object.",
        line: 2,
        visible: ["a", "b", "c", "objA", "objB"],
        wires: [
          {
            id: "a-objA",
            from: "a",
            to: "objA",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "b-objB",
            from: "b",
            to: "objB",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "c-objA",
            from: "c",
            to: "objA",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
        ],
        active: ["c", "objA"],
      },
      {
        title: "a === b is false",
        description:
          "Equality asks whether a and b point to the same object. They point to different object values.",
        line: 3,
        visible: ["a", "b", "c", "objA", "objB", "falseValue"],
        wires: [
          {
            id: "a-objA",
            from: "a",
            to: "objA",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "b-objB",
            from: "b",
            to: "objB",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "c-objA",
            from: "c",
            to: "objA",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
        ],
        active: ["a", "b", "falseValue"],
      },
      {
        title: "a === c is true",
        description:
          "a and c both point to the first object. Equality is true because the object identity is shared.",
        line: 4,
        visible: ["a", "b", "c", "objA", "objB", "trueValue"],
        wires: [
          {
            id: "a-objA",
            from: "a",
            to: "objA",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "b-objB",
            from: "b",
            to: "objB",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "c-objA",
            from: "c",
            to: "objA",
            tone: "cyan",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
        ],
        active: ["a", "c", "trueValue"],
      },
    ],
    quiz: {
      prompt: "Why is a === b false?",
      options: ["Different objects", "Different variables", "Objects cannot compare"],
      answer: "Different objects",
      correct:
        "Correct. a and b point to two different object values, even though both objects are empty.",
      wrong:
        "Not quite. JavaScript can compare objects, but it compares their identity, not their shape.",
    },
  },
  {
    id: "arrays-are-objects",
    number: "Chapter 5",
    title: "Arrays Are Objects",
    universeTitle: "Array indexes are property names",
    intro:
      "Arrays are object-like values for ordered lists. Their indexes behave like property names that point to values.",
    code: ['let todos = ["Learn", "Build"];', 'todos.push("Share");', "todos[1];"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      todos: { label: "todos", kind: "variable-wide", x: 18, y: 50 },
      array: { label: "[ ]", kind: "object", x: 42, y: 50 },
      learn: { label: '"Learn"', kind: "string", x: 70, y: 30 },
      build: { label: '"Build"', kind: "string", x: 70, y: 50 },
      share: { label: '"Share"', kind: "string", x: 70, y: 70 },
    },
    steps: [
      {
        title: "Create an array value",
        description:
          "The variable todos points to an array value. The array uses index properties to point to its items.",
        line: 0,
        visible: ["todos", "array", "learn", "build"],
        wires: [
          {
            id: "todos-array",
            from: "todos",
            to: "array",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "array-learn",
            from: "array",
            to: "learn",
            label: "0",
            tone: "cyan",
            fromAnchor: { side: "right", offset: -20 },
            toAnchor: { side: "left" },
          },
          {
            id: "array-build",
            from: "array",
            to: "build",
            label: "1",
            tone: "cyan",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["todos", "array"],
      },
      {
        title: "Push adds another indexed property",
        description:
          'push("Share") mutates the array. It adds a new index, 2, pointing to the new string value.',
        line: 1,
        visible: ["todos", "array", "learn", "build", "share"],
        wires: [
          {
            id: "todos-array",
            from: "todos",
            to: "array",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "array-learn",
            from: "array",
            to: "learn",
            label: "0",
            tone: "slate",
            fromAnchor: { side: "right", offset: -20 },
            toAnchor: { side: "left" },
          },
          {
            id: "array-build",
            from: "array",
            to: "build",
            label: "1",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "array-share",
            from: "array",
            to: "share",
            label: "2",
            tone: "orange",
            fromAnchor: { side: "right", offset: 20 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["array", "share"],
      },
      {
        title: "Read by index",
        description:
          "todos[1] follows the todos wire to the array, then follows the 1 property wire to the value.",
        line: 2,
        visible: ["todos", "array", "learn", "build", "share"],
        wires: [
          {
            id: "todos-array",
            from: "todos",
            to: "array",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "array-learn",
            from: "array",
            to: "learn",
            label: "0",
            tone: "slate",
            fromAnchor: { side: "right", offset: -20 },
            toAnchor: { side: "left" },
          },
          {
            id: "array-build",
            from: "array",
            to: "build",
            label: "1",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "array-share",
            from: "array",
            to: "share",
            label: "2",
            tone: "slate",
            fromAnchor: { side: "right", offset: 20 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["build"],
      },
    ],
    quiz: {
      prompt: "What value does todos[1] read?",
      options: ['"Learn"', '"Build"', '"Share"'],
      answer: '"Build"',
      correct: 'Correct. Index 1 points to "Build". Arrays start counting at 0.',
      wrong: "Not quite. Arrays start at 0, so index 1 is the second item.",
    },
  },
  {
    id: "functions-and-parameters",
    number: "Chapter 6",
    title: "Functions and Parameters",
    universeTitle: "Calling a function creates local wires",
    intro:
      "Functions are values. Calling one creates a temporary workspace where parameters point to argument values.",
    code: ["function double(n) {", "  return n * 2;", "}", "let result = double(5);"],
    legend: ["variable", "value", "wire"],
    nodes: {
      doubleName: { label: "double", kind: "variable-wide", x: 18, y: 36 },
      functionValue: { label: "fn", kind: "object", x: 42, y: 36 },
      five: { label: "5", kind: "value", x: 48, y: 62 },
      n: { label: "n", kind: "variable", x: 66, y: 62 },
      tenResult: { label: "10", kind: "value", x: 80, y: 78 },
      result: { label: "result", kind: "variable-wide", x: 54, y: 78 },
    },
    steps: [
      {
        title: "Create the function value",
        description:
          "A function declaration creates a function value. The name double points to that value.",
        line: 0,
        visible: ["doubleName", "functionValue"],
        wires: [
          {
            id: "double-function",
            from: "doubleName",
            to: "functionValue",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["doubleName", "functionValue"],
      },
      {
        title: "Prepare result",
        description:
          "JavaScript is running the declaration for result, but the wire cannot point anywhere until the initializer double(5) finishes.",
        line: 3,
        visible: ["doubleName", "functionValue", "result"],
        wires: [
          {
            id: "double-function",
            from: "doubleName",
            to: "functionValue",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["result"],
      },
      {
        title: "Call double with 5",
        description:
          "Before assignment can finish, JavaScript must evaluate double(5). It finds the function value and the argument value 5.",
        line: 3,
        visible: ["doubleName", "functionValue", "result", "five"],
        wires: [
          {
            id: "double-function",
            from: "doubleName",
            to: "functionValue",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["functionValue", "five"],
      },
      {
        title: "Parameter n points to 5",
        description:
          "Inside the function call, JavaScript creates a local parameter variable n and points it to the argument value 5.",
        line: 0,
        visible: ["doubleName", "functionValue", "result", "five", "n"],
        wires: [
          {
            id: "double-function",
            from: "doubleName",
            to: "functionValue",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "n-five",
            from: "n",
            to: "five",
            tone: "orange",
            fromAnchor: { side: "left" },
            toAnchor: { side: "right" },
          },
        ],
        active: ["n", "five"],
      },
      {
        title: "Return a new result value",
        description:
          "n * 2 evaluates to the value 10. The return statement sends that value back to the original call.",
        line: 1,
        visible: ["doubleName", "functionValue", "result", "five", "n", "tenResult"],
        wires: [
          {
            id: "double-function",
            from: "doubleName",
            to: "functionValue",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "n-five",
            from: "n",
            to: "five",
            tone: "slate",
            fromAnchor: { side: "left" },
            toAnchor: { side: "right" },
          },
        ],
        active: ["tenResult"],
      },
      {
        title: "Store the return value",
        description:
          "The assignment finishes by pointing result's wire to the returned value 10.",
        line: 3,
        visible: ["doubleName", "functionValue", "tenResult", "result"],
        wires: [
          {
            id: "double-function",
            from: "doubleName",
            to: "functionValue",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "result-ten",
            from: "result",
            to: "tenResult",
            tone: "cyan",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["result", "tenResult"],
      },
    ],
    quiz: {
      prompt: "During double(5), what does the parameter n point to?",
      options: ["double", "5", "10"],
      answer: "5",
      correct: "Correct. n is a local parameter wire that points to the argument value 5.",
      wrong: "Not quite. The return value is 10, but the parameter n receives the argument 5.",
    },
  },
  {
    id: "scope",
    number: "Chapter 7",
    title: "Scope",
    universeTitle: "Some wires live in smaller rooms",
    intro:
      "Scope decides where a variable can be used. A block can create local wires that disappear outside the block.",
    code: ["let outside = 1;", "{", "  let inside = 2;", "}", "inside;"],
    legend: ["variable", "value", "wire"],
    nodes: {
      outside: { label: "outside", kind: "variable-wide", x: 20, y: 35 },
      one: { label: "1", kind: "value", x: 48, y: 35 },
      inside: { label: "inside", kind: "variable-wide", x: 20, y: 68 },
      two: { label: "2", kind: "value", x: 48, y: 68 },
      error: { label: "ReferenceError", kind: "string", x: 78, y: 68 },
    },
    steps: [
      {
        title: "Create an outer variable",
        description:
          "outside is created in the outer scope. Code later in this lesson can still see it.",
        line: 0,
        visible: ["outside", "one"],
        wires: [
          {
            id: "outside-one",
            from: "outside",
            to: "one",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["outside", "one"],
      },
      {
        title: "Enter a block",
        description:
          "The braces create a smaller room. Variables declared with let inside this room are local to it.",
        line: 1,
        visible: ["outside", "one"],
        wires: [
          {
            id: "outside-one",
            from: "outside",
            to: "one",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["outside"],
        notes: [{ text: "A block is like a temporary room.", x: 55, y: 52 }],
      },
      {
        title: "Create a local variable",
        description:
          "inside is created inside the block. It points to 2, but only code inside the block can use it.",
        line: 2,
        visible: ["outside", "one", "inside", "two"],
        wires: [
          {
            id: "outside-one",
            from: "outside",
            to: "one",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "inside-two",
            from: "inside",
            to: "two",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["inside", "two"],
      },
      {
        title: "Leave the block",
        description:
          "After the closing brace, the local inside wire is no longer available.",
        line: 3,
        visible: ["outside", "one"],
        wires: [
          {
            id: "outside-one",
            from: "outside",
            to: "one",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["outside"],
      },
      {
        title: "inside is not visible here",
        description:
          "Trying to read inside outside its block fails because that variable does not exist in this scope.",
        line: 4,
        visible: ["outside", "one", "error"],
        wires: [
          {
            id: "outside-one",
            from: "outside",
            to: "one",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["error"],
      },
    ],
    quiz: {
      prompt: "Can code after the block use inside?",
      options: ["Yes", "No", "Only if it is 2"],
      answer: "No",
      correct: "Correct. inside was declared with let inside the block, so it is block-scoped.",
      wrong: "Not quite. let variables declared inside a block are not available outside it.",
    },
  },
  {
    id: "closures",
    number: "Chapter 8",
    title: "Closures",
    universeTitle: "Functions can carry an outer room",
    intro:
      "A closure happens when a function keeps access to variables from the place where it was created.",
    code: ["function makeCounter() {", "  let count = 0;", "  return function next() {", "    count = count + 1;", "  };", "}"],
    legend: ["variable", "object", "value", "wire"],
    nodes: {
      makeCounter: { label: "makeCounter", kind: "variable-wide", x: 18, y: 30 },
      makerFn: { label: "fn", kind: "object", x: 42, y: 30 },
      count: { label: "count", kind: "variable-wide", x: 38, y: 64 },
      zero: { label: "0", kind: "value", x: 62, y: 64 },
      nextFn: { label: "fn", kind: "object", x: 78, y: 46 },
    },
    steps: [
      {
        title: "Create makeCounter",
        description:
          "The name makeCounter points to a function value.",
        line: 0,
        visible: ["makeCounter", "makerFn"],
        wires: [
          {
            id: "makeCounter-makerFn",
            from: "makeCounter",
            to: "makerFn",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["makeCounter", "makerFn"],
      },
      {
        title: "Calling creates count",
        description:
          "When makeCounter runs, it creates a local variable count and points it to 0.",
        line: 1,
        visible: ["makeCounter", "makerFn", "count", "zero"],
        wires: [
          {
            id: "makeCounter-makerFn",
            from: "makeCounter",
            to: "makerFn",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "count-zero",
            from: "count",
            to: "zero",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["count", "zero"],
      },
      {
        title: "Return an inner function",
        description:
          "The returned next function was created in the same room as count.",
        line: 2,
        visible: ["makeCounter", "makerFn", "count", "zero", "nextFn"],
        wires: [
          {
            id: "makeCounter-makerFn",
            from: "makeCounter",
            to: "makerFn",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "count-zero",
            from: "count",
            to: "zero",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "next-count",
            from: "nextFn",
            to: "count",
            label: "remembers",
            tone: "cyan",
            fromAnchor: { side: "left" },
            toAnchor: { side: "right", offset: 12 },
          },
        ],
        active: ["nextFn", "count"],
      },
      {
        title: "The room stays alive",
        description:
          "Even after makeCounter finishes, next can still reach count. That remembered access is the closure.",
        line: 3,
        visible: ["count", "zero", "nextFn"],
        wires: [
          {
            id: "count-zero",
            from: "count",
            to: "zero",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "next-count",
            from: "nextFn",
            to: "count",
            label: "closure",
            tone: "orange",
            fromAnchor: { side: "left" },
            toAnchor: { side: "right", offset: 12 },
          },
        ],
        active: ["nextFn", "count"],
        notes: [{ text: "Closures power event handlers, callbacks, and React hooks.", x: 50, y: 84 }],
      },
    ],
    quiz: {
      prompt: "What does the returned next function keep access to?",
      options: ["count", "makeCounter", "0 only"],
      answer: "count",
      correct: "Correct. next closes over the variable count from its creation scope.",
      wrong: "Not quite. A closure remembers variables from the outer scope, not just a copied value.",
    },
  },
  {
    id: "conditionals",
    number: "Chapter 9",
    title: "Conditionals",
    universeTitle: "if statements choose a path",
    intro:
      "An if statement evaluates a condition. If the result is true, JavaScript runs the block. If it is false, the block is skipped.",
    code: ["let score = 72;", 'let message = "Try again";', "if (score >= 50) {", '  message = "Ready";', "}"],
    legend: ["variable", "value", "wire"],
    nodes: {
      score: { label: "score", kind: "variable-wide", x: 18, y: 32 },
      seventyTwo: { label: "72", kind: "value", x: 44, y: 32 },
      message: { label: "message", kind: "variable-wide", x: 18, y: 66 },
      tryAgain: { label: '"Try again"', kind: "string", x: 50, y: 66 },
      trueValue: { label: "true", kind: "string", x: 72, y: 40 },
      ready: { label: '"Ready"', kind: "string", x: 76, y: 66 },
    },
    steps: [
      {
        title: "Store the score",
        description: "The score variable points to the number value 72.",
        line: 0,
        visible: ["score", "seventyTwo"],
        wires: [
          {
            id: "score-72",
            from: "score",
            to: "seventyTwo",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["score", "seventyTwo"],
      },
      {
        title: "Start with a default message",
        description:
          'message points to "Try again". This is the value we will keep if the condition is false.',
        line: 1,
        visible: ["score", "seventyTwo", "message", "tryAgain"],
        wires: [
          {
            id: "score-72",
            from: "score",
            to: "seventyTwo",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "message-try",
            from: "message",
            to: "tryAgain",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["message", "tryAgain"],
      },
      {
        title: "Evaluate the condition",
        description:
          "score >= 50 evaluates score, compares 72 to 50, and produces the boolean value true.",
        line: 2,
        visible: ["score", "seventyTwo", "message", "tryAgain", "trueValue"],
        wires: [
          {
            id: "score-72",
            from: "score",
            to: "seventyTwo",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "message-try",
            from: "message",
            to: "tryAgain",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["trueValue"],
      },
      {
        title: "Run the true branch",
        description:
          'Because the condition is true, JavaScript runs the block and reassigns message to "Ready".',
        line: 3,
        visible: ["score", "seventyTwo", "message", "tryAgain", "trueValue", "ready"],
        wires: [
          {
            id: "score-72",
            from: "score",
            to: "seventyTwo",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "message-ready",
            from: "message",
            to: "ready",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["message", "ready"],
      },
    ],
    quiz: {
      prompt: "Why does message point to \"Ready\"?",
      options: ["The condition is true", "Strings mutate", "score points to message"],
      answer: "The condition is true",
      correct: "Correct. score >= 50 produced true, so JavaScript ran the if block.",
      wrong: "Not quite. The assignment runs because the if condition evaluates to true.",
    },
  },
  {
    id: "loops",
    number: "Chapter 10",
    title: "Loops",
    universeTitle: "Loops repeat a check and an update",
    intro:
      "A loop repeatedly checks a condition. Each pass can move variable wires, and the loop stops when the condition becomes false.",
    code: ["let count = 0;", "while (count < 3) {", "  count = count + 1;", "}"],
    legend: ["variable", "value", "wire"],
    nodes: {
      count: { label: "count", kind: "variable-wide", x: 18, y: 52 },
      zero: { label: "0", kind: "value", x: 42, y: 30 },
      one: { label: "1", kind: "value", x: 58, y: 42 },
      two: { label: "2", kind: "value", x: 58, y: 66 },
      three: { label: "3", kind: "value", x: 76, y: 52 },
      falseValue: { label: "false", kind: "string", x: 76, y: 78 },
    },
    steps: [
      {
        title: "Start at 0",
        description: "The count variable points to the number value 0.",
        line: 0,
        visible: ["count", "zero"],
        wires: [
          {
            id: "count-zero",
            from: "count",
            to: "zero",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["count", "zero"],
      },
      {
        title: "First check and update",
        description:
          "count < 3 is true when count is 0, so the body runs and count moves to 1.",
        line: 2,
        visible: ["count", "zero", "one"],
        wires: [
          {
            id: "count-one",
            from: "count",
            to: "one",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["count", "one"],
      },
      {
        title: "Second check and update",
        description:
          "JavaScript checks again. count is 1, which is still less than 3, so count moves to 2.",
        line: 2,
        visible: ["count", "zero", "one", "two"],
        wires: [
          {
            id: "count-two",
            from: "count",
            to: "two",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["count", "two"],
      },
      {
        title: "Third check and update",
        description:
          "count is 2, which is still less than 3. The body runs one more time and count moves to 3.",
        line: 2,
        visible: ["count", "zero", "one", "two", "three"],
        wires: [
          {
            id: "count-three",
            from: "count",
            to: "three",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["count", "three"],
      },
      {
        title: "The loop stops",
        description:
          "JavaScript checks again. count < 3 is now false, so the loop is finished.",
        line: 1,
        visible: ["count", "three", "falseValue"],
        wires: [
          {
            id: "count-three",
            from: "count",
            to: "three",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["falseValue"],
      },
    ],
    quiz: {
      prompt: "Why does the loop stop when count is 3?",
      options: ["count < 3 is false", "count disappears", "3 mutates"],
      answer: "count < 3 is false",
      correct: "Correct. The condition is checked before another pass, and 3 < 3 is false.",
      wrong: "Not quite. The loop stops because the condition becomes false.",
    },
  },
  {
    id: "truthy-and-falsy",
    number: "Chapter 11",
    title: "Truthy and Falsy",
    universeTitle: "Some values decide control flow",
    intro:
      "JavaScript often asks whether a value behaves like true or false. This is common when choosing defaults.",
    code: ['let name = "";', 'let fallback = "Guest";', "let displayName = name || fallback;"],
    legend: ["variable", "value", "wire"],
    nodes: {
      name: { label: "name", kind: "variable-wide", x: 18, y: 30 },
      empty: { label: '""', kind: "string", x: 43, y: 30 },
      fallback: { label: "fallback", kind: "variable-wide", x: 18, y: 52 },
      guest: { label: '"Guest"', kind: "string", x: 48, y: 52 },
      displayName: { label: "displayName", kind: "variable-wide", x: 18, y: 76 },
      falseValue: { label: "falsy", kind: "string", x: 70, y: 30 },
    },
    steps: [
      {
        title: "Store an empty string",
        description:
          'name points to the empty string value "". Empty strings are real values, even though they are falsy.',
        line: 0,
        visible: ["name", "empty"],
        wires: [
          {
            id: "name-empty",
            from: "name",
            to: "empty",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["name", "empty"],
      },
      {
        title: "Store a fallback",
        description:
          'fallback points to "Guest". This value can be used when name behaves like false.',
        line: 1,
        visible: ["name", "empty", "fallback", "guest"],
        wires: [
          {
            id: "name-empty",
            from: "name",
            to: "empty",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "fallback-guest",
            from: "fallback",
            to: "guest",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["fallback", "guest"],
      },
      {
        title: "Evaluate name first",
        description:
          "The || operator evaluates name first. The empty string is falsy, so JavaScript keeps looking to the right.",
        line: 2,
        visible: ["name", "empty", "fallback", "guest", "falseValue"],
        wires: [
          {
            id: "name-empty",
            from: "name",
            to: "empty",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "fallback-guest",
            from: "fallback",
            to: "guest",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["empty", "falseValue"],
      },
      {
        title: "Use the fallback value",
        description:
          'Because name is falsy, name || fallback evaluates to the value that fallback points to: "Guest".',
        line: 2,
        visible: ["name", "empty", "fallback", "guest", "displayName"],
        wires: [
          {
            id: "name-empty",
            from: "name",
            to: "empty",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "fallback-guest",
            from: "fallback",
            to: "guest",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "display-guest",
            from: "displayName",
            to: "guest",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
        ],
        active: ["displayName", "guest"],
      },
    ],
    quiz: {
      prompt: 'What value does displayName point to?',
      options: ['""', '"Guest"', "false"],
      answer: '"Guest"',
      correct:
        'Correct. The empty string is falsy, so || returns the fallback value "Guest".',
      wrong:
        'Not quite. || does not return true or false here; it returns one of the original values.',
    },
  },
  {
    id: "destructuring",
    number: "Chapter 12",
    title: "Destructuring",
    universeTitle: "Destructuring creates new wires",
    intro:
      "Destructuring is a shortcut for reading properties from an object and assigning their values to new variables.",
    code: ["let point = { x: 3, y: 4 };", "let { x } = point;"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      point: { label: "point", kind: "variable-wide", x: 18, y: 46 },
      object: { label: "{ }", kind: "object", x: 42, y: 46 },
      three: { label: "3", kind: "value", x: 68, y: 34 },
      four: { label: "4", kind: "value", x: 68, y: 58 },
      x: { label: "x", kind: "variable", x: 18, y: 76 },
    },
    steps: [
      {
        title: "Create point",
        description:
          "point points to a new object value. That object has property wires named x and y.",
        line: 0,
        visible: ["point", "object", "three", "four"],
        wires: [
          {
            id: "point-object",
            from: "point",
            to: "object",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "object-x-three",
            from: "object",
            to: "three",
            label: "x",
            tone: "cyan",
            fromAnchor: { side: "right", offset: -14 },
            toAnchor: { side: "left" },
          },
          {
            id: "object-y-four",
            from: "object",
            to: "four",
            label: "y",
            tone: "cyan",
            fromAnchor: { side: "right", offset: 14 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["point", "object"],
      },
      {
        title: "Prepare variable x",
        description:
          "The destructuring declaration creates a new variable named x. It is separate from the object's x property.",
        line: 1,
        visible: ["point", "object", "three", "four", "x"],
        wires: [
          {
            id: "point-object",
            from: "point",
            to: "object",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "object-x-three",
            from: "object",
            to: "three",
            label: "x",
            tone: "slate",
            fromAnchor: { side: "right", offset: -14 },
            toAnchor: { side: "left" },
          },
          {
            id: "object-y-four",
            from: "object",
            to: "four",
            label: "y",
            tone: "slate",
            fromAnchor: { side: "right", offset: 14 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["x"],
      },
      {
        title: "Read point.x",
        description:
          "JavaScript evaluates point, follows its x property wire, and finds the value 3.",
        line: 1,
        visible: ["point", "object", "three", "four", "x"],
        wires: [
          {
            id: "point-object",
            from: "point",
            to: "object",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "object-x-three",
            from: "object",
            to: "three",
            label: "x",
            tone: "orange",
            fromAnchor: { side: "right", offset: -14 },
            toAnchor: { side: "left" },
          },
          {
            id: "object-y-four",
            from: "object",
            to: "four",
            label: "y",
            tone: "slate",
            fromAnchor: { side: "right", offset: 14 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["three"],
      },
      {
        title: "Point x to 3",
        description:
          "The new variable x points to the value read from point.x. It does not point to the property itself.",
        line: 1,
        visible: ["point", "object", "three", "four", "x"],
        wires: [
          {
            id: "point-object",
            from: "point",
            to: "object",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "object-x-three",
            from: "object",
            to: "three",
            label: "x",
            tone: "slate",
            fromAnchor: { side: "right", offset: -14 },
            toAnchor: { side: "left" },
          },
          {
            id: "object-y-four",
            from: "object",
            to: "four",
            label: "y",
            tone: "slate",
            fromAnchor: { side: "right", offset: 14 },
            toAnchor: { side: "left" },
          },
          {
            id: "x-three",
            from: "x",
            to: "three",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
        ],
        active: ["x", "three"],
      },
    ],
    quiz: {
      prompt: "After destructuring, what does the new variable x point to?",
      options: ["point", "3", "property wire"],
      answer: "3",
      correct: "Correct. Destructuring reads point.x and assigns that resulting value to x.",
      wrong:
        "Not quite. Destructuring reads a property value; it does not make x point to the property wire.",
    },
  },
  {
    id: "rest-syntax",
    number: "Chapter 13",
    title: "Rest Syntax",
    universeTitle: "Rest collects leftover values",
    intro:
      "Rest syntax gathers the values that were not picked individually and puts them into a new array.",
    code: ['let items = ["A", "B", "C"];', "let [first, ...rest] = items;"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      items: { label: "items", kind: "variable-wide", x: 16, y: 42 },
      sourceArray: { label: "[ ]", kind: "object", x: 38, y: 42 },
      a: { label: '"A"', kind: "string", x: 72, y: 24 },
      b: { label: '"B"', kind: "string", x: 72, y: 46 },
      c: { label: '"C"', kind: "string", x: 72, y: 68 },
      first: { label: "first", kind: "variable-wide", x: 16, y: 70 },
      rest: { label: "rest", kind: "variable-wide", x: 16, y: 84 },
      restArray: { label: "[ ]", kind: "object", x: 40, y: 84 },
    },
    steps: [
      {
        title: "Create the source array",
        description:
          "items points to one array value. That array has index property wires to the string values.",
        line: 0,
        visible: ["items", "sourceArray", "a", "b", "c"],
        wires: [
          {
            id: "items-source",
            from: "items",
            to: "sourceArray",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "source-a",
            from: "sourceArray",
            to: "a",
            label: "0",
            tone: "cyan",
            fromAnchor: { side: "right", offset: -18 },
            toAnchor: { side: "left" },
          },
          {
            id: "source-b",
            from: "sourceArray",
            to: "b",
            label: "1",
            tone: "cyan",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "source-c",
            from: "sourceArray",
            to: "c",
            label: "2",
            tone: "cyan",
            fromAnchor: { side: "right", offset: 18 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["items", "sourceArray"],
      },
      {
        title: "Pick the first value",
        description:
          "Destructuring reads items[0]. The new variable first points to the value at index 0.",
        line: 1,
        visible: ["items", "sourceArray", "a", "b", "c", "first"],
        wires: [
          {
            id: "items-source",
            from: "items",
            to: "sourceArray",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "source-a",
            from: "sourceArray",
            to: "a",
            label: "0",
            tone: "slate",
            fromAnchor: { side: "right", offset: -18 },
            toAnchor: { side: "left" },
          },
          {
            id: "source-b",
            from: "sourceArray",
            to: "b",
            label: "1",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "source-c",
            from: "sourceArray",
            to: "c",
            label: "2",
            tone: "slate",
            fromAnchor: { side: "right", offset: 18 },
            toAnchor: { side: "left" },
          },
          {
            id: "first-a",
            from: "first",
            to: "a",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
        ],
        active: ["first", "a"],
      },
      {
        title: "Create a new rest array",
        description:
          "...rest creates a new array value for the leftover elements. It does not point rest at the original array.",
        line: 1,
        visible: ["items", "sourceArray", "a", "b", "c", "first", "rest", "restArray"],
        wires: [
          {
            id: "items-source",
            from: "items",
            to: "sourceArray",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "first-a",
            from: "first",
            to: "a",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
          {
            id: "rest-array",
            from: "rest",
            to: "restArray",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["rest", "restArray"],
      },
      {
        title: "Fill rest with leftovers",
        description:
          "The rest array gets its own index wires to the remaining values. The values are reused; the array is new.",
        line: 1,
        visible: ["items", "sourceArray", "a", "b", "c", "first", "rest", "restArray"],
        wires: [
          {
            id: "items-source",
            from: "items",
            to: "sourceArray",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "source-a",
            from: "sourceArray",
            to: "a",
            label: "0",
            tone: "slate",
            fromAnchor: { side: "right", offset: -18 },
            toAnchor: { side: "left" },
          },
          {
            id: "source-b",
            from: "sourceArray",
            to: "b",
            label: "1",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "source-c",
            from: "sourceArray",
            to: "c",
            label: "2",
            tone: "slate",
            fromAnchor: { side: "right", offset: 18 },
            toAnchor: { side: "left" },
          },
          {
            id: "first-a",
            from: "first",
            to: "a",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
          {
            id: "rest-array",
            from: "rest",
            to: "restArray",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "rest-b",
            from: "restArray",
            to: "b",
            label: "0",
            tone: "orange",
            fromAnchor: { side: "right", offset: -12 },
            toAnchor: { side: "left", offset: 10 },
            labelOffset: { y: 20 },
          },
          {
            id: "rest-c",
            from: "restArray",
            to: "c",
            label: "1",
            tone: "orange",
            fromAnchor: { side: "right", offset: 12 },
            toAnchor: { side: "left", offset: 10 },
            labelOffset: { y: 20 },
          },
        ],
        active: ["restArray", "b", "c"],
      },
    ],
    quiz: {
      prompt: "What does rest point to?",
      options: ["items", "a new array", '"B"'],
      answer: "a new array",
      correct:
        "Correct. Rest syntax creates a new array for the leftover elements.",
      wrong:
        "Not quite. rest is a variable pointing to a new array, not the original items array.",
    },
  },
  {
    id: "spread-syntax",
    number: "Chapter 14",
    title: "Spread Syntax",
    universeTitle: "Spread copies entries into a new array",
    intro:
      "Spread syntax expands an iterable. In an array literal, it creates a new array and copies entries into it.",
    code: ['let items = ["A", "B"];', "let copy = [...items];"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      items: { label: "items", kind: "variable-wide", x: 16, y: 34 },
      sourceArray: { label: "[ ]", kind: "object", x: 40, y: 34 },
      a: { label: '"A"', kind: "string", x: 72, y: 30 },
      b: { label: '"B"', kind: "string", x: 72, y: 58 },
      copy: { label: "copy", kind: "variable-wide", x: 16, y: 72 },
      copyArray: { label: "[ ]", kind: "object", x: 40, y: 72 },
    },
    steps: [
      {
        title: "Start with one array",
        description:
          "items points to an array value. The array has index wires to its entries.",
        line: 0,
        visible: ["items", "sourceArray", "a", "b"],
        wires: [
          {
            id: "items-source",
            from: "items",
            to: "sourceArray",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "source-a",
            from: "sourceArray",
            to: "a",
            label: "0",
            tone: "cyan",
            fromAnchor: { side: "right", offset: -12 },
            toAnchor: { side: "left" },
          },
          {
            id: "source-b",
            from: "sourceArray",
            to: "b",
            label: "1",
            tone: "cyan",
            fromAnchor: { side: "right", offset: 12 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["items", "sourceArray"],
      },
      {
        title: "Create the copy variable",
        description:
          "JavaScript prepares the variable copy, then evaluates the array literal on the right.",
        line: 1,
        visible: ["items", "sourceArray", "a", "b", "copy"],
        wires: [
          {
            id: "items-source",
            from: "items",
            to: "sourceArray",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "source-a",
            from: "sourceArray",
            to: "a",
            label: "0",
            tone: "slate",
            fromAnchor: { side: "right", offset: -12 },
            toAnchor: { side: "left" },
          },
          {
            id: "source-b",
            from: "sourceArray",
            to: "b",
            label: "1",
            tone: "slate",
            fromAnchor: { side: "right", offset: 12 },
            toAnchor: { side: "left" },
            labelOffset: { y: -18 },
          },
        ],
        active: ["copy"],
      },
      {
        title: "Create a new array value",
        description:
          "[...items] creates a new array value. It is not the same array that items points to.",
        line: 1,
        visible: ["items", "sourceArray", "a", "b", "copy", "copyArray"],
        wires: [
          {
            id: "items-source",
            from: "items",
            to: "sourceArray",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "copy-array",
            from: "copy",
            to: "copyArray",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["copy", "copyArray"],
      },
      {
        title: "Copy the entries",
        description:
          "The new array gets its own index wires. Those wires point to the same entry values as the original array.",
        line: 1,
        visible: ["items", "sourceArray", "a", "b", "copy", "copyArray"],
        wires: [
          {
            id: "items-source",
            from: "items",
            to: "sourceArray",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "source-a",
            from: "sourceArray",
            to: "a",
            label: "0",
            tone: "slate",
            fromAnchor: { side: "right", offset: -12 },
            toAnchor: { side: "left" },
          },
          {
            id: "source-b",
            from: "sourceArray",
            to: "b",
            label: "1",
            tone: "slate",
            fromAnchor: { side: "right", offset: 12 },
            toAnchor: { side: "left" },
          },
          {
            id: "copy-array",
            from: "copy",
            to: "copyArray",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "copy-a",
            from: "copyArray",
            to: "a",
            label: "0",
            tone: "orange",
            fromAnchor: { side: "right", offset: -12 },
            toAnchor: { side: "left", offset: 12 },
            labelOffset: { y: 18 },
          },
          {
            id: "copy-b",
            from: "copyArray",
            to: "b",
            label: "1",
            tone: "orange",
            fromAnchor: { side: "right", offset: 12 },
            toAnchor: { side: "left", offset: 12 },
            labelOffset: { y: 18 },
          },
        ],
        active: ["copyArray", "a", "b"],
      },
    ],
    quiz: {
      prompt: "Is copy the same array value as items?",
      options: ["Yes", "No", "Only after mutation"],
      answer: "No",
      correct:
        "Correct. The array is new, even though its entries point to the same values.",
      wrong:
        "Not quite. Spread in an array literal creates a new outer array.",
    },
  },
  {
    id: "shallow-copy",
    number: "Chapter 15",
    title: "Shallow Copies",
    universeTitle: "Spread copies one level",
    intro:
      "Object spread is useful, but it only copies the outer object. Nested objects are still shared unless you copy them too.",
    code: [
      'let user = { name: "Ada", address: { city: "Paris" } };',
      "let copy = { ...user };",
      'copy.address.city = "London";',
    ],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 14, y: 42 },
      userObj: { label: "{ }", kind: "object", x: 35, y: 42 },
      ada: { label: '"Ada"', kind: "string", x: 62, y: 24 },
      addressObj: { label: "{ }", kind: "object", x: 62, y: 50 },
      paris: { label: '"Paris"', kind: "string", x: 84, y: 50 },
      copy: { label: "copy", kind: "variable-wide", x: 14, y: 74 },
      copyObj: { label: "{ }", kind: "object", x: 35, y: 74 },
      london: { label: '"London"', kind: "string", x: 84, y: 72 },
    },
    steps: [
      {
        title: "Create user",
        description:
          "user points to an object. That object has a name property and an address property.",
        line: 0,
        visible: ["user", "userObj", "ada", "addressObj", "paris"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "user-name",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "cyan",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "user-address",
            from: "userObj",
            to: "addressObj",
            label: "address",
            tone: "cyan",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "address-paris",
            from: "addressObj",
            to: "paris",
            label: "city",
            tone: "cyan",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["user", "userObj"],
      },
      {
        title: "Create a new outer object",
        description:
          "{ ...user } creates a new object for copy. The outer object is different from user.",
        line: 1,
        visible: ["user", "userObj", "ada", "addressObj", "paris", "copy", "copyObj"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "user-name",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "user-address",
            from: "userObj",
            to: "addressObj",
            label: "address",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "address-paris",
            from: "addressObj",
            to: "paris",
            label: "city",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "copy-copyObj",
            from: "copy",
            to: "copyObj",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["copy", "copyObj"],
      },
      {
        title: "Copy the property wires",
        description:
          "The new outer object gets its own name and address properties. But address still points to the same nested object.",
        line: 1,
        visible: ["user", "userObj", "ada", "addressObj", "paris", "copy", "copyObj"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "user-name",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "user-address",
            from: "userObj",
            to: "addressObj",
            label: "address",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "address-paris",
            from: "addressObj",
            to: "paris",
            label: "city",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "copy-copyObj",
            from: "copy",
            to: "copyObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "copy-name",
            from: "copyObj",
            to: "ada",
            label: "name",
            tone: "orange",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left", offset: 14 },
          },
          {
            id: "copy-address",
            from: "copyObj",
            to: "addressObj",
            label: "address",
            tone: "orange",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left", offset: 14 },
          },
        ],
        active: ["copyObj", "addressObj"],
      },
      {
        title: "Mutate the shared nested object",
        description:
          'copy.address.city moves the city property on the shared address object to "London". user.address sees it too.',
        line: 2,
        visible: ["user", "userObj", "addressObj", "copy", "copyObj", "london"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "user-address",
            from: "userObj",
            to: "addressObj",
            label: "address",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "copy-copyObj",
            from: "copy",
            to: "copyObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "copy-address",
            from: "copyObj",
            to: "addressObj",
            label: "address",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left", offset: 14 },
          },
          {
            id: "address-london",
            from: "addressObj",
            to: "london",
            label: "city",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["addressObj", "london"],
        notes: [
          {
            text: "The outer object was copied. The nested address object was shared.",
            x: 55,
            y: 84,
          },
        ],
      },
    ],
    quiz: {
      prompt: 'After copy.address.city = "London", what is user.address.city?',
      options: ['"Paris"', '"London"', "undefined"],
      answer: '"London"',
      correct:
        'Correct. user.address and copy.address point to the same nested object.',
      wrong:
        "Not quite. Object spread made a new outer object, but it reused the nested address object.",
    },
  },
  {
    id: "methods-and-this",
    number: "Chapter 16",
    title: "Methods and this",
    universeTitle: "Method calls provide this",
    intro:
      "A method is a function value stored on an object. Calling it through the object gives the function a this value.",
    code: [
      "let user = {",
      '  name: "Ada",',
      "  sayHi() { return this.name; }",
      "};",
      "let result = user.sayHi();",
    ],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 14, y: 42 },
      userObj: { label: "{ }", kind: "object", x: 36, y: 42 },
      ada: { label: '"Ada"', kind: "string", x: 68, y: 28 },
      fn: { label: "fn", kind: "object", x: 68, y: 52 },
      thisVar: { label: "this", kind: "variable-wide", x: 36, y: 72 },
      result: { label: "result", kind: "variable-wide", x: 14, y: 82 },
    },
    steps: [
      {
        title: "Create the object",
        description:
          "user points to an object. That object will hold both data and a function property.",
        line: 0,
        visible: ["user", "userObj"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["user", "userObj"],
      },
      {
        title: "Add the name property",
        description:
          'The name property on the object points to the string value "Ada".',
        line: 1,
        visible: ["user", "userObj", "ada"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "orange",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["userObj", "ada"],
      },
      {
        title: "Add the function property",
        description:
          "sayHi is a property too. Its wire points to a function value.",
        line: 2,
        visible: ["user", "userObj", "ada", "fn"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHi-fn",
            from: "userObj",
            to: "fn",
            label: "sayHi",
            tone: "orange",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["userObj", "fn"],
      },
      {
        title: "Call user.sayHi",
        description:
          "Because the function is called through user, JavaScript creates a local this wire pointing to the user object.",
        line: 4,
        visible: ["user", "userObj", "ada", "fn", "thisVar"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHi-fn",
            from: "userObj",
            to: "fn",
            label: "sayHi",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "this-userObj",
            from: "thisVar",
            to: "userObj",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "bottom" },
          },
        ],
        active: ["thisVar", "userObj"],
      },
      {
        title: "Read this.name",
        description:
          'Inside the function, this.name follows this to the object, then follows the name property to "Ada".',
        line: 2,
        visible: ["user", "userObj", "ada", "fn", "thisVar"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "orange",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHi-fn",
            from: "userObj",
            to: "fn",
            label: "sayHi",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "this-userObj",
            from: "thisVar",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "bottom" },
          },
        ],
        active: ["thisVar", "ada"],
      },
      {
        title: "Store the returned value",
        description:
          'sayHi returns "Ada". The result variable points to that returned value.',
        line: 4,
        visible: ["user", "userObj", "ada", "fn", "result"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHi-fn",
            from: "userObj",
            to: "fn",
            label: "sayHi",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "result-ada",
            from: "result",
            to: "ada",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
        ],
        active: ["result", "ada"],
      },
    ],
    quiz: {
      prompt: "During user.sayHi(), what does this point to?",
      options: ["user object", "sayHi function", '"Ada"'],
      answer: "user object",
      correct:
        "Correct. Calling through user provides the user object as this.",
      wrong:
        "Not quite. this is set by how the function is called; user.sayHi() points this to user.",
    },
  },
  {
    id: "detached-methods",
    number: "Chapter 17",
    title: "Detached Methods",
    universeTitle: "this depends on the call",
    intro:
      "Copying a method into another variable copies only the function value. It does not remember the object it came from.",
    code: [
      '"use strict";',
      "let user = {",
      '  name: "Ada",',
      "  sayHi() { return this.name; }",
      "};",
      "let sayHi = user.sayHi;",
      "sayHi();",
    ],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 14, y: 38 },
      userObj: { label: "{ }", kind: "object", x: 36, y: 38 },
      ada: { label: '"Ada"', kind: "string", x: 68, y: 24 },
      fn: { label: "fn", kind: "object", x: 68, y: 50 },
      sayHiVar: { label: "sayHi", kind: "variable-wide", x: 14, y: 72 },
      thisVar: { label: "this", kind: "variable-wide", x: 42, y: 76 },
      undefinedValue: { label: "undefined", kind: "string", x: 70, y: 76 },
      error: { label: "TypeError", kind: "string", x: 84, y: 68 },
    },
    steps: [
      {
        title: "Create user and its method",
        description:
          "user points to an object. The object has a name property and a sayHi property pointing to a function value.",
        line: 1,
        visible: ["user", "userObj", "ada", "fn"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "cyan",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHi-fn",
            from: "userObj",
            to: "fn",
            label: "sayHi",
            tone: "cyan",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["userObj", "fn"],
      },
      {
        title: "Create a new variable",
        description:
          "JavaScript creates a new variable named sayHi. The right side still needs to be evaluated.",
        line: 5,
        visible: ["user", "userObj", "ada", "fn", "sayHiVar"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHi-fn",
            from: "userObj",
            to: "fn",
            label: "sayHi",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
        ],
        active: ["sayHiVar"],
      },
      {
        title: "Copy the function value",
        description:
          "user.sayHi evaluates to the function value. The new sayHi variable points to that function, not to the user object.",
        line: 5,
        visible: ["user", "userObj", "ada", "fn", "sayHiVar"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHi-fn",
            from: "userObj",
            to: "fn",
            label: "sayHi",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHiVar-fn",
            from: "sayHiVar",
            to: "fn",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
        ],
        active: ["sayHiVar", "fn"],
      },
      {
        title: "Call it without an object",
        description:
          "sayHi() is a plain function call. In strict mode, there is no object before the dot, so this is undefined.",
        line: 6,
        visible: ["user", "userObj", "ada", "fn", "sayHiVar", "thisVar", "undefinedValue"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHi-fn",
            from: "userObj",
            to: "fn",
            label: "sayHi",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHiVar-fn",
            from: "sayHiVar",
            to: "fn",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
          {
            id: "this-undefined",
            from: "thisVar",
            to: "undefinedValue",
            tone: "orange",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["thisVar", "undefinedValue"],
      },
      {
        title: "this.name fails",
        description:
          "The function tries to read this.name, but this is undefined. That throws a TypeError instead of returning Ada.",
        line: 3,
        visible: ["user", "userObj", "ada", "fn", "sayHiVar", "thisVar", "undefinedValue", "error"],
        wires: [
          {
            id: "user-userObj",
            from: "user",
            to: "userObj",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
          {
            id: "name-ada",
            from: "userObj",
            to: "ada",
            label: "name",
            tone: "slate",
            fromAnchor: { side: "right", offset: -16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHi-fn",
            from: "userObj",
            to: "fn",
            label: "sayHi",
            tone: "slate",
            fromAnchor: { side: "right", offset: 16 },
            toAnchor: { side: "left" },
          },
          {
            id: "sayHiVar-fn",
            from: "sayHiVar",
            to: "fn",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left", offset: 12 },
          },
          {
            id: "this-undefined",
            from: "thisVar",
            to: "undefinedValue",
            tone: "slate",
            fromAnchor: { side: "right" },
            toAnchor: { side: "left" },
          },
        ],
        active: ["undefinedValue", "error"],
      },
    ],
    quiz: {
      prompt: "Why does sayHi() fail after detaching it?",
      options: ["this is undefined", "Ada changed", "functions cannot be copied"],
      answer: "this is undefined",
      correct:
        "Correct. The function was copied, but the user object was not provided as this.",
      wrong:
        "Not quite. The function value is fine; the problem is how it was called.",
    },
  },
  {
    id: "bind-this",
    number: "Chapter 18",
    title: "Binding this",
    universeTitle: "bind packages this with a function",
    intro:
      "bind creates a new function value that remembers which value should become this when it is called later.",
    code: [
      "let user = { name: \"Ada\" };",
      "function sayHi() { return this.name; }",
      "let bound = sayHi.bind(user);",
      "bound();",
    ],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 14, y: 32 },
      userObj: { label: "{ }", kind: "object", x: 36, y: 32 },
      ada: { label: '"Ada"', kind: "string", x: 66, y: 24 },
      sayHi: { label: "sayHi", kind: "variable-wide", x: 14, y: 58 },
      fn: { label: "fn", kind: "object", x: 36, y: 58 },
      bound: { label: "bound", kind: "variable-wide", x: 14, y: 82 },
      boundFn: { label: "fn", kind: "object", x: 42, y: 82 },
      result: { label: '"Ada"', kind: "string", x: 72, y: 82 },
    },
    steps: [
      {
        title: "Create user",
        description:
          'user points to an object whose name property points to "Ada".',
        line: 0,
        visible: ["user", "userObj", "ada"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "userObj", to: "ada", label: "name", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["user", "userObj"],
      },
      {
        title: "Create sayHi",
        description:
          "sayHi points to a function value. By itself, that function does not have a permanent this.",
        line: 1,
        visible: ["user", "userObj", "ada", "sayHi", "fn"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "sayHi-fn", from: "sayHi", to: "fn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["sayHi", "fn"],
      },
      {
        title: "Bind user to sayHi",
        description:
          "sayHi.bind(user) creates a new function value. That new function remembers user as its this value.",
        line: 2,
        visible: ["user", "userObj", "ada", "sayHi", "fn", "bound", "boundFn"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "sayHi-fn", from: "sayHi", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "bound-boundFn", from: "bound", to: "boundFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "boundFn-userObj", from: "boundFn", to: "userObj", label: "this", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["bound", "boundFn", "userObj"],
      },
      {
        title: "Call the bound function",
        description:
          'bound() can be called without an object. It still uses user as this, so it returns "Ada".',
        line: 3,
        visible: ["user", "userObj", "ada", "bound", "boundFn", "result"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "bound-boundFn", from: "bound", to: "boundFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "boundFn-userObj", from: "boundFn", to: "userObj", label: "this", tone: "slate", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
          { id: "bound-result", from: "boundFn", to: "result", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["boundFn", "result"],
      },
    ],
    quiz: {
      prompt: "What does bind create?",
      options: ["a new function", "a new user object", "a string"],
      answer: "a new function",
      correct: "Correct. bind returns a new function that remembers a this value.",
      wrong: "Not quite. bind does not call the function; it creates a new bound function.",
    },
  },
  {
    id: "arrow-functions",
    number: "Chapter 19",
    title: "Arrow Functions",
    universeTitle: "Arrows do not create their own this",
    intro:
      "Arrow functions are functions, but they do not get a fresh this when called. They use this from the surrounding scope.",
    code: [
      "function makeGreeter() {",
      '  let name = "Ada";',
      "  return () => name;",
      "}",
      "let greet = makeGreeter();",
      "greet();",
    ],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      makeGreeter: { label: "makeGreeter", kind: "variable-wide", x: 16, y: 30 },
      makerFn: { label: "fn", kind: "object", x: 44, y: 30 },
      name: { label: "name", kind: "variable-wide", x: 28, y: 58 },
      ada: { label: '"Ada"', kind: "string", x: 58, y: 58 },
      arrowFn: { label: "fn", kind: "object", x: 78, y: 42 },
      greet: { label: "greet", kind: "variable-wide", x: 28, y: 82 },
    },
    steps: [
      {
        title: "Create makeGreeter",
        description: "makeGreeter points to a function value.",
        line: 0,
        visible: ["makeGreeter", "makerFn"],
        wires: [{ id: "makeGreeter-makerFn", from: "makeGreeter", to: "makerFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["makeGreeter", "makerFn"],
      },
      {
        title: "Create a local name",
        description:
          'Calling makeGreeter creates a local variable name pointing to "Ada".',
        line: 1,
        visible: ["makeGreeter", "makerFn", "name", "ada"],
        wires: [
          { id: "makeGreeter-makerFn", from: "makeGreeter", to: "makerFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "name", to: "ada", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["name", "ada"],
      },
      {
        title: "Return an arrow function",
        description:
          "The arrow function closes over name. It can read name later without needing its own this.",
        line: 2,
        visible: ["makeGreeter", "makerFn", "name", "ada", "arrowFn"],
        wires: [
          { id: "makeGreeter-makerFn", from: "makeGreeter", to: "makerFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "name", to: "ada", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "arrow-name", from: "arrowFn", to: "name", label: "closes over", tone: "orange", fromAnchor: { side: "left" }, toAnchor: { side: "right", offset: 12 } },
        ],
        active: ["arrowFn", "name"],
      },
      {
        title: "Store and call greet",
        description:
          'greet points to the returned arrow function. Calling greet() reads the closed-over name and returns "Ada".',
        line: 5,
        visible: ["name", "ada", "arrowFn", "greet"],
        wires: [
          { id: "name-ada", from: "name", to: "ada", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "greet-arrow", from: "greet", to: "arrowFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "arrow-name", from: "arrowFn", to: "name", label: "closure", tone: "slate", fromAnchor: { side: "left" }, toAnchor: { side: "right", offset: 12 } },
        ],
        active: ["greet", "arrowFn", "ada"],
      },
    ],
    quiz: {
      prompt: "Does an arrow function create its own this?",
      options: ["No", "Yes", "Only in objects"],
      answer: "No",
      correct: "Correct. Arrow functions use this from the surrounding scope.",
      wrong: "Not quite. Arrow functions do not receive their own this from the call.",
    },
  },
  {
    id: "callbacks",
    number: "Chapter 20",
    title: "Callbacks",
    universeTitle: "Callbacks are functions passed as values",
    intro:
      "A callback is a function value you pass to another function so it can be called later.",
    code: [
      "function run(callback) {",
      "  callback();",
      "}",
      'function logReady() { return "Ready"; }',
      "run(logReady);",
    ],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      run: { label: "run", kind: "variable-wide", x: 14, y: 34 },
      runFn: { label: "fn", kind: "object", x: 38, y: 34 },
      logReady: { label: "logReady", kind: "variable-wide", x: 14, y: 60 },
      callbackFn: { label: "fn", kind: "object", x: 38, y: 60 },
      callback: { label: "callback", kind: "variable-wide", x: 58, y: 74 },
      ready: { label: '"Ready"', kind: "string", x: 82, y: 74 },
    },
    steps: [
      {
        title: "Create two functions",
        description:
          "run and logReady are variables pointing to function values.",
        line: 0,
        visible: ["run", "runFn", "logReady", "callbackFn"],
        wires: [
          { id: "run-runFn", from: "run", to: "runFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "logReady-callbackFn", from: "logReady", to: "callbackFn", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["runFn", "callbackFn"],
      },
      {
        title: "Pass logReady into run",
        description:
          "run(logReady) evaluates logReady to its function value, then passes that value as an argument.",
        line: 4,
        visible: ["run", "runFn", "logReady", "callbackFn"],
        wires: [
          { id: "run-runFn", from: "run", to: "runFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "logReady-callbackFn", from: "logReady", to: "callbackFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["logReady", "callbackFn"],
      },
      {
        title: "callback points to the function",
        description:
          "Inside run, the parameter callback points to the same function value as logReady.",
        line: 0,
        visible: ["run", "runFn", "logReady", "callbackFn", "callback"],
        wires: [
          { id: "run-runFn", from: "run", to: "runFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "logReady-callbackFn", from: "logReady", to: "callbackFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "callback-callbackFn", from: "callback", to: "callbackFn", tone: "orange", fromAnchor: { side: "left" }, toAnchor: { side: "right" } },
        ],
        active: ["callback", "callbackFn"],
      },
      {
        title: "run calls callback",
        description:
          'callback() calls the function value and returns "Ready". The important part is that functions can move through variables.',
        line: 1,
        visible: ["logReady", "callbackFn", "callback", "ready"],
        wires: [
          { id: "logReady-callbackFn", from: "logReady", to: "callbackFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "callback-callbackFn", from: "callback", to: "callbackFn", tone: "slate", fromAnchor: { side: "left" }, toAnchor: { side: "right" } },
          { id: "callbackFn-ready", from: "callbackFn", to: "ready", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["callbackFn", "ready"],
      },
    ],
    quiz: {
      prompt: "What is a callback?",
      options: ["a function value", "a string", "an object property only"],
      answer: "a function value",
      correct: "Correct. A callback is a function value passed to be called later.",
      wrong: "Not quite. A callback is a function value used as an argument.",
    },
  },
  {
    id: "array-map",
    number: "Chapter 21",
    title: "Array map",
    universeTitle: "map creates a new array from returns",
    intro:
      "map calls a callback for each item and collects each returned value into a new array.",
    code: ["let numbers = [1, 2];", "let doubled = numbers.map(n => n * 2);"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      numbers: { label: "numbers", kind: "variable-wide", x: 16, y: 34 },
      sourceArray: { label: "[ ]", kind: "object", x: 42, y: 34 },
      one: { label: "1", kind: "value", x: 66, y: 24 },
      two: { label: "2", kind: "value", x: 66, y: 44 },
      callback: { label: "fn", kind: "object", x: 42, y: 66 },
      doubled: { label: "doubled", kind: "variable-wide", x: 16, y: 82 },
      newArray: { label: "[ ]", kind: "object", x: 42, y: 82 },
      twoResult: { label: "2", kind: "value", x: 72, y: 72 },
      fourResult: { label: "4", kind: "value", x: 72, y: 88 },
    },
    steps: [
      {
        title: "Start with numbers",
        description:
          "numbers points to an array with two entries: 1 and 2.",
        line: 0,
        visible: ["numbers", "sourceArray", "one", "two"],
        wires: [
          { id: "numbers-source", from: "numbers", to: "sourceArray", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-one", from: "sourceArray", to: "one", label: "0", tone: "cyan", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "source-two", from: "sourceArray", to: "two", label: "1", tone: "cyan", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["numbers", "sourceArray"],
      },
      {
        title: "Create the callback",
        description:
          "n => n * 2 is a function value. map will call it once for each array entry.",
        line: 1,
        visible: ["numbers", "sourceArray", "one", "two", "callback"],
        wires: [
          { id: "numbers-source", from: "numbers", to: "sourceArray", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-one", from: "sourceArray", to: "one", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "source-two", from: "sourceArray", to: "two", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["callback"],
      },
      {
        title: "map creates a new array",
        description:
          "map does not change the original array. It prepares a new array for the returned values.",
        line: 1,
        visible: ["numbers", "sourceArray", "one", "two", "callback", "doubled", "newArray"],
        wires: [
          { id: "numbers-source", from: "numbers", to: "sourceArray", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "doubled-newArray", from: "doubled", to: "newArray", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["doubled", "newArray"],
      },
      {
        title: "Collect returned values",
        description:
          "The callback returns 2 for the first item and 4 for the second. The new array gets wires to those returned values.",
        line: 1,
        visible: ["numbers", "sourceArray", "one", "two", "callback", "doubled", "newArray", "twoResult", "fourResult"],
        wires: [
          { id: "numbers-source", from: "numbers", to: "sourceArray", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "source-one", from: "sourceArray", to: "one", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "source-two", from: "sourceArray", to: "two", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
          { id: "doubled-newArray", from: "doubled", to: "newArray", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "newArray-twoResult", from: "newArray", to: "twoResult", label: "0", tone: "orange", fromAnchor: { side: "right", offset: -12 }, toAnchor: { side: "left" } },
          { id: "newArray-fourResult", from: "newArray", to: "fourResult", label: "1", tone: "orange", fromAnchor: { side: "right", offset: 12 }, toAnchor: { side: "left" } },
        ],
        active: ["newArray", "twoResult", "fourResult"],
      },
    ],
    quiz: {
      prompt: "Does map mutate the original numbers array?",
      options: ["No", "Yes", "Only the first item"],
      answer: "No",
      correct: "Correct. map creates a new array for the returned values.",
      wrong: "Not quite. map leaves the original array alone and returns a new one.",
    },
  },
  {
    id: "promises",
    number: "Chapter 22",
    title: "Promises",
    universeTitle: "Promises hold future results",
    intro:
      "A Promise is an object that represents a value you do not have yet. then registers a callback for the future result.",
    code: [
      "let promise = fetchUser();",
      "promise.then(user => user.name);",
      '// later: { name: "Ada" }',
    ],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      promiseVar: { label: "promise", kind: "variable-wide", x: 16, y: 38 },
      promiseObj: { label: "P", kind: "object", x: 44, y: 38 },
      callback: { label: "fn", kind: "object", x: 44, y: 68 },
      userObj: { label: "{ }", kind: "object", x: 70, y: 42 },
      ada: { label: '"Ada"', kind: "string", x: 88, y: 42 },
      nameResult: { label: '"Ada"', kind: "string", x: 70, y: 78 },
    },
    steps: [
      {
        title: "Create a Promise",
        description:
          "fetchUser() returns a Promise object. promise points to that object before the user value exists.",
        line: 0,
        visible: ["promiseVar", "promiseObj"],
        wires: [{ id: "promise-promiseObj", from: "promiseVar", to: "promiseObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } }],
        active: ["promiseVar", "promiseObj"],
      },
      {
        title: "Register a callback",
        description:
          "then stores a callback to run later. The callback is a function value waiting for the future user.",
        line: 1,
        visible: ["promiseVar", "promiseObj", "callback"],
        wires: [
          { id: "promise-promiseObj", from: "promiseVar", to: "promiseObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "promise-callback", from: "promiseObj", to: "callback", label: "then", tone: "orange", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
        ],
        active: ["promiseObj", "callback"],
      },
      {
        title: "The Promise resolves",
        description:
          'Later, the Promise receives a user object. That object has name pointing to "Ada".',
        line: 2,
        visible: ["promiseVar", "promiseObj", "callback", "userObj", "ada"],
        wires: [
          { id: "promise-promiseObj", from: "promiseVar", to: "promiseObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "promise-callback", from: "promiseObj", to: "callback", label: "then", tone: "slate", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
          { id: "user-name", from: "userObj", to: "ada", label: "name", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["promiseObj", "userObj"],
      },
      {
        title: "The callback receives user",
        description:
          'The then callback runs with the resolved user value and returns user.name, which is "Ada".',
        line: 1,
        visible: ["promiseObj", "callback", "userObj", "ada", "nameResult"],
        wires: [
          { id: "promise-callback", from: "promiseObj", to: "callback", label: "calls", tone: "slate", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
          { id: "callback-user", from: "callback", to: "userObj", label: "user", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "user-name", from: "userObj", to: "ada", label: "name", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "callback-result", from: "callback", to: "nameResult", label: "returns", tone: "orange", fromAnchor: { side: "bottom" }, toAnchor: { side: "left" } },
        ],
        active: ["callback", "nameResult"],
      },
    ],
    quiz: {
      prompt: "What does then receive?",
      options: ["a callback", "the final string first", "a variable name"],
      answer: "a callback",
      correct: "Correct. then receives a callback function to run when the Promise resolves.",
      wrong: "Not quite. then is given a callback that runs later with the resolved value.",
    },
  },
  {
    id: "async-await",
    number: "Chapter 23",
    title: "async and await",
    universeTitle: "await pauses for a Promise result",
    intro:
      "async functions always return a Promise. Inside them, await pauses the function until another Promise resolves.",
    code: [
      "async function loadName() {",
      "  let user = await fetchUser();",
      "  return user.name;",
      "}",
    ],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      loadName: { label: "loadName", kind: "variable-wide", x: 14, y: 34 },
      asyncFn: { label: "fn", kind: "object", x: 40, y: 34 },
      fetchPromise: { label: "P", kind: "object", x: 40, y: 60 },
      user: { label: "user", kind: "variable-wide", x: 14, y: 76 },
      userObj: { label: "{ }", kind: "object", x: 40, y: 76 },
      ada: { label: '"Ada"', kind: "string", x: 70, y: 76 },
      outerPromise: { label: "P", kind: "object", x: 70, y: 34 },
    },
    steps: [
      {
        title: "Create an async function",
        description:
          "loadName points to an async function value. Calling it will create a Promise for its eventual return value.",
        line: 0,
        visible: ["loadName", "asyncFn"],
        wires: [
          { id: "loadName-asyncFn", from: "loadName", to: "asyncFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["loadName", "asyncFn"],
      },
      {
        title: "The async function returns a Promise",
        description:
          "Even before the body finishes, calling an async function gives the caller a Promise.",
        line: 0,
        visible: ["loadName", "asyncFn", "outerPromise"],
        wires: [
          { id: "loadName-asyncFn", from: "loadName", to: "asyncFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "asyncFn-outerPromise", from: "asyncFn", to: "outerPromise", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["asyncFn", "outerPromise"],
      },
      {
        title: "await waits for fetchUser",
        description:
          "fetchUser() returns a Promise. await waits until that Promise resolves before assigning user.",
        line: 1,
        visible: ["loadName", "asyncFn", "outerPromise", "fetchPromise"],
        wires: [
          { id: "loadName-asyncFn", from: "loadName", to: "asyncFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "asyncFn-outerPromise", from: "asyncFn", to: "outerPromise", label: "returns", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["fetchPromise"],
      },
      {
        title: "Store the resolved value",
        description:
          'When the Promise resolves, user points to the resolved object. The name property points to "Ada".',
        line: 1,
        visible: ["loadName", "asyncFn", "outerPromise", "user", "userObj", "ada"],
        wires: [
          { id: "loadName-asyncFn", from: "loadName", to: "asyncFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "asyncFn-outerPromise", from: "asyncFn", to: "outerPromise", label: "returns", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "cyan", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["user", "userObj"],
      },
      {
        title: "Return user.name",
        description:
          'return user.name resolves the async function\'s outer Promise with "Ada".',
        line: 2,
        visible: ["loadName", "asyncFn", "outerPromise", "user", "userObj", "ada"],
        wires: [
          { id: "loadName-asyncFn", from: "loadName", to: "asyncFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "asyncFn-outerPromise", from: "asyncFn", to: "outerPromise", label: "resolves", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["outerPromise", "ada"],
      },
    ],
    quiz: {
      prompt: "What does an async function return immediately?",
      options: ["a Promise", "undefined", "the final value only"],
      answer: "a Promise",
      correct: "Correct. async functions return a Promise immediately.",
      wrong: "Not quite. The final value arrives later by resolving the returned Promise.",
    },
  },
  {
    id: "try-catch",
    number: "Chapter 24",
    title: "try and catch",
    universeTitle: "catch handles thrown errors",
    intro:
      "try/catch lets you run code that might fail and then handle the error value in a separate block.",
    code: ['let message = "";', "try {", "  JSON.parse('bad');", "} catch (error) {", '  message = "Invalid JSON";', "}"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      parseFn: { label: "JSON.parse", kind: "variable-wide", x: 18, y: 36 },
      errorValue: { label: "SyntaxError", kind: "string", x: 58, y: 36 },
      error: { label: "error", kind: "variable-wide", x: 18, y: 66 },
      message: { label: "message", kind: "variable-wide", x: 18, y: 84 },
      empty: { label: '""', kind: "string", x: 62, y: 84 },
      invalid: { label: '"Invalid JSON"', kind: "string", x: 62, y: 84 },
    },
    steps: [
      {
        title: "Create message",
        description:
          'message starts by pointing to an empty string. The catch block can move this wire if parsing fails.',
        line: 0,
        visible: ["message", "empty"],
        wires: [
          { id: "message-empty", from: "message", to: "empty", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["message", "empty"],
      },
      {
        title: "Enter try",
        description:
          "JavaScript starts the try block. Code inside might finish normally or throw an error.",
        line: 1,
        visible: ["message", "empty", "parseFn"],
        wires: [
          { id: "message-empty", from: "message", to: "empty", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["parseFn"],
      },
      {
        title: "JSON.parse throws",
        description:
          "Parsing bad JSON does not return a normal value. It throws a SyntaxError value.",
        line: 2,
        visible: ["message", "empty", "parseFn", "errorValue"],
        wires: [
          { id: "message-empty", from: "message", to: "empty", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "parse-error", from: "parseFn", to: "errorValue", label: "throws", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["errorValue"],
      },
      {
        title: "catch receives the error",
        description:
          "The catch block creates an error variable and points it to the thrown error value.",
        line: 3,
        visible: ["message", "empty", "parseFn", "errorValue", "error"],
        wires: [
          { id: "message-empty", from: "message", to: "empty", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "error-errorValue", from: "error", to: "errorValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["error", "errorValue"],
      },
      {
        title: "Handle the error",
        description:
          'The catch block can recover by reassigning message to "Invalid JSON".',
        line: 4,
        visible: ["errorValue", "error", "message", "invalid"],
        wires: [
          { id: "error-errorValue", from: "error", to: "errorValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
          { id: "message-invalid", from: "message", to: "invalid", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["message", "invalid"],
      },
    ],
    quiz: {
      prompt: "What does catch receive?",
      options: ["the thrown error", "the original string", "nothing"],
      answer: "the thrown error",
      correct: "Correct. catch receives the value that was thrown.",
      wrong: "Not quite. catch gets the thrown error so you can handle it.",
    },
  },
  {
    id: "dom-selection",
    number: "Chapter 25",
    title: "DOM Selection",
    universeTitle: "The DOM is an object graph",
    intro:
      "In the browser, the page is represented by DOM objects. querySelector finds one object, or returns null when nothing matches.",
    code: ['let button = document.querySelector("button");', "if (button) {", '  button.textContent = "Save";', "}"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      documentVar: { label: "document", kind: "variable-wide", x: 16, y: 36 },
      documentObj: { label: "{ }", kind: "object", x: 42, y: 36 },
      button: { label: "button", kind: "variable-wide", x: 16, y: 66 },
      buttonObj: { label: "el", kind: "object", x: 44, y: 66 },
      save: { label: '"Save"', kind: "string", x: 74, y: 66 },
    },
    steps: [
      {
        title: "document points to the page",
        description:
          "The browser gives JavaScript a document variable that points to the page's DOM object.",
        line: 0,
        visible: ["documentVar", "documentObj"],
        wires: [
          { id: "document-documentObj", from: "documentVar", to: "documentObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["documentVar", "documentObj"],
      },
      {
        title: "querySelector finds an element",
        description:
          "document.querySelector(\"button\") returns a DOM element object when a matching button exists. If not, it returns null.",
        line: 0,
        visible: ["documentVar", "documentObj", "buttonObj"],
        wires: [
          { id: "document-documentObj", from: "documentVar", to: "documentObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "document-buttonObj", from: "documentObj", to: "buttonObj", label: "finds", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["buttonObj"],
      },
      {
        title: "button points to the element",
        description:
          "In this page, button points to the DOM object returned by querySelector, so the if check can run its body.",
        line: 0,
        visible: ["documentVar", "documentObj", "button", "buttonObj"],
        wires: [
          { id: "document-documentObj", from: "documentVar", to: "documentObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "button-buttonObj", from: "button", to: "buttonObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["button", "buttonObj"],
      },
      {
        title: "Change a DOM property",
        description:
          'button.textContent = "Save" mutates the DOM object by moving its textContent property wire.',
        line: 2,
        visible: ["button", "buttonObj", "save"],
        wires: [
          { id: "button-buttonObj", from: "button", to: "buttonObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "buttonObj-save", from: "buttonObj", to: "save", label: "textContent", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["buttonObj", "save"],
      },
    ],
    quiz: {
      prompt: "What can querySelector return?",
      options: ["an element or null", "text only", "a CSS file"],
      answer: "an element or null",
      correct: "Correct. It returns the first matching element, or null if nothing matches.",
      wrong: "Not quite. querySelector can return null, so real code should handle that case.",
    },
  },
  {
    id: "event-listeners",
    number: "Chapter 26",
    title: "Event Listeners",
    universeTitle: "Events call callbacks later",
    intro:
      "addEventListener stores a callback on a DOM object. The browser calls that callback later when the event happens.",
    code: [
      'let button = document.querySelector("button");',
      "let count = 0;",
      "if (button) {",
      "  button.addEventListener('click', () => {",
      "    count = count + 1;",
      "  });",
      "}",
    ],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      button: { label: "button", kind: "variable-wide", x: 16, y: 34 },
      buttonObj: { label: "el", kind: "object", x: 44, y: 34 },
      callback: { label: "fn", kind: "object", x: 70, y: 34 },
      click: { label: '"click"', kind: "string", x: 70, y: 18 },
      count: { label: "count", kind: "variable-wide", x: 16, y: 72 },
      zero: { label: "0", kind: "value", x: 44, y: 86 },
      one: { label: "1", kind: "value", x: 70, y: 72 },
    },
    steps: [
      {
        title: "button points to a DOM object",
        description:
          "querySelector returns a DOM element object in this page. If no button matched, button would point to null.",
        line: 0,
        visible: ["button", "buttonObj"],
        wires: [
          { id: "button-buttonObj", from: "button", to: "buttonObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["button", "buttonObj"],
      },
      {
        title: "count starts at 0",
        description:
          "count points to 0 before any click happens. The listener will move this wire later.",
        line: 1,
        visible: ["button", "buttonObj", "count", "zero"],
        wires: [
          { id: "button-buttonObj", from: "button", to: "buttonObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "count-zero", from: "count", to: "zero", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["count", "zero"],
      },
      {
        title: "Store a callback for click",
        description:
          "The if check makes sure there is an element first. addEventListener then stores the function value with the button for the click event.",
        line: 3,
        visible: ["button", "buttonObj", "callback", "click", "count", "zero"],
        wires: [
          { id: "button-buttonObj", from: "button", to: "buttonObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "count-zero", from: "count", to: "zero", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "buttonObj-click", from: "buttonObj", to: "click", label: "event", tone: "slate", fromAnchor: { side: "right", offset: -14 }, toAnchor: { side: "left" } },
          { id: "buttonObj-callback", from: "buttonObj", to: "callback", label: "listener", tone: "orange", fromAnchor: { side: "right", offset: 14 }, toAnchor: { side: "left" } },
        ],
        active: ["buttonObj", "callback"],
      },
      {
        title: "Click calls the callback",
        description:
          "When the user clicks, the browser calls the stored callback.",
        line: 4,
        visible: ["button", "buttonObj", "callback", "count", "zero"],
        wires: [
          { id: "button-buttonObj", from: "button", to: "buttonObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "buttonObj-callback", from: "buttonObj", to: "callback", label: "calls", tone: "orange", fromAnchor: { side: "right", offset: 14 }, toAnchor: { side: "left" } },
          { id: "count-zero", from: "count", to: "zero", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["callback"],
      },
      {
        title: "The callback updates count",
        description:
          "Inside the callback, count + 1 creates 1, then count's wire moves from 0 to 1.",
        line: 4,
        visible: ["button", "buttonObj", "callback", "count", "zero", "one"],
        wires: [
          { id: "button-buttonObj", from: "button", to: "buttonObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "buttonObj-callback", from: "buttonObj", to: "callback", label: "calls", tone: "orange", fromAnchor: { side: "right", offset: 14 }, toAnchor: { side: "left" } },
          { id: "count-one", from: "count", to: "one", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["callback", "count", "one"],
      },
    ],
    quiz: {
      prompt: "When does the event listener callback run?",
      options: ["on click", "immediately only", "never"],
      answer: "on click",
      correct: "Correct. The browser calls the stored callback when the click event happens.",
      wrong: "Not quite. addEventListener stores the callback for a future event.",
    },
  },
  {
    id: "forms-and-inputs",
    number: "Chapter 27",
    title: "Forms and Inputs",
    universeTitle: "Input values are strings on DOM objects",
    intro:
      "Form controls are DOM objects too. When an input exists, reading input.value gives you the current string stored on that element.",
    code: ['let input = document.querySelector("input");', 'let name = input ? input.value : "";', 'let greeting = "Hi, " + name;'],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      input: { label: "input", kind: "variable-wide", x: 15, y: 36 },
      inputEl: { label: "el", kind: "object", x: 42, y: 36 },
      ada: { label: '"Ada"', kind: "string", x: 70, y: 36 },
      name: { label: "name", kind: "variable-wide", x: 15, y: 68 },
      greeting: { label: "greeting", kind: "variable-wide", x: 15, y: 88 },
      hiAda: { label: '"Hi, Ada"', kind: "string", x: 70, y: 88 },
    },
    steps: [
      {
        title: "Find the input element",
        description:
          "querySelector returns the input DOM object in this page. If no input matched, input would point to null.",
        line: 0,
        visible: ["input", "inputEl"],
        wires: [
          { id: "input-inputEl", from: "input", to: "inputEl", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["input", "inputEl"],
      },
      {
        title: "The element has a value property",
        description:
          'The DOM object has a value property. For form inputs, that property is usually a string like "Ada".',
        line: 1,
        visible: ["input", "inputEl", "ada"],
        wires: [
          { id: "input-inputEl", from: "input", to: "inputEl", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "inputEl-ada", from: "inputEl", to: "ada", label: "value", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["inputEl", "ada"],
      },
      {
        title: "Store the input value",
        description:
          'The ternary checks input first. Because the input exists here, JavaScript reads input.value and name points to "Ada".',
        line: 1,
        visible: ["input", "inputEl", "ada", "name"],
        wires: [
          { id: "input-inputEl", from: "input", to: "inputEl", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "inputEl-ada", from: "inputEl", to: "ada", label: "value", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "name", to: "ada", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["name", "ada"],
      },
      {
        title: "Build a greeting string",
        description:
          'String concatenation creates a new string value. greeting points to "Hi, Ada".',
        line: 2,
        visible: ["inputEl", "ada", "name", "greeting", "hiAda"],
        wires: [
          { id: "inputEl-ada", from: "inputEl", to: "ada", label: "value", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "name-ada", from: "name", to: "ada", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
          { id: "greeting-hiAda", from: "greeting", to: "hiAda", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["greeting", "hiAda"],
      },
    ],
    quiz: {
      prompt: "What type of value does input.value usually give you?",
      options: ["a string", "a number automatically", "a CSS selector"],
      answer: "a string",
      correct: "Correct. Form input values are strings unless you convert them.",
      wrong: "Not quite. Even if the user types digits, input.value is usually a string.",
    },
  },
  {
    id: "fetch-and-json",
    number: "Chapter 28",
    title: "Fetch and JSON",
    universeTitle: "Network data arrives through Promises",
    intro:
      "fetch starts a network request and gives you a Promise. response.json() gives another Promise for parsed JavaScript data.",
    code: ["let response = await fetch('/user.json');", "let user = await response.json();", "user.name;"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      fetchCall: { label: "fetch()", kind: "variable-wide", x: 16, y: 32 },
      responsePromise: { label: "P", kind: "object", x: 42, y: 32 },
      response: { label: "response", kind: "variable-wide", x: 16, y: 56 },
      responseObj: { label: "{ }", kind: "object", x: 42, y: 56 },
      jsonPromise: { label: "P", kind: "object", x: 68, y: 56 },
      user: { label: "user", kind: "variable-wide", x: 16, y: 82 },
      userObj: { label: "{ }", kind: "object", x: 42, y: 82 },
      ada: { label: '"Ada"', kind: "string", x: 70, y: 82 },
    },
    steps: [
      {
        title: "fetch creates a Promise",
        description:
          "fetch('/user.json') starts work outside your code and immediately produces a Promise.",
        line: 0,
        visible: ["fetchCall", "responsePromise"],
        wires: [
          { id: "fetch-responsePromise", from: "fetchCall", to: "responsePromise", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["fetchCall", "responsePromise"],
      },
      {
        title: "await gives a Response object",
        description:
          "When the fetch Promise resolves, response points to a Response object.",
        line: 0,
        visible: ["responsePromise", "response", "responseObj"],
        wires: [
          { id: "response-responseObj", from: "response", to: "responseObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["response", "responseObj"],
      },
      {
        title: "json creates another Promise",
        description:
          "response.json() reads and parses the body. That parse result arrives through another Promise.",
        line: 1,
        visible: ["response", "responseObj", "jsonPromise"],
        wires: [
          { id: "response-responseObj", from: "response", to: "responseObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "responseObj-jsonPromise", from: "responseObj", to: "jsonPromise", label: "json()", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["responseObj", "jsonPromise"],
      },
      {
        title: "Parsed JSON becomes objects",
        description:
          'After await response.json(), user points to ordinary JavaScript data. Here, name points to "Ada".',
        line: 1,
        visible: ["user", "userObj", "ada"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["user", "userObj", "ada"],
      },
    ],
    quiz: {
      prompt: "What does response.json() give you before await resolves it?",
      options: ["a Promise", "the parsed object immediately", "a DOM node"],
      answer: "a Promise",
      correct: "Correct. response.json() returns a Promise for parsed data.",
      wrong: "Not quite. You await response.json() because it returns a Promise.",
    },
  },
  {
    id: "local-storage",
    number: "Chapter 29",
    title: "localStorage",
    universeTitle: "Browser storage keeps strings",
    intro:
      "localStorage stores values in the browser, but it only stores strings. Objects must be turned into JSON strings first.",
    code: ['let settings = { theme: "dark" };', 'localStorage.setItem("settings", JSON.stringify(settings));', 'let saved = localStorage.getItem("settings");'],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      settings: { label: "settings", kind: "variable-wide", x: 16, y: 34 },
      settingsObj: { label: "{ }", kind: "object", x: 42, y: 34 },
      dark: { label: '"dark"', kind: "string", x: 70, y: 34 },
      jsonText: { label: '"{...}"', kind: "string", x: 42, y: 62 },
      storage: { label: "LS", kind: "object", x: 70, y: 62 },
      saved: { label: "saved", kind: "variable-wide", x: 16, y: 86 },
    },
    steps: [
      {
        title: "Create settings object",
        description:
          'settings points to an object. Its theme property points to the string "dark".',
        line: 0,
        visible: ["settings", "settingsObj", "dark"],
        wires: [
          { id: "settings-settingsObj", from: "settings", to: "settingsObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "settingsObj-dark", from: "settingsObj", to: "dark", label: "theme", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["settings", "settingsObj", "dark"],
      },
      {
        title: "Stringify the object",
        description:
          "JSON.stringify reads the object and creates a new string value that can be stored.",
        line: 1,
        visible: ["settings", "settingsObj", "dark", "jsonText"],
        wires: [
          { id: "settings-settingsObj", from: "settings", to: "settingsObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "settingsObj-dark", from: "settingsObj", to: "dark", label: "theme", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "settingsObj-jsonText", from: "settingsObj", to: "jsonText", label: "stringify", tone: "orange", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
        ],
        active: ["jsonText"],
      },
      {
        title: "Store the string",
        description:
          "setItem stores the string under a key. The LS object represents localStorage.",
        line: 1,
        visible: ["jsonText", "storage"],
        wires: [
          { id: "storage-jsonText", from: "storage", to: "jsonText", label: "settings", tone: "orange", fromAnchor: { side: "left" }, toAnchor: { side: "right" } },
        ],
        active: ["storage", "jsonText"],
      },
      {
        title: "Read the stored string",
        description:
          "getItem returns the stored string. You would use JSON.parse to turn it back into an object.",
        line: 2,
        visible: ["jsonText", "storage", "saved"],
        wires: [
          { id: "storage-jsonText", from: "storage", to: "jsonText", label: "settings", tone: "slate", fromAnchor: { side: "left" }, toAnchor: { side: "right" } },
          { id: "saved-jsonText", from: "saved", to: "jsonText", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["saved", "jsonText"],
      },
    ],
    quiz: {
      prompt: "What kind of values does localStorage store?",
      options: ["strings", "live objects", "functions"],
      answer: "strings",
      correct: "Correct. localStorage stores strings.",
      wrong: "Not quite. You stringify objects because localStorage stores strings.",
    },
  },
  {
    id: "modules",
    number: "Chapter 30",
    title: "Modules",
    universeTitle: "Modules share exported values",
    intro:
      "Modules let one file export a value and another file import a live binding to that exported value.",
    code: ["// counter.js", "export let count = 0;", "// app.js", 'import { count } from "./counter.js";'],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      counterFile: { label: "counter.js", kind: "variable-wide", x: 18, y: 34 },
      exportedCount: { label: "count", kind: "variable-wide", x: 44, y: 34 },
      zero: { label: "0", kind: "value", x: 70, y: 34 },
      appFile: { label: "app.js", kind: "variable-wide", x: 18, y: 72 },
      importedCount: { label: "count", kind: "variable-wide", x: 44, y: 72 },
    },
    steps: [
      {
        title: "Create module scope",
        description:
          "Each module file gets its own top-level scope. counter.js is separate from app.js.",
        line: 0,
        visible: ["counterFile", "appFile"],
        wires: [],
        active: ["counterFile", "appFile"],
      },
      {
        title: "Export a binding",
        description:
          "counter.js creates count and exports that binding. count points to 0.",
        line: 1,
        visible: ["counterFile", "exportedCount", "zero"],
        wires: [
          { id: "counter-exportedCount", from: "counterFile", to: "exportedCount", label: "exports", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "exportedCount-zero", from: "exportedCount", to: "zero", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["exportedCount", "zero"],
      },
      {
        title: "Import the exported binding",
        description:
          "app.js imports count. It can read the exported binding instead of receiving a separate copied variable.",
        line: 3,
        visible: ["counterFile", "exportedCount", "zero", "appFile", "importedCount"],
        wires: [
          { id: "counter-exportedCount", from: "counterFile", to: "exportedCount", label: "exports", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "exportedCount-zero", from: "exportedCount", to: "zero", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "app-importedCount", from: "appFile", to: "importedCount", label: "imports", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "import-exported", from: "importedCount", to: "exportedCount", label: "live", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["importedCount", "exportedCount"],
      },
      {
        title: "Both names see the same value",
        description:
          "The imported name reads through the exported binding, which still points to 0.",
        line: 3,
        visible: ["exportedCount", "zero", "importedCount"],
        wires: [
          { id: "exportedCount-zero", from: "exportedCount", to: "zero", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "import-exported", from: "importedCount", to: "exportedCount", label: "live", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["importedCount", "zero"],
      },
    ],
    quiz: {
      prompt: "What does an import connect to?",
      options: ["an exported binding", "a screenshot of a value", "a CSS rule"],
      answer: "an exported binding",
      correct: "Correct. Named imports connect to exported module bindings.",
      wrong: "Not quite. Imports read exported bindings from another module.",
    },
  },
  {
    id: "classes-and-instances",
    number: "Chapter 31",
    title: "Classes and Instances",
    universeTitle: "new creates objects linked to methods",
    intro:
      "A class is a function-like value used with new. Calling new creates an instance object whose prototype links to shared methods.",
    code: ["class User {", "  greet() { return this.name; }", "}", 'let ada = new User("Ada");'],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      User: { label: "User", kind: "variable-wide", x: 16, y: 34 },
      classFn: { label: "Cls", kind: "object", x: 42, y: 34 },
      proto: { label: "P", kind: "object", x: 70, y: 34 },
      greet: { label: "greet", kind: "variable-wide", x: 70, y: 56 },
      adaVar: { label: "ada", kind: "variable-wide", x: 16, y: 82 },
      adaObj: { label: "{ }", kind: "object", x: 42, y: 82 },
      adaName: { label: '"Ada"', kind: "string", x: 70, y: 82 },
    },
    steps: [
      {
        title: "Class name points to a class value",
        description:
          "A class declaration creates a binding. User points to the class value.",
        line: 0,
        visible: ["User", "classFn"],
        wires: [
          { id: "User-classFn", from: "User", to: "classFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["User", "classFn"],
      },
      {
        title: "Methods live on the prototype",
        description:
          "The greet method is shared through the class prototype, not copied into every instance.",
        line: 1,
        visible: ["User", "classFn", "proto", "greet"],
        wires: [
          { id: "User-classFn", from: "User", to: "classFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "classFn-proto", from: "classFn", to: "proto", label: "prototype", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "proto-greet", from: "proto", to: "greet", label: "greet", tone: "orange", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
        ],
        active: ["proto", "greet"],
      },
      {
        title: "new creates an instance",
        description:
          "new User creates a new object. ada points to that instance object.",
        line: 3,
        visible: ["User", "classFn", "proto", "adaVar", "adaObj"],
        wires: [
          { id: "User-classFn", from: "User", to: "classFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "classFn-proto", from: "classFn", to: "proto", label: "prototype", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "adaVar-adaObj", from: "adaVar", to: "adaObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "adaObj-proto", from: "adaObj", to: "proto", label: "__proto__", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["adaVar", "adaObj"],
      },
      {
        title: "Instance stores its own data",
        description:
          'The instance can have its own name property while still sharing greet through the prototype.',
        line: 3,
        visible: ["proto", "greet", "adaVar", "adaObj", "adaName"],
        wires: [
          { id: "proto-greet", from: "proto", to: "greet", label: "greet", tone: "slate", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
          { id: "adaVar-adaObj", from: "adaVar", to: "adaObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "adaObj-proto", from: "adaObj", to: "proto", label: "__proto__", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
          { id: "adaObj-adaName", from: "adaObj", to: "adaName", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["adaObj", "adaName"],
      },
    ],
    quiz: {
      prompt: "Where are class methods usually shared from?",
      options: ["the prototype", "each variable box", "localStorage"],
      answer: "the prototype",
      correct: "Correct. Class methods are shared through the prototype.",
      wrong: "Not quite. Instances link to a prototype where shared methods live.",
    },
  },
  {
    id: "constructors",
    number: "Chapter 32",
    title: "Constructors",
    universeTitle: "constructor fills a new object",
    intro:
      "When you call a class with new, JavaScript creates a fresh object, binds this to it inside the constructor, and then returns that object.",
    code: ["class User {", "  constructor(name) {", "    this.name = name;", "  }", "}", 'let ada = new User("Ada");'],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      User: { label: "User", kind: "variable-wide", x: 16, y: 26 },
      classFn: { label: "Cls", kind: "object", x: 42, y: 26 },
      adaText: { label: '"Ada"', kind: "string", x: 42, y: 52 },
      nameParam: { label: "name", kind: "variable-wide", x: 16, y: 52 },
      thisBox: { label: "this", kind: "variable-wide", x: 16, y: 76 },
      instance: { label: "{ }", kind: "object", x: 42, y: 76 },
      adaVar: { label: "ada", kind: "variable-wide", x: 70, y: 76 },
    },
    steps: [
      {
        title: "Class binding exists",
        description:
          "User points to the class value. new User(...) will call that class's constructor.",
        line: 0,
        visible: ["User", "classFn"],
        wires: [
          { id: "User-classFn", from: "User", to: "classFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["User", "classFn"],
      },
      {
        title: "Argument becomes a parameter",
        description:
          'The argument "Ada" is evaluated first. Inside the constructor, name points to that string value.',
        line: 1,
        visible: ["User", "classFn", "adaText", "nameParam"],
        wires: [
          { id: "User-classFn", from: "User", to: "classFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "nameParam-adaText", from: "nameParam", to: "adaText", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["nameParam", "adaText"],
      },
      {
        title: "new creates this",
        description:
          "Before the constructor body runs, new creates a fresh object. this points to that object.",
        line: 2,
        visible: ["adaText", "nameParam", "thisBox", "instance"],
        wires: [
          { id: "nameParam-adaText", from: "nameParam", to: "adaText", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "thisBox-instance", from: "thisBox", to: "instance", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["thisBox", "instance"],
      },
      {
        title: "Assign an own property",
        description:
          "this.name = name creates or updates a name property on the new object. That property points to the same string as name.",
        line: 2,
        visible: ["adaText", "nameParam", "thisBox", "instance"],
        wires: [
          { id: "nameParam-adaText", from: "nameParam", to: "adaText", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "thisBox-instance", from: "thisBox", to: "instance", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "instance-adaText", from: "instance", to: "adaText", label: "name", tone: "orange", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" }, labelOffset: { x: 30, y: 0 } },
        ],
        active: ["instance", "adaText"],
      },
      {
        title: "ada receives the new object",
        description:
          "After the constructor finishes, new returns the object. ada points to that new instance.",
        line: 5,
        visible: ["adaText", "instance", "adaVar"],
        wires: [
          { id: "instance-adaText", from: "instance", to: "adaText", label: "name", tone: "slate", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" }, labelOffset: { x: 30, y: 0 } },
          { id: "adaVar-instance", from: "adaVar", to: "instance", tone: "orange", fromAnchor: { side: "left" }, toAnchor: { side: "right" } },
        ],
        active: ["adaVar", "instance"],
      },
    ],
    quiz: {
      prompt: "What does this point to inside a constructor called with new?",
      options: ["the new object", "the class name string", "localStorage"],
      answer: "the new object",
      correct: "Correct. new creates a fresh object and constructor this points to it.",
      wrong: "Not quite. In a constructor call, this is the newly created object.",
    },
  },
  {
    id: "inheritance",
    number: "Chapter 33",
    title: "Inheritance",
    universeTitle: "extends links prototypes",
    intro:
      "Inheritance lets one class reuse behavior from another. JavaScript does this by linking prototype objects.",
    code: ["class Admin extends User {", "  deletePost(post) {", "    post.remove();", "  }", "}", "let sam = new Admin();"],
    legend: ["variable", "object", "property", "wire"],
    nodes: {
      User: { label: "User", kind: "variable-wide", x: 16, y: 30 },
      userProto: { label: "P", kind: "object", x: 42, y: 30 },
      greet: { label: "greet", kind: "variable-wide", x: 70, y: 30 },
      Admin: { label: "Admin", kind: "variable-wide", x: 16, y: 58 },
      adminProto: { label: "P", kind: "object", x: 42, y: 58 },
      deletePost: { label: "deletePost", kind: "variable-wide", x: 72, y: 58 },
      sam: { label: "sam", kind: "variable-wide", x: 16, y: 84 },
      samObj: { label: "{ }", kind: "object", x: 42, y: 84 },
    },
    steps: [
      {
        title: "User has a prototype",
        description:
          "User's prototype holds shared methods such as greet.",
        line: 0,
        visible: ["User", "userProto", "greet"],
        wires: [
          { id: "User-userProto", from: "User", to: "userProto", label: "prototype", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userProto-greet", from: "userProto", to: "greet", label: "greet", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["userProto", "greet"],
      },
      {
        title: "Admin has its own prototype",
        description:
          "Admin gets its own prototype object with methods like deletePost.",
        line: 1,
        visible: ["User", "userProto", "Admin", "adminProto", "deletePost"],
        wires: [
          { id: "User-userProto", from: "User", to: "userProto", label: "prototype", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "Admin-adminProto", from: "Admin", to: "adminProto", label: "prototype", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "adminProto-deletePost", from: "adminProto", to: "deletePost", label: "deletePost", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["adminProto", "deletePost"],
      },
      {
        title: "extends links the prototypes",
        description:
          "Admin.prototype links to User.prototype. If a method is not found on Admin's prototype, lookup can continue to User's prototype.",
        line: 0,
        visible: ["userProto", "greet", "adminProto", "deletePost"],
        wires: [
          { id: "userProto-greet", from: "userProto", to: "greet", label: "greet", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "adminProto-deletePost", from: "adminProto", to: "deletePost", label: "deletePost", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "adminProto-userProto", from: "adminProto", to: "userProto", label: "__proto__", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["adminProto", "userProto"],
      },
      {
        title: "new Admin creates an instance",
        description:
          "sam points to a new Admin instance. The instance links to Admin.prototype, which links to User.prototype.",
        line: 5,
        visible: ["userProto", "adminProto", "sam", "samObj"],
        wires: [
          { id: "adminProto-userProto", from: "adminProto", to: "userProto", label: "__proto__", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
          { id: "sam-samObj", from: "sam", to: "samObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "samObj-adminProto", from: "samObj", to: "adminProto", label: "__proto__", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["sam", "samObj"],
      },
    ],
    quiz: {
      prompt: "What does extends mainly connect?",
      options: ["prototype objects", "two primitive strings", "CSS files"],
      answer: "prototype objects",
      correct: "Correct. extends sets up a prototype chain between classes.",
      wrong: "Not quite. In JavaScript, inheritance is prototype linkage.",
    },
  },
  {
    id: "async-errors",
    number: "Chapter 34",
    title: "Async Errors",
    universeTitle: "await can throw into catch",
    intro:
      "await unwraps a resolved Promise, but a rejected Promise behaves like a throw at that line. try/catch can handle it.",
    code: ['let status = "loading";', "try {", "  let user = await fetchUser();", "} catch (error) {", '  status = "Could not load";', "}"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      fetchPromise: { label: "P", kind: "object", x: 28, y: 36 },
      rejection: { label: "Error", kind: "string", x: 62, y: 36 },
      error: { label: "error", kind: "variable-wide", x: 28, y: 64 },
      status: { label: "status", kind: "variable-wide", x: 28, y: 78 },
      loading: { label: '"loading"', kind: "string", x: 66, y: 78 },
      failed: { label: '"Could not load"', kind: "string", x: 66, y: 78 },
    },
    steps: [
      {
        title: "Create a loading status",
        description:
          'status starts by pointing to "loading". If the async work fails, catch can move this wire to an error message.',
        line: 0,
        visible: ["status", "loading"],
        wires: [
          { id: "status-loading", from: "status", to: "loading", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["status", "loading"],
      },
      {
        title: "Start inside try",
        description:
          "The risky await runs inside a try block so failures can be handled.",
        line: 1,
        visible: ["status", "loading", "fetchPromise"],
        wires: [
          { id: "status-loading", from: "status", to: "loading", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["fetchPromise"],
      },
      {
        title: "The Promise rejects",
        description:
          "If fetchUser rejects, await does not give a normal user value. It throws the rejection reason.",
        line: 2,
        visible: ["status", "loading", "fetchPromise", "rejection"],
        wires: [
          { id: "status-loading", from: "status", to: "loading", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "fetchPromise-rejection", from: "fetchPromise", to: "rejection", label: "rejects", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["rejection"],
      },
      {
        title: "catch receives the reason",
        description:
          "The error parameter points to the rejected error value, just like catch with a normal throw.",
        line: 3,
        visible: ["status", "loading", "rejection", "error"],
        wires: [
          { id: "status-loading", from: "status", to: "loading", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "error-rejection", from: "error", to: "rejection", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["error", "rejection"],
      },
      {
        title: "Recover with a status value",
        description:
          'The catch block can set a useful fallback state. status moves from "loading" to "Could not load".',
        line: 4,
        visible: ["rejection", "error", "status", "failed"],
        wires: [
          { id: "error-rejection", from: "error", to: "rejection", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
          { id: "status-failed", from: "status", to: "failed", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["status", "failed"],
      },
    ],
    quiz: {
      prompt: "What happens when you await a rejected Promise inside try?",
      options: ["catch can receive it", "it becomes true", "the page reloads"],
      answer: "catch can receive it",
      correct: "Correct. A rejected awaited Promise throws into the catch block.",
      wrong: "Not quite. await turns rejection into a throw at that line.",
    },
  },
  {
    id: "rendering-from-data",
    number: "Chapter 35",
    title: "Rendering From Data",
    universeTitle: "Data can create DOM nodes",
    intro:
      "A common app pattern is to keep data in arrays and render DOM objects from that data.",
    code: ['let todos = ["Learn", "Build"];', "let nodes = todos.map(text => createItem(text));", "list.replaceChildren(...nodes);"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      todos: { label: "todos", kind: "variable-wide", x: 14, y: 30 },
      array: { label: "[ ]", kind: "object", x: 40, y: 30 },
      learn: { label: '"Learn"', kind: "string", x: 68, y: 22 },
      build: { label: '"Build"', kind: "string", x: 68, y: 38 },
      nodesVar: { label: "nodes", kind: "variable-wide", x: 14, y: 66 },
      nodeArray: { label: "[ ]", kind: "object", x: 40, y: 66 },
      li1: { label: "li", kind: "object", x: 68, y: 58 },
      li2: { label: "li", kind: "object", x: 68, y: 74 },
      list: { label: "list", kind: "variable-wide", x: 14, y: 90 },
      ul: { label: "ul", kind: "object", x: 40, y: 90 },
    },
    steps: [
      {
        title: "Start with data",
        description:
          "todos points to an array. The array points to string values.",
        line: 0,
        visible: ["todos", "array", "learn", "build"],
        wires: [
          { id: "todos-array", from: "todos", to: "array", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "array-learn", from: "array", to: "learn", label: "0", tone: "orange", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left" } },
          { id: "array-build", from: "array", to: "build", label: "1", tone: "orange", fromAnchor: { side: "right", offset: 10 }, toAnchor: { side: "left" } },
        ],
        active: ["todos", "array"],
      },
      {
        title: "Map data to DOM nodes",
        description:
          "map calls createItem for each string and creates a new array of DOM node objects.",
        line: 1,
        visible: ["array", "learn", "build", "nodesVar", "nodeArray", "li1", "li2"],
        wires: [
          { id: "nodesVar-nodeArray", from: "nodesVar", to: "nodeArray", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "nodeArray-li1", from: "nodeArray", to: "li1", label: "0", tone: "orange", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left" } },
          { id: "nodeArray-li2", from: "nodeArray", to: "li2", label: "1", tone: "orange", fromAnchor: { side: "right", offset: 10 }, toAnchor: { side: "left" } },
        ],
        active: ["nodesVar", "nodeArray"],
      },
      {
        title: "list points to the parent DOM node",
        description:
          "The list variable points to the DOM object that will contain the rendered items.",
        line: 2,
        visible: ["nodesVar", "nodeArray", "li1", "li2", "list", "ul"],
        wires: [
          { id: "nodesVar-nodeArray", from: "nodesVar", to: "nodeArray", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "nodeArray-li1", from: "nodeArray", to: "li1", label: "0", tone: "slate", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left" } },
          { id: "nodeArray-li2", from: "nodeArray", to: "li2", label: "1", tone: "slate", fromAnchor: { side: "right", offset: 10 }, toAnchor: { side: "left" } },
          { id: "list-ul", from: "list", to: "ul", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["list", "ul"],
      },
      {
        title: "Attach rendered nodes",
        description:
          "replaceChildren mutates the list DOM object so it points to the new child nodes.",
        line: 2,
        visible: ["li1", "li2", "list", "ul"],
        wires: [
          { id: "list-ul", from: "list", to: "ul", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "ul-li1", from: "ul", to: "li1", label: "child", tone: "orange", fromAnchor: { side: "right", offset: -10 }, toAnchor: { side: "left", offset: 8 }, labelOffset: { x: -18, y: -18 } },
          { id: "ul-li2", from: "ul", to: "li2", label: "child", tone: "orange", fromAnchor: { side: "right", offset: 10 }, toAnchor: { side: "left", offset: -8 }, labelOffset: { x: -14, y: 18 } },
        ],
        active: ["ul", "li1", "li2"],
      },
    ],
    quiz: {
      prompt: "What does map create in this render example?",
      options: ["a new array of nodes", "one changed string", "a prototype"],
      answer: "a new array of nodes",
      correct: "Correct. map returns a new array, here filled with DOM node objects.",
      wrong: "Not quite. map creates a new array from the callback results.",
    },
  },
  {
    id: "state-updates",
    number: "Chapter 36",
    title: "State Updates",
    universeTitle: "UI state often moves to new values",
    intro:
      "Interactive apps keep state in variables or object properties. Updating state usually means creating a new value and moving the wire.",
    code: ["let state = { count: 0 };", "let next = { ...state, count: state.count + 1 };", "state = next;"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      state: { label: "state", kind: "variable-wide", x: 14, y: 34 },
      oldObj: { label: "{ }", kind: "object", x: 40, y: 34 },
      zero: { label: "0", kind: "value", x: 68, y: 34 },
      next: { label: "next", kind: "variable-wide", x: 14, y: 72 },
      newObj: { label: "{ }", kind: "object", x: 40, y: 72 },
      one: { label: "1", kind: "value", x: 68, y: 72 },
    },
    steps: [
      {
        title: "state points to an object",
        description:
          "The state variable points to an object. Its count property points to 0.",
        line: 0,
        visible: ["state", "oldObj", "zero"],
        wires: [
          { id: "state-oldObj", from: "state", to: "oldObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "oldObj-zero", from: "oldObj", to: "zero", label: "count", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["state", "oldObj"],
      },
      {
        title: "Compute a new count",
        description:
          "state.count + 1 reads the old count and produces a new number value: 1.",
        line: 1,
        visible: ["state", "oldObj", "zero", "one"],
        wires: [
          { id: "state-oldObj", from: "state", to: "oldObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "oldObj-zero", from: "oldObj", to: "zero", label: "count", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["zero", "one"],
      },
      {
        title: "Create the next object",
        description:
          "The spread creates a new object. Its count property points to 1 while the old object still exists.",
        line: 1,
        visible: ["state", "oldObj", "zero", "next", "newObj", "one"],
        wires: [
          { id: "state-oldObj", from: "state", to: "oldObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "oldObj-zero", from: "oldObj", to: "zero", label: "count", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "next-newObj", from: "next", to: "newObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "newObj-one", from: "newObj", to: "one", label: "count", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["next", "newObj", "one"],
      },
      {
        title: "Move state to next",
        description:
          "state = next moves the state wire to the new object. The old object did not mutate.",
        line: 2,
        visible: ["state", "oldObj", "zero", "next", "newObj", "one"],
        wires: [
          { id: "oldObj-zero", from: "oldObj", to: "zero", label: "count", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "next-newObj", from: "next", to: "newObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "newObj-one", from: "newObj", to: "one", label: "count", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "state-newObj", from: "state", to: "newObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: -12 } },
        ],
        active: ["state", "newObj"],
      },
    ],
    quiz: {
      prompt: "In this pattern, what changes when state = next runs?",
      options: ["state's wire moves", "the old object becomes 1", "count becomes a class"],
      answer: "state's wire moves",
      correct: "Correct. state is reassigned to point at the new object.",
      wrong: "Not quite. The variable is reassigned; the old object is left alone.",
    },
  },
  {
    id: "pure-functions",
    number: "Chapter 37",
    title: "Pure Functions",
    universeTitle: "Pure functions return without changing outside state",
    intro:
      "Production code often uses small pure functions because they are easy to test: same inputs, same output, no hidden mutation.",
    code: ["function add(a, b) {", "  return a + b;", "}", "let total = add(2, 3);"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      addVar: { label: "add", kind: "variable-wide", x: 16, y: 30 },
      addFn: { label: "fn", kind: "object", x: 42, y: 30 },
      two: { label: "2", kind: "value", x: 28, y: 58 },
      three: { label: "3", kind: "value", x: 56, y: 58 },
      aParam: { label: "a", kind: "variable", x: 28, y: 78 },
      bParam: { label: "b", kind: "variable", x: 56, y: 78 },
      five: { label: "5", kind: "value", x: 70, y: 58 },
      total: { label: "total", kind: "variable-wide", x: 16, y: 90 },
    },
    steps: [
      {
        title: "Function is a value",
        description:
          "add points to a function value. The function does not run until it is called.",
        line: 0,
        visible: ["addVar", "addFn"],
        wires: [
          { id: "addVar-addFn", from: "addVar", to: "addFn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["addVar", "addFn"],
      },
      {
        title: "Arguments become parameters",
        description:
          "Calling add(2, 3) creates local parameter wires. a points to 2, and b points to 3.",
        line: 3,
        visible: ["addVar", "addFn", "two", "three", "aParam", "bParam"],
        wires: [
          { id: "addVar-addFn", from: "addVar", to: "addFn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "aParam-two", from: "aParam", to: "two", tone: "orange", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
          { id: "bParam-three", from: "bParam", to: "three", tone: "orange", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["aParam", "bParam"],
      },
      {
        title: "Return a new value",
        description:
          "a + b produces 5. A pure function returns a value without moving any outside wires.",
        line: 1,
        visible: ["two", "three", "aParam", "bParam", "five"],
        wires: [
          { id: "aParam-two", from: "aParam", to: "two", tone: "slate", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
          { id: "bParam-three", from: "bParam", to: "three", tone: "slate", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["five"],
      },
      {
        title: "Store the result",
        description:
          "total points to the returned value. Nothing else changed, which makes the function predictable.",
        line: 3,
        visible: ["total", "five"],
        wires: [
          { id: "total-five", from: "total", to: "five", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["total", "five"],
      },
    ],
    quiz: {
      prompt: "Why are pure functions useful in production?",
      options: ["predictable outputs", "they mutate globals", "they skip parameters"],
      answer: "predictable outputs",
      correct: "Correct. Pure functions are easier to test because the same inputs produce the same output.",
      wrong: "Not quite. Pure functions avoid hidden outside changes.",
    },
  },
  {
    id: "side-effects",
    number: "Chapter 38",
    title: "Side Effects",
    universeTitle: "Some functions intentionally change the outside world",
    intro:
      "A side effect is a change outside a function's local wires. Real apps need side effects, but production code tries to keep them obvious.",
    code: ['let status = "idle";', "function showLoading() {", '  status = "loading";', "}", "showLoading();"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      status: { label: "status", kind: "variable-wide", x: 16, y: 34 },
      idle: { label: '"idle"', kind: "string", x: 46, y: 48 },
      showLoading: { label: "showLoading", kind: "variable-wide", x: 16, y: 62 },
      fn: { label: "fn", kind: "object", x: 46, y: 62 },
      loading: { label: '"loading"', kind: "string", x: 74, y: 34 },
    },
    steps: [
      {
        title: "Start with outside state",
        description:
          'status is outside the function and points to "idle".',
        line: 0,
        visible: ["status", "idle"],
        wires: [
          { id: "status-idle", from: "status", to: "idle", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["status", "idle"],
      },
      {
        title: "Function can access the outside variable",
        description:
          "showLoading points to a function. That function closes over the status variable.",
        line: 1,
        visible: ["status", "idle", "showLoading", "fn"],
        wires: [
          { id: "status-idle", from: "status", to: "idle", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "showLoading-fn", from: "showLoading", to: "fn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["showLoading", "fn"],
      },
      {
        title: "Calling it moves an outside wire",
        description:
          'status = "loading" moves the status wire outside the function. That outside change is the side effect.',
        line: 4,
        visible: ["status", "idle", "showLoading", "fn", "loading"],
        wires: [
          { id: "showLoading-fn", from: "showLoading", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "status-loading", from: "status", to: "loading", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["status", "loading"],
      },
      {
        title: "Side effects are useful when visible",
        description:
          "Production code uses side effects for UI, storage, and network work. The goal is not to avoid them completely; it is to keep them easy to find.",
        line: 2,
        visible: ["status", "idle", "loading"],
        wires: [
          { id: "status-loading", from: "status", to: "loading", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["status", "loading"],
      },
    ],
    quiz: {
      prompt: "What is the side effect here?",
      options: ["status changes outside", "a parameter is created", "a number is added"],
      answer: "status changes outside",
      correct: "Correct. The function changes a variable outside its local work.",
      wrong: "Not quite. The outside status wire moves when the function runs.",
    },
  },
  {
    id: "derived-state",
    number: "Chapter 39",
    title: "Derived State",
    universeTitle: "Some values should be computed, not stored",
    intro:
      "In production UI code, storing the same fact twice can create bugs. Derived state is computed from source state when you need it.",
    code: ['let first = "Ada";', 'let last = "Lovelace";', 'let fullName = `${first} ${last}`;'],
    legend: ["variable", "wire", "value"],
    nodes: {
      first: { label: "first", kind: "variable-wide", x: 16, y: 34 },
      ada: { label: '"Ada"', kind: "string", x: 46, y: 34 },
      last: { label: "last", kind: "variable-wide", x: 16, y: 58 },
      lovelace: { label: '"Lovelace"', kind: "string", x: 46, y: 58 },
      fullName: { label: "fullName", kind: "variable-wide", x: 16, y: 84 },
      fullValue: { label: '"Ada Lovelace"', kind: "string", x: 62, y: 84 },
    },
    steps: [
      {
        title: "Store source values",
        description:
          "first and last are source state. These are the facts the app needs to remember.",
        line: 0,
        visible: ["first", "ada", "last", "lovelace"],
        wires: [
          { id: "first-ada", from: "first", to: "ada", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "last-lovelace", from: "last", to: "lovelace", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["first", "last"],
      },
      {
        title: "Read both source wires",
        description:
          "To build fullName, JavaScript reads first and last. It does not need another permanent source of truth.",
        line: 2,
        visible: ["first", "ada", "last", "lovelace"],
        wires: [
          { id: "first-ada", from: "first", to: "ada", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "last-lovelace", from: "last", to: "lovelace", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["ada", "lovelace"],
      },
      {
        title: "Create the derived value",
        description:
          'The template literal creates a new string: "Ada Lovelace".',
        line: 2,
        visible: ["first", "ada", "last", "lovelace", "fullValue"],
        wires: [
          { id: "first-ada", from: "first", to: "ada", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "last-lovelace", from: "last", to: "lovelace", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["fullValue"],
      },
      {
        title: "Point fullName to the derived value",
        description:
          "fullName points to the computed string. If first or last changes later, compute fullName again from the sources.",
        line: 2,
        visible: ["first", "ada", "last", "lovelace", "fullName", "fullValue"],
        wires: [
          { id: "first-ada", from: "first", to: "ada", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "last-lovelace", from: "last", to: "lovelace", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "fullName-fullValue", from: "fullName", to: "fullValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["fullName", "fullValue"],
      },
    ],
    quiz: {
      prompt: "Why avoid storing derived state as a separate source of truth?",
      options: ["it can get stale", "strings cannot be stored", "variables disappear"],
      answer: "it can get stale",
      correct: "Correct. If source values change, separately stored derived values can become stale.",
      wrong: "Not quite. The risk is storing the same fact twice and letting it drift.",
    },
  },
  {
    id: "debouncing",
    number: "Chapter 40",
    title: "Debouncing",
    universeTitle: "Debounce waits for noisy events to settle",
    intro:
      "Search boxes can fire many input events quickly. Debouncing waits briefly so production code does expensive work only after the user pauses.",
    code: ["let timer;", "function onInput(value) {", "  clearTimeout(timer);", "  timer = setTimeout(() => search(value), 300);", "}"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      inputEvent: { label: "input", kind: "string", x: 18, y: 30 },
      valueA: { label: '"a"', kind: "string", x: 46, y: 30 },
      timer: { label: "timer", kind: "variable-wide", x: 18, y: 62 },
      oldTimeout: { label: "old", kind: "object", x: 46, y: 62 },
      newTimeout: { label: "new", kind: "object", x: 58, y: 50 },
      searchFn: { label: "search", kind: "variable-wide", x: 18, y: 78 },
      result: { label: "run later", kind: "string", x: 68, y: 78 },
    },
    steps: [
      {
        title: "Input events arrive quickly",
        description:
          "Typing creates repeated input events. Running search on every event can be wasteful.",
        line: 1,
        visible: ["inputEvent", "valueA"],
        wires: [
          { id: "inputEvent-valueA", from: "inputEvent", to: "valueA", label: "value", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["inputEvent", "valueA"],
      },
      {
        title: "Existing timer is canceled",
        description:
          "clearTimeout(timer) cancels the previous scheduled work, if there was one.",
        line: 2,
        visible: ["timer", "oldTimeout"],
        wires: [
          { id: "timer-oldTimeout", from: "timer", to: "oldTimeout", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["oldTimeout"],
      },
      {
        title: "Schedule fresh work",
        description:
          "setTimeout creates a new timer object. timer moves to point at the latest scheduled work.",
        line: 3,
        visible: ["timer", "oldTimeout", "newTimeout"],
        wires: [
          { id: "timer-newTimeout", from: "timer", to: "newTimeout", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["timer", "newTimeout"],
      },
      {
        title: "Only the final timer runs",
        description:
          "If the user stops typing, the latest timer calls search once with the latest value.",
        line: 3,
        visible: ["newTimeout", "searchFn", "result"],
        wires: [
          { id: "newTimeout-result", from: "newTimeout", to: "result", label: "after 300ms", tone: "orange", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
          { id: "searchFn-result", from: "searchFn", to: "result", label: "calls", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["searchFn", "result"],
      },
    ],
    quiz: {
      prompt: "Why debounce input events?",
      options: ["avoid repeated expensive work", "delete the input", "make strings mutable"],
      answer: "avoid repeated expensive work",
      correct: "Correct. Debouncing waits so expensive work runs after events settle.",
      wrong: "Not quite. Debouncing is about limiting repeated work from noisy events.",
    },
  },
  {
    id: "abort-controller",
    number: "Chapter 41",
    title: "AbortController",
    universeTitle: "Stale async work can be canceled",
    intro:
      "Production apps often start a new request before an old one finishes. AbortController lets code cancel stale work instead of using old results.",
    code: ["let controller = new AbortController();", "fetch('/search?q=a', { signal: controller.signal });", "controller.abort();"],
    legend: ["variable", "object", "property", "wire"],
    nodes: {
      controller: { label: "controller", kind: "variable-wide", x: 16, y: 34 },
      controllerObj: { label: "{ }", kind: "object", x: 44, y: 34 },
      signal: { label: "sig", kind: "object", x: 72, y: 34 },
      request: { label: "req", kind: "object", x: 44, y: 68 },
      promise: { label: "P", kind: "object", x: 72, y: 68 },
      canceled: { label: "canceled", kind: "string", x: 72, y: 90 },
    },
    steps: [
      {
        title: "Create a controller",
        description:
          "new AbortController creates an object. controller points to it.",
        line: 0,
        visible: ["controller", "controllerObj"],
        wires: [
          { id: "controller-controllerObj", from: "controller", to: "controllerObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["controller", "controllerObj"],
      },
      {
        title: "Controller owns a signal",
        description:
          "The controller has a signal object. fetch can listen to this signal.",
        line: 1,
        visible: ["controller", "controllerObj", "signal"],
        wires: [
          { id: "controller-controllerObj", from: "controller", to: "controllerObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "controllerObj-signal", from: "controllerObj", to: "signal", label: "signal", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["controllerObj", "signal"],
      },
      {
        title: "Request uses the signal",
        description:
          "fetch starts a request and returns a Promise. The request is wired to the signal.",
        line: 1,
        visible: ["controllerObj", "signal", "request", "promise"],
        wires: [
          { id: "controllerObj-signal", from: "controllerObj", to: "signal", label: "signal", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "request-signal", from: "request", to: "signal", label: "listens", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
          { id: "request-promise", from: "request", to: "promise", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["request", "promise"],
      },
      {
        title: "Abort cancels stale work",
        description:
          "controller.abort() tells the signal to cancel the request. This helps avoid rendering stale results.",
        line: 2,
        visible: ["controller", "controllerObj", "signal", "request", "promise", "canceled"],
        wires: [
          { id: "controller-controllerObj", from: "controller", to: "controllerObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "controllerObj-signal", from: "controllerObj", to: "signal", label: "signal", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "request-signal", from: "request", to: "signal", label: "listens", tone: "cyan", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
          { id: "promise-canceled", from: "promise", to: "canceled", label: "rejects", tone: "orange", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
        ],
        active: ["controllerObj", "canceled"],
      },
    ],
    quiz: {
      prompt: "Why cancel stale async work?",
      options: ["avoid old results winning", "turn objects into strings", "skip fetch entirely"],
      answer: "avoid old results winning",
      correct: "Correct. Canceling stale work helps prevent old responses from updating the UI.",
      wrong: "Not quite. The goal is to stop outdated async work from affecting current state.",
    },
  },
  {
    id: "call-stack",
    number: "Chapter 42",
    title: "Call Stack",
    universeTitle: "Function calls stack on top of each other",
    intro:
      "The call stack is how JavaScript remembers where it is. Each function call adds a frame; returning removes that frame.",
    code: ["function double(n) { return n * 2; }", "function total(x) {", "  return double(x) + 1;", "}", "total(5);"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      global: { label: "global", kind: "variable-wide", x: 18, y: 82 },
      totalFrame: { label: "total", kind: "variable-wide", x: 18, y: 58 },
      doubleFrame: { label: "double", kind: "variable-wide", x: 18, y: 34 },
      five: { label: "5", kind: "value", x: 48, y: 58 },
      ten: { label: "10", kind: "value", x: 48, y: 34 },
      eleven: { label: "11", kind: "value", x: 72, y: 58 },
    },
    steps: [
      {
        title: "Start in global code",
        description:
          "JavaScript begins in the global frame before calling total(5).",
        line: 4,
        visible: ["global", "five"],
        wires: [],
        active: ["global"],
      },
      {
        title: "Call total",
        description:
          "Calling total adds a total frame to the stack. Its parameter x points to 5.",
        line: 1,
        visible: ["global", "totalFrame", "five"],
        wires: [
          { id: "totalFrame-five", from: "totalFrame", to: "five", label: "x", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["totalFrame", "five"],
      },
      {
        title: "Call double from total",
        description:
          "total calls double, so a double frame is placed on top of the total frame.",
        line: 2,
        visible: ["global", "totalFrame", "doubleFrame", "five"],
        wires: [
          { id: "totalFrame-five", from: "totalFrame", to: "five", label: "x", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "doubleFrame-five", from: "doubleFrame", to: "five", label: "n", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: -12 } },
        ],
        active: ["doubleFrame"],
      },
      {
        title: "double returns",
        description:
          "double returns 10 and its frame is removed. total keeps running with that returned value.",
        line: 0,
        visible: ["global", "totalFrame", "five", "ten"],
        wires: [
          { id: "totalFrame-five", from: "totalFrame", to: "five", label: "x", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["ten"],
      },
      {
        title: "total returns",
        description:
          "total adds 1 to the returned 10, returns 11, and its frame is removed.",
        line: 2,
        visible: ["global", "eleven"],
        wires: [],
        active: ["eleven"],
      },
    ],
    quiz: {
      prompt: "What happens to a stack frame when a function returns?",
      options: ["it is removed", "it becomes a string", "it mutates every variable"],
      answer: "it is removed",
      correct: "Correct. Returning removes that function's frame from the call stack.",
      wrong: "Not quite. Function frames are added on call and removed on return.",
    },
  },
  {
    id: "event-loop-tasks",
    number: "Chapter 43",
    title: "Event Loop Tasks",
    universeTitle: "Timers run after the current stack is empty",
    intro:
      "setTimeout does not pause the current function. It schedules a callback task that runs later, after the current call stack finishes.",
    code: ['console.log("A");', 'setTimeout(() => console.log("B"), 0);', 'console.log("C");'],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      stack: { label: "stack", kind: "variable-wide", x: 18, y: 36 },
      taskQueue: { label: "task queue", kind: "variable-wide", x: 18, y: 70 },
      logA: { label: '"A"', kind: "string", x: 48, y: 28 },
      timerFn: { label: "fn", kind: "object", x: 48, y: 70 },
      logC: { label: '"C"', kind: "string", x: 48, y: 44 },
      logB: { label: '"B"', kind: "string", x: 72, y: 70 },
    },
    steps: [
      {
        title: "Run the first line",
        description:
          'The current stack logs "A" immediately.',
        line: 0,
        visible: ["stack", "logA"],
        wires: [
          { id: "stack-logA", from: "stack", to: "logA", label: "logs", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["logA"],
      },
      {
        title: "Schedule a timer callback",
        description:
          "setTimeout stores the callback for later. It does not run the callback yet, even with 0 milliseconds.",
        line: 1,
        visible: ["stack", "taskQueue", "timerFn"],
        wires: [
          { id: "taskQueue-timerFn", from: "taskQueue", to: "timerFn", label: "queued", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["taskQueue", "timerFn"],
      },
      {
        title: "Continue current code",
        description:
          'JavaScript continues the current stack and logs "C" before the queued callback.',
        line: 2,
        visible: ["stack", "taskQueue", "timerFn", "logC"],
        wires: [
          { id: "taskQueue-timerFn", from: "taskQueue", to: "timerFn", label: "queued", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "stack-logC", from: "stack", to: "logC", label: "logs", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["logC"],
      },
      {
        title: "Run the queued task",
        description:
          'After the stack is empty, the event loop takes the timer task and logs "B".',
        line: 1,
        visible: ["taskQueue", "timerFn", "logB"],
        wires: [
          { id: "taskQueue-timerFn", from: "taskQueue", to: "timerFn", label: "runs", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "timerFn-logB", from: "timerFn", to: "logB", label: "logs", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["timerFn", "logB"],
      },
    ],
    quiz: {
      prompt: "What is the log order?",
      options: ["A, C, B", "A, B, C", "B, A, C"],
      answer: "A, C, B",
      correct: "Correct. The timer callback runs after the current stack finishes.",
      wrong: "Not quite. setTimeout schedules work for later instead of pausing the stack.",
    },
  },
  {
    id: "microtasks",
    number: "Chapter 44",
    title: "Microtasks",
    universeTitle: "Promise callbacks run before timer tasks",
    intro:
      "Promise callbacks use the microtask queue. After the current stack finishes, microtasks run before timer tasks.",
    code: ['setTimeout(() => log("timer"), 0);', 'Promise.resolve().then(() => log("promise"));', 'log("sync");'],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      stack: { label: "stack", kind: "variable-wide", x: 16, y: 32 },
      microQueue: { label: "microtasks", kind: "variable-wide", x: 16, y: 58 },
      taskQueue: { label: "tasks", kind: "variable-wide", x: 16, y: 82 },
      sync: { label: '"sync"', kind: "string", x: 46, y: 32 },
      promiseFn: { label: "fn", kind: "object", x: 46, y: 58 },
      timerFn: { label: "fn", kind: "object", x: 46, y: 82 },
      promiseText: { label: '"promise"', kind: "string", x: 72, y: 58 },
      timerText: { label: '"timer"', kind: "string", x: 72, y: 82 },
    },
    steps: [
      {
        title: "Timer callback goes to tasks",
        description:
          "setTimeout schedules its callback in the task queue.",
        line: 0,
        visible: ["taskQueue", "timerFn"],
        wires: [
          { id: "taskQueue-timerFn", from: "taskQueue", to: "timerFn", label: "queued", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["taskQueue", "timerFn"],
      },
      {
        title: "Promise callback goes to microtasks",
        description:
          "then schedules its callback in the microtask queue, which has priority after the current stack.",
        line: 1,
        visible: ["microQueue", "promiseFn", "taskQueue", "timerFn"],
        wires: [
          { id: "microQueue-promiseFn", from: "microQueue", to: "promiseFn", label: "queued", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "taskQueue-timerFn", from: "taskQueue", to: "timerFn", label: "queued", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["microQueue", "promiseFn"],
      },
      {
        title: "Synchronous code runs first",
        description:
          'The current stack logs "sync" before either queued callback runs.',
        line: 2,
        visible: ["stack", "sync", "microQueue", "promiseFn", "taskQueue", "timerFn"],
        wires: [
          { id: "stack-sync", from: "stack", to: "sync", label: "logs", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "microQueue-promiseFn", from: "microQueue", to: "promiseFn", label: "queued", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "taskQueue-timerFn", from: "taskQueue", to: "timerFn", label: "queued", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["sync"],
      },
      {
        title: "Microtask runs before timer",
        description:
          'After the stack clears, the Promise callback logs "promise" before the timer logs "timer".',
        line: 1,
        visible: ["microQueue", "promiseFn", "promiseText", "taskQueue", "timerFn", "timerText"],
        wires: [
          { id: "microQueue-promiseFn", from: "microQueue", to: "promiseFn", label: "runs", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "promiseFn-promiseText", from: "promiseFn", to: "promiseText", label: "logs", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "taskQueue-timerFn", from: "taskQueue", to: "timerFn", label: "later", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "timerFn-timerText", from: "timerFn", to: "timerText", label: "logs", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["promiseFn", "promiseText"],
      },
    ],
    quiz: {
      prompt: "Which queued callback runs first after sync code?",
      options: ["Promise then", "setTimeout", "both at once"],
      answer: "Promise then",
      correct: "Correct. Promise callbacks run as microtasks before timer tasks.",
      wrong: "Not quite. Microtasks run before the next timer task.",
    },
  },
  {
    id: "race-conditions",
    number: "Chapter 45",
    title: "Race Conditions",
    universeTitle: "Old async results can arrive last",
    intro:
      "A race condition happens when timing decides the result. In UI code, an older request can finish after a newer one and overwrite the screen.",
    code: ['search("a");', 'search("ab");', "// old response arrives last"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      currentQuery: { label: "query", kind: "variable-wide", x: 16, y: 34 },
      a: { label: '"a"', kind: "string", x: 44, y: 28 },
      ab: { label: '"ab"', kind: "string", x: 44, y: 44 },
      oldReq: { label: "old req", kind: "variable-wide", x: 16, y: 66 },
      newReq: { label: "new req", kind: "variable-wide", x: 16, y: 86 },
      oldResult: { label: '"A results"', kind: "string", x: 70, y: 66 },
      newResult: { label: '"AB results"', kind: "string", x: 70, y: 86 },
      screen: { label: "screen", kind: "variable-wide", x: 44, y: 76 },
    },
    steps: [
      {
        title: "Start the first search",
        description:
          'The first request is for "a".',
        line: 0,
        visible: ["currentQuery", "a", "oldReq"],
        wires: [
          { id: "currentQuery-a", from: "currentQuery", to: "a", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "oldReq-a", from: "oldReq", to: "a", label: "for", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 10 } },
        ],
        active: ["oldReq", "a"],
      },
      {
        title: "User types a newer query",
        description:
          'query moves to "ab", and a newer request starts.',
        line: 1,
        visible: ["currentQuery", "a", "ab", "oldReq", "newReq"],
        wires: [
          { id: "currentQuery-ab", from: "currentQuery", to: "ab", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "oldReq-a", from: "oldReq", to: "a", label: "for", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 10 } },
          { id: "newReq-ab", from: "newReq", to: "ab", label: "for", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 10 } },
        ],
        active: ["currentQuery", "newReq", "ab"],
      },
      {
        title: "New request finishes first",
        description:
          "The newer response correctly updates the screen with AB results.",
        line: 1,
        visible: ["currentQuery", "ab", "newReq", "newResult", "screen"],
        wires: [
          { id: "currentQuery-ab", from: "currentQuery", to: "ab", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "newReq-newResult", from: "newReq", to: "newResult", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "screen-newResult", from: "screen", to: "newResult", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["screen", "newResult"],
      },
      {
        title: "Old request arrives late",
        description:
          "If old results are still allowed to update the screen, they can overwrite the newer results. Debounce or AbortController helps prevent this.",
        line: 2,
        visible: ["currentQuery", "ab", "oldReq", "oldResult", "screen", "newResult"],
        wires: [
          { id: "currentQuery-ab", from: "currentQuery", to: "ab", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "oldReq-oldResult", from: "oldReq", to: "oldResult", label: "late", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "screen-oldResult", from: "screen", to: "oldResult", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["oldReq", "oldResult", "screen"],
      },
    ],
    quiz: {
      prompt: "What is the bug in this race condition?",
      options: ["old results overwrite new", "strings become objects", "query cannot change"],
      answer: "old results overwrite new",
      correct: "Correct. Timing lets an older response update the UI after a newer one.",
      wrong: "Not quite. The problem is stale async work winning because it finishes later.",
    },
  },
  {
    id: "testing-functions",
    number: "Chapter 46",
    title: "Testing Functions",
    universeTitle: "Tests compare expected and actual values",
    intro:
      "Tests are production tools for confidence. A test calls code with known inputs and checks whether the actual output matches the expected value.",
    code: ["function slugify(text) {", "  return text.toLowerCase().replaceAll(' ', '-');", "}", 'expect(slugify("Hello JS")).toBe("hello-js");'],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      slugify: { label: "slugify", kind: "variable-wide", x: 16, y: 34 },
      fn: { label: "fn", kind: "object", x: 42, y: 34 },
      input: { label: '"Hello JS"', kind: "string", x: 16, y: 64 },
      actual: { label: "actual", kind: "variable-wide", x: 42, y: 64 },
      actualValue: { label: '"hello-js"', kind: "string", x: 72, y: 64 },
      expected: { label: "expected", kind: "variable-wide", x: 42, y: 86 },
      expectedValue: { label: '"hello-js"', kind: "string", x: 72, y: 86 },
    },
    steps: [
      {
        title: "Function under test",
        description:
          "slugify points to the function value we want confidence in.",
        line: 0,
        visible: ["slugify", "fn"],
        wires: [
          { id: "slugify-fn", from: "slugify", to: "fn", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["slugify", "fn"],
      },
      {
        title: "Call it with known input",
        description:
          'The test calls slugify with "Hello JS".',
        line: 3,
        visible: ["slugify", "fn", "input"],
        wires: [
          { id: "slugify-fn", from: "slugify", to: "fn", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "fn-input", from: "fn", to: "input", label: "text", tone: "orange", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
        ],
        active: ["input"],
      },
      {
        title: "Capture actual output",
        description:
          'The function returns "hello-js". The test treats that as the actual value.',
        line: 1,
        visible: ["actual", "actualValue"],
        wires: [
          { id: "actual-actualValue", from: "actual", to: "actualValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["actual", "actualValue"],
      },
      {
        title: "Compare to expected output",
        description:
          "The test passes because actual and expected point to equal string values.",
        line: 3,
        visible: ["actual", "actualValue", "expected", "expectedValue"],
        wires: [
          { id: "actual-actualValue", from: "actual", to: "actualValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "expected-expectedValue", from: "expected", to: "expectedValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["actualValue", "expectedValue"],
      },
    ],
    quiz: {
      prompt: "What does this test compare?",
      options: ["actual and expected", "two prototypes", "the browser history"],
      answer: "actual and expected",
      correct: "Correct. Tests compare what the code actually returned with what you expected.",
      wrong: "Not quite. The key comparison is actual output versus expected output.",
    },
  },
  {
    id: "type-conversion",
    number: "Chapter 47",
    title: "Type Conversion",
    universeTitle: "Values can be converted before work",
    intro:
      "User input often arrives as strings. Production code converts values intentionally instead of relying on surprising automatic coercion.",
    code: ['let input = "42";', "let amount = Number(input);", "let total = amount + 8;"],
    legend: ["variable", "wire", "value"],
    nodes: {
      input: { label: "input", kind: "variable-wide", x: 16, y: 34 },
      string42: { label: '"42"', kind: "string", x: 48, y: 34 },
      amount: { label: "amount", kind: "variable-wide", x: 16, y: 62 },
      number42: { label: "42", kind: "value", x: 48, y: 62 },
      total: { label: "total", kind: "variable-wide", x: 16, y: 88 },
      fifty: { label: "50", kind: "value", x: 72, y: 88 },
    },
    steps: [
      {
        title: "Input starts as a string",
        description:
          'The value "42" is text, not a number. This is common with form inputs and URLs.',
        line: 0,
        visible: ["input", "string42"],
        wires: [
          { id: "input-string42", from: "input", to: "string42", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["input", "string42"],
      },
      {
        title: "Convert intentionally",
        description:
          'Number(input) creates the numeric value 42 from the string "42".',
        line: 1,
        visible: ["input", "string42", "amount", "number42"],
        wires: [
          { id: "input-string42", from: "input", to: "string42", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "amount-number42", from: "amount", to: "number42", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["amount", "number42"],
      },
      {
        title: "Math uses the number",
        description:
          "amount + 8 is numeric addition, so total points to 50.",
        line: 2,
        visible: ["string42", "amount", "number42", "total", "fifty"],
        wires: [
          { id: "amount-number42", from: "amount", to: "number42", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "total-fifty", from: "total", to: "fifty", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["total", "fifty"],
      },
    ],
    quiz: {
      prompt: "Why convert input intentionally?",
      options: ["avoid surprise coercion", "make numbers strings", "hide variables"],
      answer: "avoid surprise coercion",
      correct: "Correct. Explicit conversion makes the code's intent clear.",
      wrong: "Not quite. The goal is to avoid relying on implicit conversion rules.",
    },
  },
  {
    id: "nan",
    number: "Chapter 48",
    title: "NaN",
    universeTitle: "Failed number conversion produces NaN",
    intro:
      "NaN means Not-a-Number. It is a number value used when numeric work fails, so production code checks for it.",
    code: ['let input = "abc";', "let amount = Number(input);", "Number.isNaN(amount);"],
    legend: ["variable", "wire", "value"],
    nodes: {
      input: { label: "input", kind: "variable-wide", x: 16, y: 34 },
      abc: { label: '"abc"', kind: "string", x: 48, y: 34 },
      amount: { label: "amount", kind: "variable-wide", x: 16, y: 66 },
      nan: { label: "NaN", kind: "value", x: 48, y: 66 },
      check: { label: "isNaN", kind: "variable-wide", x: 16, y: 88 },
      trueValue: { label: "true", kind: "string", x: 70, y: 88 },
    },
    steps: [
      {
        title: "Start with non-numeric text",
        description:
          '"abc" cannot become a useful number.',
        line: 0,
        visible: ["input", "abc"],
        wires: [
          { id: "input-abc", from: "input", to: "abc", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["input", "abc"],
      },
      {
        title: "Conversion fails",
        description:
          "Number(input) creates NaN. NaN is still part of the number family, but it means numeric failure.",
        line: 1,
        visible: ["input", "abc", "amount", "nan"],
        wires: [
          { id: "input-abc", from: "input", to: "abc", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "amount-nan", from: "amount", to: "nan", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["amount", "nan"],
      },
      {
        title: "Check before using",
        description:
          "Number.isNaN(amount) lets code detect the failed conversion before doing more work.",
        line: 2,
        visible: ["amount", "nan", "check", "trueValue"],
        wires: [
          { id: "amount-nan", from: "amount", to: "nan", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "check-trueValue", from: "check", to: "trueValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["check", "trueValue"],
      },
    ],
    quiz: {
      prompt: "What does NaN represent?",
      options: ["failed numeric work", "an empty string", "a DOM object"],
      answer: "failed numeric work",
      correct: "Correct. NaN represents a numeric operation that failed to produce a normal number.",
      wrong: "Not quite. NaN is a number value that means numeric failure.",
    },
  },
  {
    id: "optional-chaining",
    number: "Chapter 49",
    title: "Optional Chaining",
    universeTitle: "Optional chaining stops at missing values",
    intro:
      "Optional chaining is common in production code that reads data from APIs where some nested values may be missing.",
    code: ["let user = { profile: null };", "let city = user.profile?.address?.city;"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      user: { label: "user", kind: "variable-wide", x: 16, y: 34 },
      userObj: { label: "{ }", kind: "object", x: 42, y: 34 },
      nullValue: { label: "null", kind: "value", x: 70, y: 34 },
      city: { label: "city", kind: "variable-wide", x: 16, y: 76 },
      undefinedValue: { label: "undefined", kind: "string", x: 62, y: 76 },
    },
    steps: [
      {
        title: "profile is null",
        description:
          "user points to an object. Its profile property points to null.",
        line: 0,
        visible: ["user", "userObj", "nullValue"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-nullValue", from: "userObj", to: "nullValue", label: "profile", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["userObj", "nullValue"],
      },
      {
        title: "Optional access stops",
        description:
          "profile?.address stops when profile is null, so JavaScript does not try to read address from null.",
        line: 1,
        visible: ["user", "userObj", "nullValue"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-nullValue", from: "userObj", to: "nullValue", label: "profile", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["nullValue"],
      },
      {
        title: "Result is undefined",
        description:
          "Because the chain stopped, city points to undefined instead of the code throwing an error.",
        line: 1,
        visible: ["city", "undefinedValue", "userObj", "nullValue"],
        wires: [
          { id: "userObj-nullValue", from: "userObj", to: "nullValue", label: "profile", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "city-undefinedValue", from: "city", to: "undefinedValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["city", "undefinedValue"],
      },
    ],
    quiz: {
      prompt: "What does ?. prevent here?",
      options: ["reading from null", "creating objects", "string comparison"],
      answer: "reading from null",
      correct: "Correct. Optional chaining stops when it reaches null or undefined.",
      wrong: "Not quite. It protects the next property access when a value is missing.",
    },
  },
  {
    id: "nullish-coalescing",
    number: "Chapter 50",
    title: "Nullish Coalescing",
    universeTitle: "?? chooses a fallback only for null or undefined",
    intro:
      "Nullish coalescing is useful when empty strings or 0 are valid values, but null and undefined should use a fallback.",
    code: ["let savedName = null;", 'let name = savedName ?? "Guest";'],
    legend: ["variable", "wire", "value"],
    nodes: {
      savedName: { label: "savedName", kind: "variable-wide", x: 16, y: 34 },
      nullValue: { label: "null", kind: "value", x: 50, y: 34 },
      fallback: { label: '"Guest"', kind: "string", x: 50, y: 62 },
      name: { label: "name", kind: "variable-wide", x: 16, y: 84 },
    },
    steps: [
      {
        title: "Saved value is missing",
        description:
          "savedName points to null, which means there is no saved name.",
        line: 0,
        visible: ["savedName", "nullValue"],
        wires: [
          { id: "savedName-nullValue", from: "savedName", to: "nullValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["savedName", "nullValue"],
      },
      {
        title: "?? checks only nullish values",
        description:
          "Because savedName is null, JavaScript chooses the fallback value.",
        line: 1,
        visible: ["savedName", "nullValue", "fallback"],
        wires: [
          { id: "savedName-nullValue", from: "savedName", to: "nullValue", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["fallback"],
      },
      {
        title: "name points to fallback",
        description:
          'name points to "Guest". If savedName were an empty string or 0, ?? would keep that value.',
        line: 1,
        visible: ["name", "fallback", "nullValue"],
        wires: [
          { id: "name-fallback", from: "name", to: "fallback", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["name", "fallback"],
      },
    ],
    quiz: {
      prompt: "When does ?? use the fallback?",
      options: ["null or undefined", "any falsey value", "only strings"],
      answer: "null or undefined",
      correct: "Correct. ?? falls back only for null or undefined.",
      wrong: "Not quite. ?? is narrower than || because it keeps valid falsey values like 0.",
    },
  },
  {
    id: "map-collection",
    number: "Chapter 51",
    title: "Map Collection",
    universeTitle: "Map stores key-value wires",
    intro:
      "Map is useful when keys are not just property names. It can use objects as keys and keeps insertion order.",
    code: ["let cache = new Map();", "let user = {};", 'cache.set(user, "Ada");', "cache.get(user);"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      cache: { label: "cache", kind: "variable-wide", x: 16, y: 34 },
      mapObj: { label: "Map", kind: "object", x: 42, y: 34 },
      user: { label: "user", kind: "variable-wide", x: 16, y: 68 },
      userObj: { label: "{ }", kind: "object", x: 42, y: 68 },
      ada: { label: '"Ada"', kind: "string", x: 72, y: 50 },
    },
    steps: [
      {
        title: "Create a Map",
        description:
          "cache points to a Map object.",
        line: 0,
        visible: ["cache", "mapObj"],
        wires: [
          { id: "cache-mapObj", from: "cache", to: "mapObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["cache", "mapObj"],
      },
      {
        title: "Key can be an object",
        description:
          "user points to an object. Map can use that exact object as a key.",
        line: 1,
        visible: ["cache", "mapObj", "user", "userObj"],
        wires: [
          { id: "cache-mapObj", from: "cache", to: "mapObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["userObj"],
      },
      {
        title: "Map stores the pair",
        description:
          'cache.set(user, "Ada") stores a key-value relationship inside the Map.',
        line: 2,
        visible: ["mapObj", "userObj", "ada"],
        wires: [
          { id: "mapObj-userObj", from: "mapObj", to: "userObj", label: "key", tone: "cyan", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
          { id: "mapObj-ada", from: "mapObj", to: "ada", label: "value", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["mapObj", "ada"],
      },
      {
        title: "get reads by same key",
        description:
          "cache.get(user) finds the entry by the same object identity and returns the stored value.",
        line: 3,
        visible: ["mapObj", "userObj", "ada"],
        wires: [
          { id: "mapObj-userObj", from: "mapObj", to: "userObj", label: "key", tone: "cyan", fromAnchor: { side: "bottom" }, toAnchor: { side: "top" } },
          { id: "mapObj-ada", from: "mapObj", to: "ada", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["ada"],
      },
    ],
    quiz: {
      prompt: "What can a Map use as a key?",
      options: ["an object value", "only property text", "only numbers"],
      answer: "an object value",
      correct: "Correct. Map keys can be objects and are matched by identity.",
      wrong: "Not quite. Map can use object values as keys.",
    },
  },
  {
    id: "set-collection",
    number: "Chapter 52",
    title: "Set Collection",
    universeTitle: "Set keeps unique values",
    intro:
      "Set is useful when you need membership and uniqueness instead of array positions.",
    code: ["let tags = new Set();", 'tags.add("js");', 'tags.add("js");'],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      tags: { label: "tags", kind: "variable-wide", x: 16, y: 42 },
      setObj: { label: "Set", kind: "object", x: 42, y: 42 },
      js: { label: '"js"', kind: "string", x: 72, y: 42 },
      duplicate: { label: "same value", kind: "string", x: 72, y: 72 },
    },
    steps: [
      {
        title: "Create a Set",
        description:
          "tags points to a Set object.",
        line: 0,
        visible: ["tags", "setObj"],
        wires: [
          { id: "tags-setObj", from: "tags", to: "setObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["tags", "setObj"],
      },
      {
        title: "Add a value",
        description:
          'tags.add("js") stores the string in the Set.',
        line: 1,
        visible: ["tags", "setObj", "js"],
        wires: [
          { id: "tags-setObj", from: "tags", to: "setObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "setObj-js", from: "setObj", to: "js", label: "has", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["setObj", "js"],
      },
      {
        title: "Adding again does not duplicate",
        description:
          "A Set stores unique values. Adding the same string again leaves one membership.",
        line: 2,
        visible: ["setObj", "js", "duplicate"],
        wires: [
          { id: "setObj-js", from: "setObj", to: "js", label: "has", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["js"],
      },
    ],
    quiz: {
      prompt: "What does Set prevent?",
      options: ["duplicate values", "functions returning", "strings existing"],
      answer: "duplicate values",
      correct: "Correct. A Set keeps only one copy of each value.",
      wrong: "Not quite. Set is for uniqueness and membership.",
    },
  },
  {
    id: "reduce",
    number: "Chapter 53",
    title: "Array reduce",
    universeTitle: "reduce carries one result across many items",
    intro:
      "reduce is useful for totals and grouped summaries. It is not always the clearest tool, but it is common in production data transforms.",
    code: ["let nums = [2, 3, 4];", "let total = nums.reduce((sum, n) => sum + n, 0);"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      nums: { label: "nums", kind: "variable-wide", x: 16, y: 34 },
      array: { label: "[ ]", kind: "object", x: 42, y: 34 },
      zero: { label: "0", kind: "value", x: 28, y: 66 },
      five: { label: "5", kind: "value", x: 48, y: 66 },
      nine: { label: "9", kind: "value", x: 68, y: 66 },
      total: { label: "total", kind: "variable-wide", x: 16, y: 88 },
    },
    steps: [
      {
        title: "Start with an array",
        description:
          "nums points to an array of values.",
        line: 0,
        visible: ["nums", "array"],
        wires: [
          { id: "nums-array", from: "nums", to: "array", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["nums", "array"],
      },
      {
        title: "Accumulator starts at 0",
        description:
          "reduce starts with an accumulator value. Here the initial sum is 0.",
        line: 1,
        visible: ["array", "zero"],
        wires: [],
        active: ["zero"],
      },
      {
        title: "Accumulator changes each item",
        description:
          "After adding 2 and 3, the accumulator becomes 5; after adding 4, it becomes 9.",
        line: 1,
        visible: ["zero", "five", "nine"],
        wires: [
          { id: "zero-five", from: "zero", to: "five", label: "+2,+3", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "five-nine", from: "five", to: "nine", label: "+4", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["nine"],
      },
      {
        title: "total receives the final accumulator",
        description:
          "reduce returns the final accumulator value, so total points to 9.",
        line: 1,
        visible: ["total", "nine"],
        wires: [
          { id: "total-nine", from: "total", to: "nine", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["total", "nine"],
      },
    ],
    quiz: {
      prompt: "What does reduce return?",
      options: ["final accumulator", "the original array only", "a DOM event"],
      answer: "final accumulator",
      correct: "Correct. reduce returns the accumulator after processing the array.",
      wrong: "Not quite. reduce carries an accumulator and returns its final value.",
    },
  },
  {
    id: "regular-expressions",
    number: "Chapter 54",
    title: "Regular Expressions",
    universeTitle: "Regular expressions match patterns in strings",
    intro:
      "Regular expressions are useful for validation and extraction. They are powerful, but production code should keep them readable.",
    code: ['let email = "ada@example.com";', "let ok = /@/.test(email);"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      email: { label: "email", kind: "variable-wide", x: 16, y: 34 },
      emailText: { label: '"ada@example.com"', kind: "string", x: 58, y: 34 },
      regex: { label: "/@/", kind: "object", x: 42, y: 62 },
      ok: { label: "ok", kind: "variable-wide", x: 16, y: 88 },
      trueValue: { label: "true", kind: "string", x: 58, y: 88 },
    },
    steps: [
      {
        title: "String contains text",
        description:
          "email points to a string value.",
        line: 0,
        visible: ["email", "emailText"],
        wires: [
          { id: "email-emailText", from: "email", to: "emailText", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["email", "emailText"],
      },
      {
        title: "Regex is a pattern value",
        description:
          "/@/ is a regular expression object that checks for an @ character.",
        line: 1,
        visible: ["email", "emailText", "regex"],
        wires: [
          { id: "email-emailText", from: "email", to: "emailText", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "regex-emailText", from: "regex", to: "emailText", label: "test", tone: "orange", fromAnchor: { side: "top" }, toAnchor: { side: "bottom" } },
        ],
        active: ["regex"],
      },
      {
        title: "test returns a boolean",
        description:
          "The string contains @, so ok points to true.",
        line: 1,
        visible: ["regex", "emailText", "ok", "trueValue"],
        wires: [
          { id: "ok-trueValue", from: "ok", to: "trueValue", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["ok", "trueValue"],
      },
    ],
    quiz: {
      prompt: "What does .test return?",
      options: ["a boolean", "a module", "a prototype"],
      answer: "a boolean",
      correct: "Correct. RegExp test returns true or false.",
      wrong: "Not quite. test answers whether the pattern matched.",
    },
  },
  {
    id: "dates",
    number: "Chapter 55",
    title: "Dates",
    universeTitle: "Date objects wrap a point in time",
    intro:
      "Date is common in production apps, but it has sharp edges. Treat it as an object representing a point in time.",
    code: ['let created = new Date("2026-01-01T00:00:00Z");', "created.getUTCFullYear();"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      created: { label: "created", kind: "variable-wide", x: 16, y: 42 },
      dateObj: { label: "dt", kind: "object", x: 46, y: 42 },
      timestamp: { label: "time", kind: "string", x: 72, y: 42 },
      year: { label: "2026", kind: "value", x: 72, y: 74 },
    },
    steps: [
      {
        title: "Create a Date object",
        description:
          "new Date(...) creates a Date object. created points to it.",
        line: 0,
        visible: ["created", "dateObj"],
        wires: [
          { id: "created-dateObj", from: "created", to: "dateObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["created", "dateObj"],
      },
      {
        title: "Date stores time internally",
        description:
          "The Date object represents a point in time, not a plain formatted string.",
        line: 0,
        visible: ["created", "dateObj", "timestamp"],
        wires: [
          { id: "created-dateObj", from: "created", to: "dateObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "dateObj-timestamp", from: "dateObj", to: "timestamp", label: "wraps", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["dateObj"],
      },
      {
        title: "Methods compute parts",
        description:
          "getUTCFullYear reads the Date object and returns the number 2026.",
        line: 1,
        visible: ["created", "dateObj", "year"],
        wires: [
          { id: "created-dateObj", from: "created", to: "dateObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "dateObj-year", from: "dateObj", to: "year", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["year"],
      },
    ],
    quiz: {
      prompt: "What does a Date object represent?",
      options: ["a point in time", "only a displayed string", "a CSS selector"],
      answer: "a point in time",
      correct: "Correct. A Date object wraps a point in time.",
      wrong: "Not quite. Date can format strings, but the object represents time.",
    },
  },
  {
    id: "intl-formatting",
    number: "Chapter 56",
    title: "Intl Formatting",
    universeTitle: "Intl formats values for people",
    intro:
      "Production apps show numbers, dates, and money to humans. Intl uses locale-aware formatter objects instead of hand-built string hacks.",
    code: ['let price = 12.5;', 'let text = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);'],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      price: { label: "price", kind: "variable-wide", x: 16, y: 34 },
      number: { label: "12.5", kind: "value", x: 46, y: 34 },
      formatter: { label: "fmt", kind: "object", x: 46, y: 66 },
      text: { label: "text", kind: "variable-wide", x: 16, y: 88 },
      money: { label: '"$12.50"', kind: "string", x: 72, y: 88 },
    },
    steps: [
      {
        title: "Start with a number",
        description:
          "price points to the numeric value 12.5.",
        line: 0,
        visible: ["price", "number"],
        wires: [
          { id: "price-number", from: "price", to: "number", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["price", "number"],
      },
      {
        title: "Create a formatter",
        description:
          "Intl.NumberFormat creates a formatter object for a specific locale and style.",
        line: 1,
        visible: ["price", "number", "formatter"],
        wires: [
          { id: "price-number", from: "price", to: "number", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["formatter"],
      },
      {
        title: "Formatter returns display text",
        description:
          'format(price) returns a string for people: "$12.50". The original number did not change.',
        line: 1,
        visible: ["price", "number", "formatter", "text", "money"],
        wires: [
          { id: "price-number", from: "price", to: "number", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "formatter-money", from: "formatter", to: "money", label: "format", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "text-money", from: "text", to: "money", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left", offset: 12 } },
        ],
        active: ["text", "money"],
      },
    ],
    quiz: {
      prompt: "What does Intl formatting usually return?",
      options: ["display text", "a changed number", "a function stack"],
      answer: "display text",
      correct: "Correct. Intl formatters produce strings for display.",
      wrong: "Not quite. Intl keeps the value and produces locale-aware display text.",
    },
  },
  {
    id: "json-parse",
    number: "Chapter 57",
    title: "JSON Parse",
    universeTitle: "JSON text becomes JavaScript values",
    intro:
      "APIs and storage often give you JSON text. JSON.parse turns that text into ordinary JavaScript objects and arrays.",
    code: ['let text = \'{"name":"Ada"}\';', "let user = JSON.parse(text);"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      text: { label: "text", kind: "variable-wide", x: 16, y: 34 },
      jsonText: { label: '"{...}"', kind: "string", x: 46, y: 34 },
      user: { label: "user", kind: "variable-wide", x: 16, y: 72 },
      userObj: { label: "{ }", kind: "object", x: 46, y: 72 },
      ada: { label: '"Ada"', kind: "string", x: 74, y: 72 },
    },
    steps: [
      {
        title: "JSON starts as text",
        description:
          "text points to a string. The braces are just characters until parsed.",
        line: 0,
        visible: ["text", "jsonText"],
        wires: [
          { id: "text-jsonText", from: "text", to: "jsonText", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["text", "jsonText"],
      },
      {
        title: "parse creates values",
        description:
          "JSON.parse reads the string and creates a JavaScript object.",
        line: 1,
        visible: ["text", "jsonText", "userObj"],
        wires: [
          { id: "text-jsonText", from: "text", to: "jsonText", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["userObj"],
      },
      {
        title: "user points to parsed object",
        description:
          'user points to the parsed object. Its name property points to "Ada".',
        line: 1,
        visible: ["user", "userObj", "ada"],
        wires: [
          { id: "user-userObj", from: "user", to: "userObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "userObj-ada", from: "userObj", to: "ada", label: "name", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["user", "userObj"],
      },
    ],
    quiz: {
      prompt: "What does JSON.parse create from JSON text?",
      options: ["JavaScript values", "CSS rules", "a timer queue"],
      answer: "JavaScript values",
      correct: "Correct. JSON.parse turns JSON text into JavaScript values.",
      wrong: "Not quite. Parsing creates normal JavaScript objects, arrays, strings, numbers, booleans, or null.",
    },
  },
  {
    id: "custom-errors",
    number: "Chapter 58",
    title: "Custom Errors",
    universeTitle: "Errors carry meaning through throw and catch",
    intro:
      "Custom errors help production code explain what failed. throw sends the error to the nearest matching catch.",
    code: ["try {", '  throw new Error("Missing token");', "} catch (error) {", "  show(error.message);", "}"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      errorObj: { label: "Err", kind: "object", x: 38, y: 36 },
      message: { label: '"Missing token"', kind: "string", x: 72, y: 36 },
      error: { label: "error", kind: "variable-wide", x: 16, y: 70 },
      shown: { label: "shown", kind: "string", x: 72, y: 70 },
    },
    steps: [
      {
        title: "Create an Error object",
        description:
          'new Error("Missing token") creates an Error object with a message.',
        line: 1,
        visible: ["errorObj", "message"],
        wires: [
          { id: "errorObj-message", from: "errorObj", to: "message", label: "message", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["errorObj", "message"],
      },
      {
        title: "throw sends the error",
        description:
          "throw stops the current path and sends the Error object to catch.",
        line: 1,
        visible: ["errorObj", "message"],
        wires: [
          { id: "errorObj-message", from: "errorObj", to: "message", label: "message", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["errorObj"],
      },
      {
        title: "catch receives it",
        description:
          "The catch variable error points to the thrown Error object.",
        line: 2,
        visible: ["error", "errorObj", "message"],
        wires: [
          { id: "error-errorObj", from: "error", to: "errorObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "errorObj-message", from: "errorObj", to: "message", label: "message", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["error", "errorObj"],
      },
      {
        title: "Code reads the message",
        description:
          "error.message gives useful human-readable context for logging or UI.",
        line: 3,
        visible: ["error", "errorObj", "message", "shown"],
        wires: [
          { id: "error-errorObj", from: "error", to: "errorObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "errorObj-message", from: "errorObj", to: "message", label: "message", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["message"],
      },
    ],
    quiz: {
      prompt: "Why use Error objects?",
      options: ["carry failure context", "avoid catch", "make strings disappear"],
      answer: "carry failure context",
      correct: "Correct. Error objects carry information about what failed.",
      wrong: "Not quite. Error objects make failures easier to understand and handle.",
    },
  },
  {
    id: "private-fields",
    number: "Chapter 59",
    title: "Private Fields",
    universeTitle: "Private fields hide object internals",
    intro:
      "Private fields are useful when a class needs internal state that outside code should not read or change directly.",
    code: ["class Counter {", "  #count = 0;", "  increment() { this.#count++; }", "}"],
    legend: ["variable", "object", "property", "value"],
    nodes: {
      counter: { label: "counter", kind: "variable-wide", x: 16, y: 42 },
      obj: { label: "{ }", kind: "object", x: 44, y: 42 },
      zero: { label: "0", kind: "value", x: 72, y: 42 },
      one: { label: "1", kind: "value", x: 72, y: 72 },
      outside: { label: "outside", kind: "variable-wide", x: 16, y: 82 },
    },
    steps: [
      {
        title: "Instance has private state",
        description:
          "counter points to an object. The object has a private #count field.",
        line: 1,
        visible: ["counter", "obj", "zero"],
        wires: [
          { id: "counter-obj", from: "counter", to: "obj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "obj-zero", from: "obj", to: "zero", label: "#count", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["obj", "zero"],
      },
      {
        title: "Method can access it",
        description:
          "Class methods can read and update #count.",
        line: 2,
        visible: ["counter", "obj", "zero", "one"],
        wires: [
          { id: "counter-obj", from: "counter", to: "obj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "obj-one", from: "obj", to: "one", label: "#count", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["obj", "one"],
      },
      {
        title: "Outside code cannot wire to it directly",
        description:
          "Private fields are intentionally hidden from outside code. Use methods to interact with them.",
        line: 1,
        visible: ["outside", "obj", "one"],
        wires: [
          { id: "obj-one", from: "obj", to: "one", label: "#count", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["outside"],
      },
    ],
    quiz: {
      prompt: "Who can access #count directly?",
      options: ["the class body", "any object", "CSS"],
      answer: "the class body",
      correct: "Correct. Private fields are accessible only inside the class body.",
      wrong: "Not quite. Outside code must use public methods.",
    },
  },
  {
    id: "dynamic-import",
    number: "Chapter 60",
    title: "Dynamic Import",
    universeTitle: "import() loads modules later",
    intro:
      "Dynamic import is useful when production apps want to load code only when needed, such as a heavy settings panel or charting tool.",
    code: ['let toolsPromise = import("./tools.js");', "let tools = await toolsPromise;", "tools.format();"],
    legend: ["variable", "object", "wire", "value"],
    nodes: {
      importCall: { label: "import()", kind: "variable-wide", x: 16, y: 34 },
      promise: { label: "P", kind: "object", x: 46, y: 34 },
      toolsPromise: { label: "toolsPromise", kind: "variable-wide", x: 16, y: 58 },
      tools: { label: "tools", kind: "variable-wide", x: 16, y: 84 },
      moduleObj: { label: "mod", kind: "object", x: 46, y: 84 },
      format: { label: "fn", kind: "object", x: 74, y: 84 },
    },
    steps: [
      {
        title: "import starts loading",
        description:
          "import('./tools.js') starts loading a module and returns a Promise.",
        line: 0,
        visible: ["importCall", "promise"],
        wires: [
          { id: "importCall-promise", from: "importCall", to: "promise", label: "returns", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["importCall", "promise"],
      },
      {
        title: "Store the Promise",
        description:
          "toolsPromise points to the Promise while the module is still loading.",
        line: 0,
        visible: ["toolsPromise", "promise"],
        wires: [
          { id: "toolsPromise-promise", from: "toolsPromise", to: "promise", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["toolsPromise", "promise"],
      },
      {
        title: "await gives the module object",
        description:
          "When the Promise resolves, tools points to the module namespace object.",
        line: 1,
        visible: ["toolsPromise", "promise", "tools", "moduleObj"],
        wires: [
          { id: "toolsPromise-promise", from: "toolsPromise", to: "promise", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "tools-moduleObj", from: "tools", to: "moduleObj", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["tools", "moduleObj"],
      },
      {
        title: "Use exported functions",
        description:
          "The module object exposes exports like format. Code can call them after the module loads.",
        line: 2,
        visible: ["tools", "moduleObj", "format"],
        wires: [
          { id: "tools-moduleObj", from: "tools", to: "moduleObj", tone: "slate", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
          { id: "moduleObj-format", from: "moduleObj", to: "format", label: "format", tone: "orange", fromAnchor: { side: "right" }, toAnchor: { side: "left" } },
        ],
        active: ["moduleObj", "format"],
      },
    ],
    quiz: {
      prompt: "What does import() return first?",
      options: ["a Promise", "the final module immediately", "a string only"],
      answer: "a Promise",
      correct: "Correct. Dynamic import returns a Promise for the module.",
      wrong: "Not quite. import() loads asynchronously and returns a Promise.",
    },
  },
];

const lessons = [...practicalLessons, ...conceptLessons];

const initialState = getInitialState();

const state = {
  lessonIndex: initialState.lessonIndex,
  step: initialState.step,
  isPlaying: false,
  timer: null,
};

const dom = {
  chapterPicker: document.querySelector("#chapter-picker"),
  chapterTrigger: document.querySelector("#chapter-trigger"),
  chapterTriggerLabel: document.querySelector("#chapter-trigger-label"),
  chapterMenu: document.querySelector("#chapter-menu"),
  chapterSearch: document.querySelector("#chapter-search"),
  chapterOptions: document.querySelector("#chapter-options"),
  lessonIntro: document.querySelector("#lesson-intro"),
  code: document.querySelector("#lesson-code"),
  universeTitle: document.querySelector("#universe-title"),
  legend: document.querySelector("#legend"),
  stage: document.querySelector("#stage"),
  wireLayer: document.querySelector("#wire-layer"),
  wireLabelLayer: document.querySelector("#wire-label-layer"),
  noteLayer: document.querySelector("#note-layer"),
  stepCount: document.querySelector("#step-count"),
  stepTitle: document.querySelector("#step-title"),
  stepDescription: document.querySelector("#step-description"),
  prevButton: document.querySelector("#prev-step"),
  nextButton: document.querySelector("#next-step"),
  playButton: document.querySelector("#play-step"),
  resetButton: document.querySelector("#reset-step"),
  themeToggle: document.querySelector("#theme-toggle"),
  quizCard: document.querySelector("#quiz-card"),
  quizPrompt: document.querySelector("#quiz-prompt"),
  quizOptions: document.querySelector("#quiz-options"),
  quizFeedback: document.querySelector("#quiz-feedback"),
};

const chapterGroups = [
  { label: "Mental model library: foundations", from: 1, to: 12 },
  { label: "Mental model library: objects and functions", from: 13, to: 24 },
  { label: "Mental model library: browser and apps", from: 25, to: 36 },
  { label: "Mental model library: production patterns", from: 37, to: 46 },
  { label: "Mental model library: modern JavaScript", from: 47, to: 60 },
];

const toneClasses = {
  orange: { path: "stroke-orange-500", fill: "fill-orange-500" },
  cyan: { path: "stroke-cyan-700", fill: "fill-cyan-700" },
  slate: { path: "stroke-slate-500", fill: "fill-slate-500" },
};

const legendIconClass = {
  variable: "legend-variable-icon",
  object: "legend-object-icon",
  property: "legend-property-icon",
  value: "legend-value-icon",
  wire: "legend-wire-icon",
};

const progressStorageKey = "playful-js-session-progress";
const themeStorageKey = "playful-js-theme";

function getInitialState() {
  const params = new URLSearchParams(window.location.search);
  const hasChapterParam = params.has("chapter");
  const hasStepParam = params.has("step");
  const savedProgress = hasChapterParam || hasStepParam ? null : readSavedProgress();
  const lessonParam = hasChapterParam ? Number(params.get("chapter")) : savedProgress?.lessonIndex;
  const stepParam = hasStepParam ? Number(params.get("step")) : savedProgress?.step;
  const lessonIndex = isValidLessonIndex(lessonParam) ? lessonParam : 0;
  const maxStep = lessons[lessonIndex].steps.length - 1;
  const step =
    Number.isInteger(stepParam) && stepParam >= 0 && stepParam <= maxStep
      ? stepParam
      : 0;

  return { lessonIndex, step };
}

function isValidLessonIndex(index) {
  return Number.isInteger(index) && index >= 0 && index < lessons.length;
}

function readSavedProgress() {
  try {
    const raw = sessionStorage.getItem(progressStorageKey);
    if (!raw) return null;

    const progress = JSON.parse(raw);
    return {
      lessonIndex: Number(progress.lessonIndex),
      step: Number(progress.step),
    };
  } catch {
    return null;
  }
}

function saveProgress() {
  try {
    sessionStorage.setItem(
      progressStorageKey,
      JSON.stringify({ lessonIndex: state.lessonIndex, step: state.step }),
    );
  } catch {
    // Progress saving is optional. The lesson should still work if storage is unavailable.
  }
}

function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function saveTheme(theme) {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Theme saving is optional. The toggle still works for the current page view.
  }
}

function setTheme(theme, { persist = true } = {}) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  dom.themeToggle.setAttribute("aria-pressed", String(isDark));
  dom.themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  if (persist) saveTheme(theme);
}

function syncProgressUrl() {
  const params = new URLSearchParams(window.location.search);
  params.set("chapter", String(state.lessonIndex));
  params.set("step", String(state.step));

  const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  if (nextUrl !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
    window.history.replaceState(null, "", nextUrl);
  }
}

function currentLesson() {
  return lessons[state.lessonIndex];
}

function currentStep() {
  return currentLesson().steps[state.step];
}

function getNodeElement(id) {
  return dom.stage.querySelector(`[data-node-id="${id}"]`);
}

function setNodePosition(element, node) {
  element.style.left = `${node.x}%`;
  element.style.top = `${node.y}%`;
}

function lessonDisplayNumber(index) {
  return `Chapter ${index + 1}`;
}

function conceptLessonNumber(lesson) {
  return Number(lesson.number.replace(/\D/g, ""));
}

function getLessonGroup(lesson) {
  if (lesson.section) return lesson.section;

  const number = conceptLessonNumber(lesson);
  return chapterGroups.find((group) => number >= group.from && number <= group.to)?.label || "Additional tracks";
}

function lessonMatchesSearch(lesson, index, query) {
  if (!query) return true;

  const searchable = [
    lessonDisplayNumber(index),
    lesson.number,
    lesson.title,
    lesson.universeTitle,
    lesson.intro,
    getLessonGroup(lesson),
  ]
    .join(" ")
    .toLowerCase();

  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((part) => searchable.includes(part));
}

function renderChapterSelect() {
  const query = dom.chapterSearch.value.trim();
  const matches = lessons
    .map((lesson, index) => ({ lesson, index, group: getLessonGroup(lesson) }))
    .filter(({ lesson, index }) => lessonMatchesSearch(lesson, index, query));
  const grouped = matches.reduce((groups, item) => {
    const group = groups.get(item.group) || [];
    group.push(item);
    groups.set(item.group, group);
    return groups;
  }, new Map());

  dom.chapterOptions.innerHTML = matches.length
    ? Array.from(grouped.entries())
      .map(
        ([group, items]) => `
          <div class="chapter-group">
            <p class="chapter-group-label">${group}</p>
            ${items
              .map(
                ({ lesson, index }) => `
                  <button class="chapter-option" type="button" role="option" data-lesson-index="${index}">
                    <span>${lessonDisplayNumber(index)}</span>
                    <strong>${lesson.title}</strong>
                  </button>
                `,
              )
              .join("")}
          </div>
        `,
      )
      .join("")
    : `<p class="chapter-empty">No chapters match "${escapeHtml(query)}".</p>`;

  dom.chapterOptions.querySelectorAll("[data-lesson-index]").forEach((button) => {
    button.addEventListener("click", () => {
      stopPlayback();
      goToChapter(Number(button.dataset.lessonIndex));
    });
  });
}

function renderLessonShell() {
  const lesson = currentLesson();

  dom.chapterTriggerLabel.textContent = `${lessonDisplayNumber(state.lessonIndex)}: ${lesson.title}`;
  dom.lessonIntro.textContent = lesson.intro;
  dom.universeTitle.textContent = lesson.universeTitle;

  dom.code.innerHTML = lesson.code
    .map((line, index) => `<span class="code-line" data-line="${index}">${escapeHtml(line)}</span>`)
    .join("\n");

  dom.legend.innerHTML = lesson.legend
    .map(
      (item) => `
        <span class="legend-item">
          <i class="${legendIconClass[item] || "legend-value-icon"}"></i>
          ${item}
        </span>
      `,
    )
    .join("");

  dom.stage.innerHTML = Object.entries(lesson.nodes)
    .map(([id, node]) => {
      const kindClass = `${node.kind}-node`;
      return `
        <div class="diagram-node ${kindClass} is-hidden-node" data-node-id="${id}">
          <span class="node-text">${escapeHtml(node.label)}</span>
        </div>
      `;
    })
    .join("");

  Object.entries(lesson.nodes).forEach(([id, node]) => {
    setNodePosition(getNodeElement(id), node);
  });

  dom.quizPrompt.textContent = lesson.quiz.prompt;
  dom.quizOptions.innerHTML = lesson.quiz.options
    .map((option) => `<button class="quiz-button" type="button" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`)
    .join("");

  dom.quizOptions.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const isCorrect = button.dataset.answer === currentLesson().quiz.answer;
      resetQuiz();
      button.classList.add(isCorrect ? "is-correct-answer" : "is-wrong-answer");
      dom.quizFeedback.textContent = isCorrect ? currentLesson().quiz.correct : currentLesson().quiz.wrong;
    });
  });
}

function openChapterMenu() {
  dom.chapterPicker.classList.add("is-open");
  dom.chapterMenu.classList.remove("hidden");
  dom.chapterTrigger.setAttribute("aria-expanded", "true");
  renderChapterSelect();
  renderChapterMenuState();
  scrollActiveChapterIntoView();
  window.setTimeout(() => dom.chapterSearch.focus(), 0);
}

function closeChapterMenu() {
  dom.chapterPicker.classList.remove("is-open");
  dom.chapterMenu.classList.add("hidden");
  dom.chapterTrigger.setAttribute("aria-expanded", "false");
}

function toggleChapterMenu() {
  if (dom.chapterPicker.classList.contains("is-open")) {
    closeChapterMenu();
    return;
  }

  openChapterMenu();
}

function renderChapterMenuState() {
  dom.chapterOptions.querySelectorAll("[data-lesson-index]").forEach((button) => {
    const isActive = Number(button.dataset.lessonIndex) === state.lessonIndex;
    button.classList.toggle("is-active-chapter", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function scrollActiveChapterIntoView() {
  const activeChapter = dom.chapterOptions.querySelector(".is-active-chapter");
  if (!activeChapter) return;

  const menuRect = dom.chapterMenu.getBoundingClientRect();
  const activeRect = activeChapter.getBoundingClientRect();
  const searchSpace = dom.chapterSearch.closest(".chapter-search-wrap")?.offsetHeight || 0;
  const topPadding = searchSpace + 8;

  dom.chapterMenu.scrollTop += activeRect.top - menuRect.top - topPadding;
}

function syncSvgViewport() {
  const rect = document.querySelector(".stage-wrap").getBoundingClientRect();
  [dom.wireLayer, dom.wireLabelLayer].forEach((layer) => {
    layer.setAttribute("width", rect.width);
    layer.setAttribute("height", rect.height);
    layer.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
  });
}

function getNodeBox(nodeElement) {
  const stageRect = document.querySelector(".stage-wrap").getBoundingClientRect();
  const rect = nodeElement.getBoundingClientRect();

  return {
    left: rect.left - stageRect.left,
    right: rect.right - stageRect.left,
    top: rect.top - stageRect.top,
    bottom: rect.bottom - stageRect.top,
    width: rect.width,
    height: rect.height,
    centerX: rect.left + rect.width / 2 - stageRect.left,
    centerY: rect.top + rect.height / 2 - stageRect.top,
  };
}

function getAnchor(box, anchor) {
  const offset = anchor?.offset || 0;

  if (anchor?.side === "left") {
    return { x: box.left, y: box.centerY + offset };
  }

  if (anchor?.side === "right") {
    return { x: box.right, y: box.centerY + offset };
  }

  if (anchor?.side === "top") {
    return { x: box.centerX + offset, y: box.top };
  }

  if (anchor?.side === "bottom") {
    return { x: box.centerX + offset, y: box.bottom };
  }

  return null;
}

function getAnchorPair(fromNode, toNode, wire) {
  const fromBox = getNodeBox(fromNode);
  const toBox = getNodeBox(toNode);
  const explicitFrom = getAnchor(fromBox, wire.fromAnchor);
  const explicitTo = getAnchor(toBox, wire.toAnchor);

  if (explicitFrom && explicitTo) {
    return { from: explicitFrom, to: explicitTo };
  }

  const dx = toBox.centerX - fromBox.centerX;
  const dy = toBox.centerY - fromBox.centerY;
  const horizontal = Math.abs(dx) >= Math.abs(dy);

  if (horizontal) {
    return {
      from: {
        x: dx >= 0 ? fromBox.right : fromBox.left,
        y: fromBox.centerY,
      },
      to: {
        x: dx >= 0 ? toBox.left : toBox.right,
        y: toBox.centerY,
      },
    };
  }

  return {
    from: {
      x: fromBox.centerX,
      y: dy >= 0 ? fromBox.bottom : fromBox.top,
    },
    to: {
      x: toBox.centerX,
      y: dy >= 0 ? toBox.top : toBox.bottom,
    },
  };
}

function makePath(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.max(48, Math.abs(dx) * 0.35);

  if (Math.abs(dx) >= Math.abs(dy)) {
    return `M ${from.x} ${from.y} C ${from.x + distance} ${from.y}, ${to.x - distance} ${to.y}, ${to.x} ${to.y}`;
  }

  const verticalDistance = Math.max(48, Math.abs(dy) * 0.35);
  return `M ${from.x} ${from.y} C ${from.x} ${from.y + verticalDistance}, ${to.x} ${to.y - verticalDistance}, ${to.x} ${to.y}`;
}

function drawWire(wire) {
  const geometry = getWireGeometry(wire);

  if (!geometry) return "";

  return `
    <path class="wire ${geometry.tone.path} opacity-100" d="${makePath(geometry.from, geometry.to)}"></path>
  `;
}

function drawWireLabel(wire) {
  const geometry = getWireGeometry(wire);

  if (!geometry) return "";

  const socket = `
    <circle
      class="wire-socket ${geometry.tone.fill}"
      cx="${geometry.to.x}"
      cy="${geometry.to.y}"
      r="7"
    ></circle>
  `;

  if (!wire.label) return socket;

  const labelWidth = Math.max(52, wire.label.length * 8 + 18);
  const labelHeight = 26;
  const labelX = geometry.label.x;
  const labelY = geometry.label.y;

  return `
    <g data-wire-label-id="${wire.id}">
      ${socket}
      <rect
        class="wire-label-bg"
        x="${labelX - labelWidth / 2}"
        y="${labelY - labelHeight / 2}"
        width="${labelWidth}"
        height="${labelHeight}"
        rx="8"
      ></rect>
      <text class="wire-label" x="${labelX}" y="${labelY}">${escapeHtml(wire.label)}</text>
    </g>
  `;
}

function getWireGeometry(wire) {
  const fromNode = getNodeElement(wire.from);
  const toNode = getNodeElement(wire.to);

  if (!fromNode || !toNode) return null;

  const { from, to } = getAnchorPair(fromNode, toNode, wire);
  const tone = toneClasses[wire.tone] || toneClasses.slate;

  return {
    from,
    to,
    tone,
    label: {
      x: (from.x + to.x) / 2 + (wire.labelOffset?.x || 0),
      y: (from.y + to.y) / 2 - 10 + (wire.labelOffset?.y || 0),
    },
  };
}

function renderNotes(notes = []) {
  dom.noteLayer.innerHTML = notes
    .map(
      (note) => `
        <div class="floating-note is-visible" style="left: ${note.x}%; top: ${note.y}%;">
          ${escapeHtml(note.text)}
        </div>
      `,
    )
    .join("");
}

function render() {
  const lesson = currentLesson();
  const step = currentStep();
  saveProgress();
  syncProgressUrl();
  syncSvgViewport();
  renderChapterMenuState();

  dom.stepCount.textContent = `Step ${state.step + 1} of ${lesson.steps.length}`;
  dom.stepTitle.textContent = step.title;
  dom.stepDescription.textContent = step.description;

  dom.code.querySelectorAll("[data-line]").forEach((line) => {
    line.classList.toggle("is-active-line", Number(line.dataset.line) === step.line);
  });

  Object.keys(lesson.nodes).forEach((id) => {
    const node = getNodeElement(id);
    const isVisible = step.visible.includes(id);
    node.classList.toggle("is-hidden-node", !isVisible);
    node.classList.toggle("is-active-node", step.active?.includes(id));
    node.classList.toggle("is-muted-node", step.muted?.includes(id));
  });

  dom.wireLayer.innerHTML = step.wires.map(drawWire).join("");
  dom.wireLabelLayer.innerHTML = step.wires.map(drawWireLabel).join("");
  renderNotes(step.notes);

  dom.quizCard.classList.toggle("hidden", state.step !== lesson.steps.length - 1);
  dom.quizCard.classList.toggle("block", state.step === lesson.steps.length - 1);

  dom.prevButton.disabled = state.step === 0;
  dom.nextButton.disabled = state.step === lesson.steps.length - 1;
  dom.resetButton.disabled = state.step === 0;
  dom.playButton.textContent = state.isPlaying ? "Pause" : "Play";

  if (state.step !== lesson.steps.length - 1) {
    resetQuiz();
  }
}

function goToStep(step) {
  const maxStep = currentLesson().steps.length - 1;
  state.step = Math.max(0, Math.min(maxStep, step));
  render();
}

function goToChapter(lessonIndex) {
  state.lessonIndex = Math.max(0, Math.min(lessons.length - 1, lessonIndex));
  state.step = 0;
  closeChapterMenu();
  renderLessonShell();
  render();
}

function isTypingTarget(target) {
  return ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName) || target?.isContentEditable;
}

function stopPlayback() {
  state.isPlaying = false;
  window.clearInterval(state.timer);
  state.timer = null;
  render();
}

function togglePlayback() {
  if (state.isPlaying) {
    stopPlayback();
    return;
  }

  state.isPlaying = true;
  render();
  state.timer = window.setInterval(() => {
    if (state.step >= currentLesson().steps.length - 1) {
      stopPlayback();
      return;
    }

    state.step += 1;
    render();
  }, 1600);
}

function resetQuiz() {
  dom.quizFeedback.textContent = "";
  dom.quizOptions.querySelectorAll("[data-answer]").forEach((button) => {
    button.classList.remove("is-correct-answer", "is-wrong-answer");
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

dom.prevButton.addEventListener("click", () => {
  stopPlayback();
  goToStep(state.step - 1);
});

dom.nextButton.addEventListener("click", () => {
  stopPlayback();
  goToStep(state.step + 1);
});

dom.playButton.addEventListener("click", togglePlayback);

dom.resetButton.addEventListener("click", () => {
  stopPlayback();
  goToStep(0);
});

dom.themeToggle.addEventListener("click", () => {
  setTheme(getTheme() === "dark" ? "light" : "dark");
});

dom.chapterTrigger.addEventListener("click", toggleChapterMenu);

dom.chapterSearch.addEventListener("input", () => {
  renderChapterSelect();
  renderChapterMenuState();
});

document.addEventListener("click", (event) => {
  if (!dom.chapterPicker.contains(event.target)) {
    closeChapterMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (isTypingTarget(event.target)) return;

  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openChapterMenu();
    return;
  }

  if (event.key === "Escape") {
    closeChapterMenu();
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    stopPlayback();
    if (event.shiftKey) {
      goToChapter(state.lessonIndex - 1);
      return;
    }

    goToStep(state.step - 1);
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    stopPlayback();
    if (event.shiftKey) {
      goToChapter(state.lessonIndex + 1);
      return;
    }

    goToStep(state.step + 1);
  }
});

window.addEventListener("resize", render);

renderChapterSelect();
renderLessonShell();
setTheme(getTheme(), { persist: false });
render();
