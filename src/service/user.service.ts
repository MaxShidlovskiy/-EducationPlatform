import { createUserDB, getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB  } from '../repository/user.repository'
import { iUser } from '../interfaces/index';

async function getAllUser(): Promise<iUser[]> {
    const data = await getAllUserDB();
    if (!data.length) throw new Error(`база данных пустая`)
    return data
}

async function getUserById(id: number): Promise<iUser[]> {
    const data = await getUserByIdDB(id);
    if (!data.length) throw new Error(`такого ид нет`);
    return data;
}

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const data = await createUserDB(name, surname, email, pwd);
    if (!data.length) throw new Error(`бд не заполнена`)
    return data
}

async function updateUser(id: string, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const data = await updateUserDB(id, name, surname, email, pwd);
    if (!data.length) throw new Error(`такого id нет`)
    return data;
}

async function deleteUser(id:string): Promise<iUser[]> {
    const data = await deleteUserDB(id);
    if (!data.length) throw new Error(`такого id нет`)
    return data;
}

export { getAllUser, getUserById, createUser, updateUser , deleteUser}