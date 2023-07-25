import express, { Request, Response } from 'express'
import { updateCourse, getAllCourse, getCourseById, createCourse, deleteCourseById } from '../service/course.service'
import { buildResponse } from '../helper/buildResponse';
import isValidCourseBody from '../helper/validation';

const course = express.Router();

course.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllCourse();
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 400, error.message)
    }
});

course.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await getCourseById(id);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 400, error.message)
    }
});

course.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { course } = req.body;
        const data = await updateCourse(id, course);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 400, error.message)
    }
});

course.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await deleteCourseById(id);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 400, error.message)
    }
});

course.post('/', isValidCourseBody, async (req: Request, res: Response) => {
    try {
        const { course } = req.body;
        const data = await createCourse(course);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 400, error.message)
    }
})

export default course;