import express from 'express';
import db from './config/dbConnect.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('Conexão com banco feita com sucesso');
});

const app = express();

app.use(express.json());

const livros = [
  { id: 1, titulo: 'Senhor dso aneis' },
  { id: 2, titulo: 'O hobbit' },
];

app.get('/', (req, res) => {
  res.status(200).send('Curso de node');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);

  res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).json(livros);
});

app.put('/livros/:id', (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;

  res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
  const { id } = req.params;
  const index = buscaLivro(id);
  livros.splice(index, 1);

  res.status(200).json(livros);
});

const buscaLivro = (id) => {
  return livros.findIndex((livro) => livro.id == id);
};

export default app;
