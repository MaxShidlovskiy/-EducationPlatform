import pool from "../db"
import { iCourse } from "../interfaces/index"

async function getCourseDB(): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM courses`;
    const result = (await client.query(sql)).rows;
    return result;
}

async function getCourseByIdDB(id): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `SELECT * FROM courses WHERE id=$1`;
    const data = (await client.query(sql, [id])).rows;
    return data;
}
async function createCourseDB(course: string, description: string): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `INSERT INTO courses (course, description) VALUES ($1,$2) RETURNING *`;
    const data = (await client.query(sql, [course, description])).rows;
    return data;
}

async function updateCourseDB(id: number, course: string, description: string): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `UPDATE courses SET course=$1, description= $2 WHERE id=$3 RETURNING *`;
    const data = (await client.query(sql, [course, description, id])).rows;
    return data;
}

async function deleteCourseByIdDB(id): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = `DELETE FROM courses WHERE id=$1 RETURNING *`;
    const data = (await client.query(sql, [id])).rows;
    return data;
}


export { getCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseByIdDB }
