import { pool } from "../../db/db.js";

export const getAllTeams = async (req, res) => {
  try {
    const [teams] = await pool.query("SELECT * FROM teams");
    res.status(200).json(teams);
  } catch (error) {
    console.log(error);
  }
};

export const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    const [team] = await pool.query("SELECT * FROM teams WHERE team_id = ?", [
      id,
    ]);
    res.status(200).json(team);
  } catch (error) {
    console.log(error);
  }
};

export const getTeamAndPlayers = async (req, res) => {
  try {
    const { id } = req.params;
    const [team] = await pool.query("SELECT * FROM teams WHERE team_id = ?", [
      id,
    ]);
    const [players] = await pool.query("SELECT * FROM players WHERE player_id = ?", [id])
    res.status(200).json([{ "team": team, "players": players }]);
  } catch (error) {
    console.log(error);
  }
};

export const getTeamAndCompetitionsTrophies = async (req,res) => {
  try {
    const { id } = req.params;
     const [team] = await pool.query("SELECT * FROM teams WHERE team_id = ?", [
      id,
     ]);
    
    const [competitions] = await pool.query('SELECT * FROM competitions WHERE competition_id = ?', [id]);

    const [trophies] = await pool.query("SELECT trophie_title, trophie_quantity FROM trophies WHERE trophie_id = ?", [id]);

    const data = {
      "team":team,
      "trophies":trophies,
      "competitions":competitions,
    }

    res.status(200).json([data])
    
  } catch (error) {
    console.log(error);
  }
  
};
