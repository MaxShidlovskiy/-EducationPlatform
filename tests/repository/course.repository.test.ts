import { getCourseDB, createCourseDB, getCourseByIdDB, updateCourseDB, deleteCourseByIdDB } from '../../src/repository/course.repository';

const client = {
    query: jest.fn()
}

jest.mock('pg', () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => client)
            }
        })
    }
});

afterEach(() => {
    jest.clearAllMocks()
});

describe('testGetAllUsers:', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'js' }, { id: 2, course: 'php' }] })

        const result = await getCourseDB();

        expect(result).toEqual([{ id: 1, course: 'js' }, { id: 2, course: 'php' }]);
        expect(result.length).toBe(2)
    })
});

describe('createCourse:', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'new_course' }] })
        const result = await createCourseDB('new_course')

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'new_course' }])
        expect(result.length).toBe(1)
    })
});

describe('getCourseById:', () => {
    test('seccess', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'js' }] });
        const result = await getCourseByIdDB('js');

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'js' }])
        expect(result.length).toBe(1)
    })
});

describe('updateCourse:', () => {
    test('seccess', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'js' }] })

        const result = await updateCourseDB(1, 'js');

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'js' }])
        expect(result.length).toBe(1)
    })
});

describe('deleteCourseByIdDB:', () => {
    test('success', async () => {
        client.query.mockResolvedValue({ rows: [{ id: 1, course: 'js' }] })

        const result = await deleteCourseByIdDB('js')

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'js' }])
        expect(result.length).toBe(1)
        expect(result[0].id).toBe(1)
    })
});