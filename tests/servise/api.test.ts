import { registration, authorizationUser } from '../../src/service/api.service';
import * as repository from '../../src/repository/api.repository'
import bcrypt from 'bcrypt'

describe('registration', () => {
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

describe('registration', () => {
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