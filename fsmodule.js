const fs = require("node:fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   setTimeout(() => {
//     console.log(err, data);
//   }, 2000);
// });

const a = fs.readFileSync("file.txt");
console.log(a.toString());

// fs.writeFile("file2.txt", "This is a data", () => {
//   console.log("Written to the file");
// });

const b = fs.writeFileSync("file2.txt", "This is a data2");
console.log(b);
console.log("Finished reading file");
