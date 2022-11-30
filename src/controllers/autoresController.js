import autores from '../models/Autor.js';

const useAutoresController = () => {
  const get = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).send(autores);
    });
  };

  const getById = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, livro) => {
      if (!err) {
        res.status(200).send(livro);
      } else {
        res.status(404).send({ message: `${err.message} - Id não encontrado` });
      }
    });
  };

  const post = (req, res) => {
    const autor = new autores(req.body);

    autor.save((err) => {
      if (!err) {
        res.status(201).send(autor.toJSON());
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar autor` });
      }
    });
  };

  const put = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Autor atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  const remove = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Autor removido com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  return { get, getById, post, put, remove };
};

export default useAutoresController;
