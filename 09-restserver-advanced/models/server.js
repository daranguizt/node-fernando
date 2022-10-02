import express from 'express';
import cors from 'cors';
import routes from '../routes/index.js';
import DB from '../database/mongodb.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.middlewares();
    this.routes();
    this.db = new DB('userDB');
    this.db.connect();
  }

  routes() {
    this.app.use('/', routes);
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`listening on port ${this.port}`);
    })
  }
}

export default Server;