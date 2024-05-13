// importing simple js modules
// const simple = require("./modulesecond.mjs");

// importing es6 module - will match the name simple, simple2 inside modulesecond
// import { simple as func1, simple2 as func2 } from "./modulesecond.mjs";

// func1();
// func2();

// importing default modules - can be imported without {brackets} - will not match the name inside modulesecond
// import simple23 from "./modulesecond.mjs";

// simple23();

import * as a2 from "./modulesecond.mjs";

console.log(a2);
a2.simple();
a2.default();