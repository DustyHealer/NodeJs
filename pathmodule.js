const path = require("node:path");

const a1 = path.basename("C:\\temp\\myfile.html");
// Returns: 'myfile.html'
console.log(a1);

const a2 = path.dirname("C:\\temp\\myfile.html");
console.log(a2);

const a3 = path.extname(__filename);
console.log(__filename, a3);
