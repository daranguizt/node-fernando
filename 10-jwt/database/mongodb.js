import 'dotenv/config';
import mongoose from 'mongoose';

const buildUrlConnectionString = (username, password) => {
  return `mongodb+srv://${username}:${password}@cluster0.dpqr470.mongodb.net/?retryWrites=true&w=majority`
}

class DB {
  constructor(databaseName) {
    this.connectionString = buildUrlConnectionString(
      process.env.DB_USER, process.env.DB_PASSWORD
    );
    this.databaseName = databaseName;
  }

  async connect() {
    try{
      await mongoose.connect(this.connectionString, {
        autoIndex: true,
        dbName: this.databaseName,
      });
    }catch(e){
      console.error(e);
      throw new Error(`Couldn't connect to the database`);
    }
  }
}

export default DB;