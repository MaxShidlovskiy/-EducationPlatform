import { getAllCourseDB } from '../repository/course.repository';

async function getAllCourse() {
    const data = await getAllCourseDB();
    if (!data.length) throw new Error(`база данных пустая`)
    return data;
}

async function getCourseById(id):Promise<iCourse[]>{
    const data = await getCourseByIdDB(id);
    if(!data.length) throw new Error(`no such id`);
    return data
}

export { getAllCourse };