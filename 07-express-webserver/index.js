import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import hbs from 'hbs';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.DEFAULT_PORT || 8080;

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático, las rutas las saca desde las carpetas definidas
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Curso de Node',
    subtitle: {
      big: 'Handlebars',
      small: 'TEST',
    }
  })
})

app.get('/generic', (req, res) => {
  res.render('generic');
})

app.get('/elements', (req, res) => {
  res.render('elements');
})

app.get('/hello-world', (req, res) => {
  res.send('hello-world');
})

app.get('*', (req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});