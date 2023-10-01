import { createLessonDB } from '../repository/lesson.repository'

async function createLesson(title: string, courseId: number) {
    const data = await createLessonDB(title, courseId);
    return data;
}

export { createLesson }