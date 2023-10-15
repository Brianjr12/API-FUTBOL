import { Router } from "express";
import {getAllTeams,getTeamAndCompetitionsTrophies,getTeamAndPlayers,getTeamById} from './getTeams.js'
import { createTeam } from "./createTeam.js";
import { deleteTeamById,deleteTeams } from "./deleteTeam.js";
const routerTeams = Router();

routerTeams.get("/teams", getAllTeams);
routerTeams.get("/team/:id", getTeamById);
routerTeams.get("/team/players/:id", getTeamAndPlayers);
routerTeams.get("/team/competitions/:id", getTeamAndCompetitionsTrophies);

// * Updates
routerTeams.post("/team", createTeam);

// * delete
routerTeams.delete("/team", deleteTeams)
routerTeams.delete("/team/:id", deleteTeamById)

export default routerTeams;