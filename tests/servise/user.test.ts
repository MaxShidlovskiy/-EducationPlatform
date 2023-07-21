import { createUser } from '../../src/service/user.service';
import * as repository from '../../src/repository/user.repository';

describe('createUser', () => {
    test('seccess', async () => {
        const funcRepo = jest.spyOn(repository, 'createUserDB');
        funcRepo.mockResolvedValue([{
            "id": 1,
            "name": "test",
            "surname": "test",
            "email": "test@mail.com",
            "pwd": "1234"
        }]);

        const result = await createUser("TestName", "TestSurname", "test@gmail.com", "123");

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual(
            [
                {
                    "id": 1,
                    "name": "test",
                    "surname": "test",
                    "email": "test@mail.com",
                    "pwd": "1234"
                }
            ]);
        expect(result).toHaveLength(1);
    })
})

test('error', async () => {
    const functRepo = jest.spyOn(repository, "createUserDB");
    functRepo.mockResolvedValue([]);
    try {
        const result = await createUser("test", "test", "test@mail.com", "1234");
    } catch (error: any) {
        expect(functRepo).toHaveBeenCalled();
        expect(error.message).toBe('empty user')
    }
})
