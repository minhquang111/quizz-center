import { Router } from 'express';
const router = Router();
import * as Question from '../../controllers/mongo/question.controller.js';
const url = '/api/question';

router.delete(`${url}/:id`, Question.deleteById);

router.post(url, Question.create);

router.patch(`${url}/:id`, Question.updateById);

export default router;
