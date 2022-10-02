import express, { Application } from 'express';
import cors from 'cors';
import router from '../routes';
import 'dotenv/config';
import db from '../db/connection';
import { ConnectionError } from 'sequelize/types';

class Server {

  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';
    this.routes();
    this.middlewares();
    this.connect();
  }

  async connect() {
    try {
      await db.authenticate();
      console.log('DB Connected');
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  routes() {
    this.app.use('/', router);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`app listening on port ${this.port}!`);
    })
  }
}

export default Server;