import { registrationDB, getByEmail } from '../repository/api.repository'
import { iUser } from '../interfaces';
import bcrypt from 'bcrypt';

async function registration(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const salt = 3;
    const data = await getByEmail(email);
    if (data.length) throw new Error(`этот email уже зарегестрирован`);
    const pwd_hashed = await bcrypt.hash(pwd, salt);
    const result = await registrationDB(name, surname, email, pwd_hashed);
    return result;
}

async function authorizationUser(email: string, pwd: string) {
    const userFound = await getByEmail(email);
    if (!userFound.length) throw new Error(`юзера с таким email не существует`);
    const isMatch = await bcrypt.compare(pwd, userFound[0].pwd);
    if (!isMatch) throw new Error('пароли не совпадают');
    return userFound
};


export { registration, authorizationUser }