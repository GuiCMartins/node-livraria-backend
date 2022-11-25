import express from 'express';
import useLivrosController from '../controllers/livrosController.js';

const router = express.Router();
const livrosController = useLivrosController();

const url = '/livros';

router
  .get(url, livrosController.get)
  .get(`${url}/:id`, livrosController.getById)
  .post(url, livrosController.post)
  .put(`${url}/:id`, livrosController.put)
  .delete(`${url}/:id`, livrosController.remove);

export default router;
