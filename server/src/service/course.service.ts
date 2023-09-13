import { updateCourseDB, getCourseDB, getCourseByIdDB, createCourseDB, deleteCourseByIdDB } from '../repository/course.repository';
import { iCourse } from '../interfaces'

async function getAllCourse() {
    const data = await getCourseDB();
    if (!data.length) throw new Error(`база данных course пустая`)
    return data;
}

async function getCourseById(id): Promise<iCourse[]> {
    const data = await getCourseByIdDB(id);
    if (!data.length) throw new Error(`такого id нет`);
    return data
}

async function createCourse(course: string, description: string): Promise<iCourse[]> {
    const data = await createCourseDB(course, description);
    if (!data.length) throw new Error(`курс не сохранен`);
    return data;
}

async function updateCourse(id: number, course: string, description: string): Promise<iCourse[]> {
    const data = await updateCourseDB(id, course, description);
    if (!data.length) throw new Error(`курс не сохранен`);
    return data;
}

async function deleteCourseById(id): Promise<iCourse[]> {
    const data = await deleteCourseByIdDB(id);
    if (!data.length) throw new Error(`такого id нет`);
    return data
}

export { getAllCourse, getCourseById, createCourse, updateCourse, deleteCourseById };