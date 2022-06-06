import { Router } from 'express';
const router = Router();

import * as Result from '../../controllers/mongo/result.controller.js';

router.get('/api/result/', Result.getAll)

export default router;