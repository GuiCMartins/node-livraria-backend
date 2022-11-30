import express from 'express';
import useAutoresController from '../controllers/autoresController.js';

const router = express.Router();
const autoresController = useAutoresController();

const url = '/autores';

router
  .get(url, autoresController.get)
  .get(`${url}/:id`, autoresController.getById)
  .post(url, autoresController.post)
  .put(`${url}/:id`, autoresController.put)
  .delete(`${url}/:id`, autoresController.remove);

export default router;
