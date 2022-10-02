import { Sequelize } from 'sequelize';


const db = new Sequelize('db_test','root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: Number(process.env.DB_PORT)
})

export default db;