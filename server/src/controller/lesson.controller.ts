import express, { Request, Response } from 'express';
import { buildResponse } from '../helper/buildResponse';
import { createLesson } from '../service/lesson.service';

const route = express.Router();

route.post(`/`, async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, courseId } = req.body;
        const data = await createLesson(title, courseId);
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 200, error.message)
    }
})

export default route