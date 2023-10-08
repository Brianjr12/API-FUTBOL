import { Router } from "express";
import {getAllTeams,getTeamById,getTeamAndPlayers,getTeamAndCompetitionsTrophies} from '../controllers/teamsController/teamsControllers.js'
const router = Router();

router.get("/teams", getAllTeams);
router.get("/team/:id", getTeamById);
router.get("/team/players/:id", getTeamAndPlayers);
router.get("/team/competitions/:id", getTeamAndCompetitionsTrophies);


export default router;
