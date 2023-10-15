import { pool } from "../../db/db.js";

export const createTeam = async (req, res) => {
  try {
    const {
      team_name,
      team_country_origin,
      team_country_league,
      team_image,
      team_stadium,
    } = req.body;

    await pool.query(
      "INSERT INTO teams (team_name, team_country_origin, team_country_league, team_image, team_stadium) values(?,?,?,?,?)",
      [
        team_name,
        team_country_origin,
        team_country_league,
        team_image,
        team_stadium,
      ]
    );

    res.status(201).json({ message: "new team was created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
