import {Router} from 'express'
import { select } from '../controllers/teamsController.js';
const router = Router()

router.get("/",select)

export default router;