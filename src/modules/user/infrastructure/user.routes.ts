import { Router } from 'express';
import { UserController } from './controllers/user.controller.js';

const router = Router();
const controller = new UserController();

// Definimos la ruta de registro
router.post('/register', (req, res) => controller.register(req, res));

export { router as userRouter };