import { createCourse, getAllCourse, getCourseById } from '../../src/service/course.service';
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

