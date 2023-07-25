import express, {Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import user from "../src/controller/user.controller";
import course from './controller/course.controller';

const app = express();
app.use(bodyParser.json());
app.use('/user', user)
app.use('/course', course)

app.use((err, req:Request, res:Response, _nest:NextFunction) => {
    res.send(err.message);
})
export default app;