const argv = require("yargs")
.options("b", {
  alias: "base",
  type: "number",
  demandOption: true,
  describe: 'Number to multiply'
})
.options("l", {
    alias: "list",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: 'Shows table in console'
})
.options("h", {
    alias: "height",
    type: "number",
    demandOption: false,
    default: 10,
    describe: 'The last number to multiply the base'
})
.check((argv, options) => {
  if (isNaN(argv.b)) {
    throw "base must be a number";
  }
  if (isNaN(argv.h)) {
    throw "height must be a number";
  }
  if(argv.h < 1){
      throw "height must be higher than 1";
  }
  
  return true;
}).argv;

module.exports = {
    argv
}