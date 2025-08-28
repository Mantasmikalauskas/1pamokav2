import express from 'express';
import * as controller from '../controllers/userController.js'

const router = express.Router();

router.get('/auth', controller.isAuthenticated);

router.post('/login', controller.loginUser);

router.post('/signup', controller.signupUser);

export default router;