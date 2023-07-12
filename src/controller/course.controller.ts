
const course = express.Router();

course.get('/', async (req:Request, res:Response)=>{
    try {
        const data = await getCourse();
        buildResponse(res, 200, data);
    } catch (error:any) {
        buildResponse(res, 400, error.message)
    }
})