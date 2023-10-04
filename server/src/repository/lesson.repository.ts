import pool from '../db';

async function createLessonDB(title: string, courseId: number) {
    console.log('+');
    const client = await pool.connect();
    console.log(client);

    const sql = `INSERT ITNO lessons(title, courseId) VALUES ($1,$2) returning*`
    const data = (await client.query(sql, [title, courseId])).rows;
    return data;
}

export { createLessonDB }