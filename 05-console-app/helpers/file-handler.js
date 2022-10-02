import fs from 'fs';

const FILE_PATH = './db/data.json';

export const saveDB = (data) => {
  const file = fs.writeFileSync(FILE_PATH, JSON.stringify(data));
}

export const readDB = () => {
  if (!fs.existsSync(FILE_PATH)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(FILE_PATH, { encoding: 'utf8' }));

}