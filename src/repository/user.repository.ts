import pool from '../db'
import { iUser } from '../interfaces/index';

async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    const sql = 'INSERT INTO users (name, surname, email, pwd) values ($1,$2,$3,$4) returning *';
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
}

async function getUserByIdDB(id: number): Promise <iUser[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users WHERE id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

async function getAllUserDB(): Promise <iUser[]> {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users';
    const result = (await client.query(sql)).rows;
    return result;
}

export { createUserDB, getAllUserDB, getUserByIdDB };