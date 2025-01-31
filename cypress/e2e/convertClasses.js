const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const convertToCypressSelector = (input) => {
  return input
    .trim()
    .split(/\s+/)
    .map((className) => {
      return className
        .replace(/\./g, "\\.")
        .replace(/\[/g, "\\[")
        .replace(/\]/g, "\\]")
        .replace(/\:/g, "\\:")
        .replace(/\=/g, "\\=");
    })
    .join(".");
};

rl.question("Enter the string to convert: ", (input) => {
  const output = convertToCypressSelector(input);
  console.log(`Cypress-compatible selector:\n${output}`);
  rl.close();
});
