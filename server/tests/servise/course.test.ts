import { createCourse, getAllCourse, getCourseById, updateCourse, deleteCourseById } from '../../src/service/course.service';
import * as repository from '../../src/repository/course.repository';

describe('createCourse', () => {
    test('seccess', async () => {
        const funcRepo = jest.spyOn(repository, 'createCourseDB');
        funcRepo.mockResolvedValue([{ id: 1, course: 'course' }]);

        const result = await createCourse('course');

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: 'course' }]);
        expect(result).toHaveLength(1);

    })
    test('error', async () => {
        const funcRepo = jest.spyOn(repository, 'createCourseDB');
        funcRepo.mockResolvedValue([]);
        try {
          await createCourse('course');
        } catch (error:any) {
            expect(funcRepo).toHaveBeenCalled();
            expect(error.message).toBe(`курс не сохранен`);
        }
    })
})

describe('getAllCourse', () => {
    test('seccess', async () => {
        const funcRepo = jest.spyOn(repository, 'getCourseDB');
        funcRepo.mockResolvedValue([{ id: 1, course: 'course' }, { id: 2, course: 'course' }]);

        const result = await getAllCourse()

        expect(funcRepo).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'course' }, { id: 2, course: 'course' }]);
        expect(result.length).toBeGreaterThan(0)
    });
});

describe('getCourseById', () => {
    test('success', async () => {
        const funcRepo = jest.spyOn(repository, 'getCourseByIdDB');
        funcRepo.mockResolvedValue([{ id: 1, course: 'test_course' }])

        const result = await getCourseById(1);

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: 'test_course' }]);
        expect(result.length).toBeGreaterThan(0);
    });
});

describe('updateCourse function', () => {
    test('success', async () => {
        const funcRepo = jest.spyOn(repository, 'updateCourseDB');
        funcRepo.mockResolvedValue([{ id: 1, course: 'test_course1' }]);

        const result = await updateCourse(1, 'test_course1');

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: 'test_course1' }]);
        expect(result.length).toBeGreaterThan(0)
    })
})

describe('deleteCourseById', () => {
    test('seccess', async () => {
        const funcRepo = jest.spyOn(repository, 'deleteCourseByIdDB');
        funcRepo.mockResolvedValue([{ id: 1, course: 'course1' }]);

        const result = await deleteCourseById(1)

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: 'course1' }]);
        expect(result.length).toBeGreaterThan(0);
    })
})
