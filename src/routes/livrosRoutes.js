import express from 'express';
import useLivrosController from '../controllers/livrosController.js';

const router = express.Router();
const livrosController = useLivrosController();

router.get('/livros', livrosController.get);

export default router;
