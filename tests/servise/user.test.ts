import { createUser, getAllUsers, getUserById, updateUserById } from '../../src/service/user.service';
import * as repository from '../../src/repository/user.repository';

describe(`createUserNewFunction`, () => {
    test(`success`, async () => {
        const funcRepo = jest.spyOn(repository, 'createUserDB');
        funcRepo.mockResolvedValue([
            {
                "id": 1,
                "name": "test",
                "surname": "test",
                "email": "test@mail.com",
                "pwd": "1234"
            }
        ])
        const result = await createUser("test", "test", "test@mail.com", "1234")
        expect(result).toEqual([{
            "id": 1,
            "name": "test",
            "surname": "test",
            "email": "test@mail.com",
            "pwd": "1234"
        }])
        expect(result.length).toBe(1);
        expect(funcRepo).toHaveBeenCalled();
    })
})

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

        const result = await createUser("test", "test", "test@mail.com", "1234");

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
})

describe('getAllUsers', () => {
    test('seccess', async () => {
        const funcRepo = jest.spyOn(repository, 'getAllUsersDB');
        funcRepo.mockResolvedValue(
            [
                {
                    "id": 1,
                    "name": "test",
                    "surname": "test",
                    "email": "test@mail.com",
                    "pwd": "1234"
                }
            ]);

        const result = await getAllUsers()

        expect(funcRepo).toHaveBeenCalled()
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
        expect(result.length).toBeGreaterThan(0)
    });
});

describe('getUserById', () => {
    test('success', async () => {
        const funcRepo = jest.spyOn(repository, 'getUserByIdDB');
        funcRepo.mockResolvedValue([{
            "id": 1,
            "name": "test",
            "surname": "test",
            "email": "test@mail.com",
            "pwd": "1234"
        }])

        const result = await getUserById(1);

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{
            "id": 1,
            "name": "test",
            "surname": "test",
            "email": "test@mail.com",
            "pwd": "1234"
        }]);
        expect(result.length).toBeGreaterThan(0);
    });
});

describe('updateUserById', () => {
    test('success', async () => {
        const funcRepo = jest.spyOn(repository, 'updateUserByIdDB');
        funcRepo.mockResolvedValue([{
            "id": 1,
            "name": "test",
            "surname": "test",
            "email": "test@mail.com",
            "pwd": "1234"
        }]);

        const result = await updateUserById(1, "test", "test", "test@mail.com", "1234");

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{
            "id": 1,
            "name": "test",
            "surname": "test",
            "email": "test@mail.com",
            "pwd": "1234"
        }]);
        expect(result.length).toBeGreaterThan(0)
    })
})
