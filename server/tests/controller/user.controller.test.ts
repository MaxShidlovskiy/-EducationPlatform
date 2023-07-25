import request from "supertest";
import app from "../../src/app";

let id;

test('POST', async () => {
    const res = await request(app).post('/user').send({ name: 'int_test', surname: 'int_test', email: 'int_test@mail.com', pwd: '123asd46' })
    id = res.body[0].id;

    expect(res.status).toBe(200)
    expect(res.body).toEqual([{ id: id, name: 'int_test', surname: 'int_test', email: 'int_test@mail.com', pwd: '123asd46' }])
    expect(res.body.length).toBeGreaterThan(0);
})

test('GET', async () => {
    const res = await request(app).get('/user')

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

test('GET/:id', async () => {
    const res = await request(app).get(`/user/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

test('UPDATE', async () => {
    const res = await request(app).get(`/user/${id}`).send({ name: 'int_test', surname: 'int_test', email: 'int_test@mail.com', pwd: '123asd46'  });
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body).toEqual([{ id: id, name: 'int_test', surname: 'int_test', email: 'int_test@mail.com', pwd: '123asd46' }])
})

test('DELETE', async () => {
    const res = await request(app).get(`/user/${id}`)
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})