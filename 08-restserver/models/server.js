import express from 'express';
import cors from 'cors';
import routes from '../routes/index.js';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.middlewares();
    this.routes();
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