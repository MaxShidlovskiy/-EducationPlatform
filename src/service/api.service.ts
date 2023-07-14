import {registrationDB, getByEmail} from '../repository/api.repository'
import { iUser } from '../interfaces';
import bcrypt from 'bcrypt';

async function registration(name:string, surname:string, email:string, pwd:string):Promise<iUser[]>{
    const salt = 3;
    const pwd_hashed = await bcrypt.hash(pwd, salt);
    const data = await getByEmail(email);
    if(data.length) throw new Error(`Такой email уже зарегестрирован`);
    const result = registrationDB(name, surname, email, pwd_hashed);
    return result;
}