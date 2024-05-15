import { Router } from 'express';
import { signUp, signIn } from '../controllers/auth.js';
//Route for authentication
const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

export default router;
