const fs = require("fs");
const colors = require("colors");

const colorArray = ["rainbow", "grey", "cyan", "yellow", "blue", "red"];

const createFile = async (base = 5, list = false, height) => {
  try {
    let salida = "";
    let consoleString = "";

    for (let i = 1; i <= height; i++) {
      const str = `${base} x ${i} = ${base * i}\n`;
      consoleString += str[colorArray[i % colorArray.length]];
      salida += str;
    }

    if (list) {
      console.log("#######################################");
      console.log(`         Tabla del ${base}`);
      console.log("######################################");
      console.log(consoleString);
    }

    const fileName = `salida/tabla-${base}.txt`;
    fs.writeFileSync(fileName, salida);
    return fileName;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
