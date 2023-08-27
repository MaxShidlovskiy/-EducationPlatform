import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import user from "../src/controller/user.controller";
import course from './controller/course.controller';
import api from "./controller/api.controller";

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use('/user', user)
app.use('/course', course)
app.use('/api', api)


app.use((err, req: Request, res: Response, _nest: NextFunction) => {
    res.send(err.message);
})
export default app;