const { createFile } = require("./helpers/multiply");
const {argv} = require('./config/yargs');

const { base, list, height } = argv;

createFile(base, list, height )
  .then((msg) => console.log(msg, "created"))
  .catch((err) => console.log(err));
