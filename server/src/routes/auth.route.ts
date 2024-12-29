import { Router } from 'express';
import { login, register, verify } from '../controllers/auth.controller';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify/:token', verify);

export default router;