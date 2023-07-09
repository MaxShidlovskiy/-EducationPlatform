import express from 'express';
import { createUser, getAllUsers, getUserById } from '../service/user.service';

const route = express.Router();

route.get('/', async (req, res,): Promise<void> => {
    try {
        const data = await getAllUsers()
        buildResponse(res, 200, data)
    } catch (err: any) {
        res.send(err.message)
    }
})

route.get(`/:id`, async (req, res): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        buildResponse(res, 200, data)
    } catch (err: any) {
        res.send(err.message)
    }
})

route.post('/', async (req, res): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = await createUser(name, surname, email, pwd)
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
})

export default route;