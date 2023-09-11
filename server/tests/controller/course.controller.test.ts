import request from "supertest";
import app from "../../src/app";
let id;

test('POST', async () => {
    const res = await request(app).post('/course').send({ course: 'js' })
    id = res.body[0].id;

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
})

test("GET", async () => {
    const res = await request(app).get('/course');
    id = res.body[0].id;
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0)
})

test("GET/:id", async () => {
    const res = await request(app).get(`/course/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0)
})

test("UPDATE", async () => {
    const res = await request(app).put(`/course/${id}`).send({ course: "ts" });

    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: id, course: "ts" }]);
})

test("DELETE", async () => {
    const res = await request(app).delete(`/course/${id}`);

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(res.body).toEqual([{ id: id, course: "ts" }])
})