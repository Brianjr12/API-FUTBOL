import { pool } from '../db/db.js'

export const select = async (req,res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM teams");
    const [rowsd] = await pool.query("SELECT * FROM players");
    res.json({"teams":rows,"players":rowsd})
  } catch (error) {
    console.log(error);
  }
  
}