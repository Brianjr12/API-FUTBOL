import { pool } from "../../db/db.js";

export const deleteTeams = async (req,res) => {
  try {
    await pool.query("DELETE FROM teams");
  } catch (error) {
    console.log(error);
  }
  
}


export const deleteTeamById = async (req,res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM teams WHERE team_id = ? ", [id]);
    res.status(204).send("team was deleted");
  } catch (error) {
    console.log(error);
  }
  
} 