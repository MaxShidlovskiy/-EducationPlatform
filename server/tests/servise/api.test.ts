import { registration, authorizationUser } from '../../src/service/api.service';
import * as repository from '../../src/repository/api.repository'
import bcrypt from 'bcrypt'

// describe('registration1', () => {
//     test('success', async () => {
//         const funcRepoGetByEmail = jest.spyOn(repository, 'getByEmail')
//         const bcryptFunction = jest.spyOn(bcrypt, 'hash');
//         const funcRepoRegistration = jest.spyOn(repository, 'registrationDB')

//         funcRepoGetByEmail.mockResolvedValue([]);
//         bcryptFunction.mockResolvedValue('1dfsdf12sdf2sfd3sfd');
//         funcRepoRegistration.mockResolvedValue([{
//             id: 1,
//             'name': 'user',
//             'surname': 'surname',
//             'email': 'user@mail.com',
//             'pwd': '1dfsdf12sdf2sfd3sfd'
//         }])

//         const result = await registration('user', 'surname', 'user@mail.com', '1dfsdf12sdf2sfd3sfd');
//         expect(result).toEqual([{
//             id: 1,
//             'name': 'user',
//             'surname': 'surname',
//             'email': 'user@mail.com',
//             'pwd': '1dfsdf12sdf2sfd3sfd'
//         }])
//     })
//     test('error', async () => {
//         const mockGetByEmail = jest.spyOn(repository, 'getByEmail');

//         mockGetByEmail.mockResolvedValue([{
//             id: 1,
//             'name': 'user',
//             'surname': 'surname',
//             'email': 'user@mail.com',
//             'pwd': '1dfsdf12sdf2sfd3sfd'
//         }]);

//         try {
//             await registration('user', 'surname', 'user@mail.com', '789456')
//         } catch (error: any) {
//             expect(mockGetByEmail).toHaveBeenCalled()
//             expect(mockGetByEmail).toHaveBeenCalledWith('user@mail.com')
//             expect(error.message).toBe('этот email уже зарегестрирован')
//         }
//     })
// })

// describe('registration2', () => {
//     test('success', async () => {
//         const mockGetByEmail = jest.spyOn(repository, 'getByEmail');
//         const mockHash = jest.spyOn(bcrypt, 'hash');
//         const mockRegistration = jest.spyOn(repository, 'registrationDB');

//         mockGetByEmail.mockResolvedValue([]);
//         mockHash.mockResolvedValue('23fg1sd3f21gadgd3f21g');
//         mockRegistration.mockResolvedValue([{
//             id: 1,
//             name: 'test',
//             surname: 'test',
//             email: 'test@mail.com',
//             pwd: '23fg1sd3f21gadgd3f21g'
//         }])

//         const result = await registration('test', 'test', 'test@mail.com', '23fg1sd3f21gadgd3f21g')
//         expect(result).toEqual([{
//             id: 1,
//             name: 'test',
//             surname: 'test',
//             email: 'test@mail.com',
//             pwd: '23fg1sd3f21gadgd3f21g'
//         }])
//         expect(result).toHaveLength(1)
//     })
// })

// describe('autorisation1', () => {
//     test('success', async () => {
//         const mockAuthorizationUser = jest.spyOn(repository, 'getByEmail')
//         const mockBcryptFunction = jest.spyOn(bcrypt, 'compare');

//         mockAuthorizationUser.mockResolvedValue([{
//             id: 2,
//             name: 'test2',
//             surname: 'test2',
//             email: 'test2@mail.com',
//             pwd: '23fg1sd3f21gadgd3f21g'
//         }]);

//         mockBcryptFunction.mockResolvedValue('23fg1sd3f21gadgd3f21g');

//         const result = await authorizationUser('test2@mail.com', '23fg1sd3f21gadgd3f21g');
//         expect(result).toEqual([{
//             id: 2,
//             name: 'test2',
//             surname: 'test2',
//             email: 'test2@mail.com',
//             pwd: '23fg1sd3f21gadgd3f21g'
//         }])
//     })
// })

// describe('autorisation2', () => {
//     test('success1', async () => {
//         const mockAuthorizationUser = jest.spyOn(repository, 'getByEmail');
//         const mockBcryptFunction = jest.spyOn(bcrypt, 'compare');

//         mockAuthorizationUser.mockResolvedValue([{
//             id: 2,
//             name: 'test2',
//             surname: 'test2',
//             email: 'test2.email.com',
//             pwd: '23a1sfdas32d1as'
//         }]);
//         mockBcryptFunction.mockResolvedValue(true)
//         const result = await authorizationUser('test2.email.com', '23a1sfdas32d1as');

//         expect(mockAuthorizationUser).toHaveBeenCalled()
//         expect(mockBcryptFunction).toHaveBeenCalled()
//         expect(result).toEqual([{
//             id: 2,
//             name: 'test2',
//             surname: 'test2',
//             email: 'test2.email.com',
//             pwd: '23a1sfdas32d1as'
//         }])
//     })
//     test('success2', async () => {
//         const testFound = jest.spyOn(repository, 'getByEmail')

//         testFound.mockResolvedValue([]);
//         try {
//             await authorizationUser('user@mail.com', '1dfsdf12sdf2sfd3sfd')
//         } catch (error: any) {
//             expect(error.message).toBe('юзера с таким email не существует')
//         }
//     })
//     test('success3', async () => {
//         const mockAuthorizationUser = jest.spyOn(repository, 'getByEmail')
//         const mockBcryptFunction = jest.spyOn(bcrypt, 'compare')

//         mockAuthorizationUser.mockResolvedValue([{
//             id: 1,
//             name: 'test',
//             surname: 'test',
//             email: 'test@mail.com',
//             pwd: '123456'
//         }])
//         mockBcryptFunction.mockResolvedValue(false)

//         try {
//             await authorizationUser('test@mail.com', '123456')
//         } catch (error: any) {
//             expect(mockAuthorizationUser).toHaveBeenCalled()
//             expect(error.message).toBe('пароли не совпадают')
//         }
//     })
// })

describe('registration3', () => {
    test('success', async () => {
        const mockGetByEmail = jest.spyOn(repository, 'getByEmail')
        const mockRegistration = jest.spyOn(repository, 'registrationDB')
        const mockHash = jest.spyOn(bcrypt, 'hash')

        mockGetByEmail.mockResolvedValue([])
        mockHash.mockResolvedValue('1q23w45w6')
        mockRegistration.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@mail.com',
            pwd: '1q23w45w6'
        }])
        const result = await registration('test', 'test', 'test@mail.com', '123456')

        expect(result).toEqual([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@mail.com',
            pwd: '1q23w45w6'
        }])
        expect(mockGetByEmail).toHaveBeenCalled()
        expect(mockHash).toHaveBeenCalled()
        expect(mockRegistration).toHaveBeenCalled()
    })
})

describe('autorization3', () => {
    test('success', async () => {
        const mockGetByEmail = jest.spyOn(repository, 'getByEmail')
        const mockCompare = jest.spyOn(bcrypt, 'compare');

        mockGetByEmail.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@mail.com',
            pwd: '123456'
        }]);
        mockCompare.mockResolvedValue(true)

        const result = await authorizationUser('test@mail.com', '123456')

        expect(mockGetByEmail).toHaveBeenCalled()
        expect(mockCompare).toHaveBeenCalled()
        expect(result).toEqual([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@mail.com',
            pwd: '123456'
        }])
        expect(result.length).toBe(1)
    })
})