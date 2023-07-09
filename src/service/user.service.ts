import { createUserDB, getAllUsersDB, getUserByIdDB } from '../repository/user.repository'
import { iUser } from '../interfaces/index';

async function createUser(name: string, surname: string, email: string, pwd: string): Promise <iUser[]> {
    const data = await createUserDB(name, surname, email, pwd);
    if (!data.length) throw new Error(`такого id нет`)
    return data
}

async function getUserById(id: number): Promise <iUser[]> {
    const data = await getUserByIdDB(id);
    if (!data.length) throw new Error(`такого ид нет`);
    return data;
}

async function getAllUsers(): Promise <iUser[]> {
    const data = await getAllUsersDB();
    if (!data.length) throw new Error(`база данных пустая`)
    return data
}

export { createUser, getAllUsers, getUserById }