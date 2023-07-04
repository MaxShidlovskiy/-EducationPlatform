import exp from 'constants';
import { registrationDB, getByEmail } from '../../src/repository/api.repository';


const mockUser = {
    query: jest.fn()
};

jest.mock('pg', () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => mockUser)
            }
        })
    }
})

beforeEach(() => jest.clearAllMocks())

describe('api', () => {
    test('registrationDB', async () => {
        const mock = [{
            name: 'new_user',
            surname: 'new_user_surname',
            email: 'qwerty@mai.com',
            pwd: 'qwe123',
            id: 3
        }]
        mockUser.query.mockResolvedValue({
            rows: mock
        })
        const result = await registrationDB('new_user', 'new_user_surname', 'qwerty@mai.com', 'qwe123')
        expect(result).toEqual(mock)
    })
})

describe('api', () => {
    test('getByEmail', async () => {
        mockUser.query.mockResolvedValue({
            rows: [{
                name: 'new_user',
                surname: 'new_user_surname',
                email: 'qwerty@mail.com',
                pwd: 'qwe123',
                id: 3
            }]
        })
        const result = await getByEmail('qwerty@mail.com');

        expect(result).toEqual([{
            'name': 'new_user',
            'surname': 'new_user_surname',
            'email': 'qwerty@mail.com',
            'pwd': 'qwe123',
            id: 3
        }])

        expect(mockUser.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe(3);
        expect(result[0].email).toBe('qwerty@mail.com')
    })
})