import { registration, authorizationUser } from '../../src/service/api.service';
import * as repository from '../../src/repository/api.repository'
import bcrypt from 'bcrypt'
import { describe } from 'node:test';
import { access } from 'node:fs';

describe('registration1', () => {
    test('success', async () => {
        const funcRepoGetByEmail = jest.spyOn(repository, 'getByEmail')
        const bcryptFunction = jest.spyOn(bcrypt, 'hash');
        const funcRepoRegistration = jest.spyOn(repository, 'registrationDB')

        funcRepoGetByEmail.mockResolvedValue([]);
        bcryptFunction.mockResolvedValue('1dfsdf12sdf2sfd3sfd');
        funcRepoRegistration.mockResolvedValue([{
            id: 1,
            'name': 'user',
            'surname': 'surname',
            'email': 'user@mail.com',
            'pwd': '1dfsdf12sdf2sfd3sfd'
        }])

        const result = await registration('user', 'surname', 'user@mail.com', '1dfsdf12sdf2sfd3sfd');
        expect(result).toEqual([{
            id: 1,
            'name': 'user',
            'surname': 'surname',
            'email': 'user@mail.com',
            'pwd': '1dfsdf12sdf2sfd3sfd'
        }])
    })
})

describe('registration2', () => {
    test('success', async () => {
        const mockGetByEmail = jest.spyOn(repository, 'getByEmail');
        const mockHash = jest.spyOn(bcrypt, 'hash');
        const mockRegistration = jest.spyOn(repository, 'registrationDB');

        mockGetByEmail.mockResolvedValue([]);
        mockHash.mockResolvedValue('23fg1sd3f21gadgd3f21g');
        mockRegistration.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@mail.com',
            pwd: '23fg1sd3f21gadgd3f21g'
        }])

        const result = await registration('test', 'test', 'test@mail.com', '23fg1sd3f21gadgd3f21g')
        expect(result).toEqual([{
            id: 1,
            name: 'test',
            surname: 'test',
            email: 'test@mail.com',
            pwd: '23fg1sd3f21gadgd3f21g'
        }])
        expect(result).toHaveLength(1)
    })
})

describe('autorisation1', () => {
    test('success', async () => {
        const mockAuthorizationUser = jest.spyOn(repository, 'getByEmail')
        const mockBcryptFunction = jest.spyOn(bcrypt, 'compare');

        mockAuthorizationUser.mockResolvedValue([{
            id: 2,
            name: 'test2',
            surname: 'test2',
            email: 'test2@mail.com',
            pwd: '23fg1sd3f21gadgd3f21g'
        }]);

        mockBcryptFunction.mockResolvedValue('23fg1sd3f21gadgd3f21g');

        const result = await authorizationUser('test2@mail.com', '23fg1sd3f21gadgd3f21g');
        expect(result).toEqual([{
            id: 2,
            name: 'test2',
            surname: 'test2',
            email: 'test2@mail.com',
            pwd: '23fg1sd3f21gadgd3f21g'
        }])
    })
})

describe('autorisation2', () => {
    test('success', async () => {
        const mockAuthorizationUser = jest.spyOn(repository, 'getByEmail');
        const mockBcryptFunction = jest.spyOn(bcrypt, 'compare');

        mockAuthorizationUser.mockResolvedValue([{
            id: 2,
            name: 'test2',
            surname: 'test2',
            email: 'test2.email.com',
            pwd: '23a1sfdas32d1as'
        }]);
        mockBcryptFunction.mockResolvedValue(true)
        const result = await authorizationUser('test2.email.com', '23a1sfdas32d1as');

        expect(mockAuthorizationUser).toHaveBeenCalled()
        expect(mockBcryptFunction).toHaveBeenCalled()
        expect(result).toEqual([{
            id: 2,
            name: 'test2',
            surname: 'test2',
            email: 'test2.email.com',
            pwd: '23a1sfdas32d1as'
        }])
    })
})