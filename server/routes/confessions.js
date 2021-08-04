import express from 'express';
import { getConfessions, createConfession, updateConfession, deleteConfession } from '../controllers/confessions.js';

const router = express.Router();

router.get('/', getConfessions);
router.post('/', createConfession);
router.patch('/:id', updateConfession);
router.delete('/:id', deleteConfession);



export default router;