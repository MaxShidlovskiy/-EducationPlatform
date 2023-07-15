import pool from "../db"
import {iCourse} from "../interfaces/index"

async function getCourseDB():Promise<iCourse[]>{
    const client = await pool.connect();
    const sql = `SELECT * FROM courses`;
    const result = (await client.query(sql)).rows;
    return result;
}

export {getCourseDB
