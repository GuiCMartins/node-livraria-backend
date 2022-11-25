import livros from '../models/Livro.js';

const useLivrosController = () => {
  const get = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).send(livros);
    });
  };

  return { get };
};

export default useLivrosController;
