import express, {Request, Response} from 'express';
import { createUser, getAllUsers, getUserById } from '../service/user.service';
import {buildResponse} from '../helper/buildResponse';

const route = express.Router();

route.get('/', async (req:Request, res:Response): Promise<void> => {
    try {
        const data = await getAllUsers()
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
})

route.get(`/:id`, async (req:Request, res:Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
})

route.post('/', async (req:Request, res:Response): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = await createUser(name, surname, email, pwd)
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
})

export default route;