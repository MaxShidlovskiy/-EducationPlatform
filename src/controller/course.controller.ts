import express, { Request, Response } from 'express'
import { getCourse, getCourseById, createCourse, deleteCourseById } from '../service/course.service'
import buildResponse from '../helper/buildResponse';
import isValidCourseBody from '../helper/validation';

const course = express.Router();

course.get('/', async (req: Request, res: Response) => {
    try {
        const data = await getCourse();
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 400, error.message)
    }
});

course.get('/:id', async (req:Request, res:Response)=>{
    try {
        const {id} = req.params;
        const data = await getCourseById(id);
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message)
    }
});