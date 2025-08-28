import express from 'express';
import Workout from '../models/pratimoModelis.js'
import * as controller from '../controllers/controller.js'
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

router.use(requireAuth);

router.get('/', controller.getWorkouts);

router.get('/:id', controller.getWorkout);

router.post('/', controller.createWorkout);

router.patch('/:id', controller.updateWorkout);

router.delete('/:id', controller.deleteWorkout);

export default router;