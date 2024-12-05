const request = require('supertest');

let userID;
let token;

describe('Login API Test', () => {
    it('should register', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local/register')
            .send({
                username: "test1",
                email: "test1@gmail.com",
                password: "test1pass",
                job: "Student"
            })

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('jwt');
        userID = res.body.user.id;
    });

    it('should return JWT token when login is successful', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local')
            .send({
                identifier: 'test1@gmail.com',
                password: 'test1pass',
            });

        // ตรวจสอบว่า response status = 200 และมี JWT ใน response
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('jwt');
        expect(typeof res.body.jwt).toBe('string');
        token = res.body.jwt;
    });

    it('should return error message when login fails', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local')
            .send({
                identifier: 'wrong-email@gmail.com',
                password: 'wrong-password',
            });

        // ตรวจสอบว่า response status = 400 และมีข้อความ error
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('error');
        expect(res.body.error.message).toBe('Invalid identifier or password');
    });

    it('should error when EMAIL of Username are already in use', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local/register')
            .send({
                username: "test1",
                email: "test1@gmail.com",
                password: "test1pass",
                job: "Student"
            })

        expect(res.statusCode).toBe(400);
        expect(res.body.error.message).toBe("Email or Username are already taken");
    });

    /*afterAll(async () => {
      if(userID) {
          const res = await request('http://localhost:1337')
          .delete(`/api/users/${userID}`)
          .set('Authorization', `Bearer ${token}`)
  
          // ตรวจสอบสถานะการตอบกลับ
          expect(res.statusCode).toBe(200);
      }
    });*/

    it('should error if Register with wrong EMAIL format', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local/register')
            .send({
                username: "testtest",
                email: "testtest@", // ขาด gmail.com
                password: "testtestpass",
                job: "Student"
            })

        expect(res.statusCode).toBe(400);
        expect(res.body.error.message).toBe("email must be a valid email");
    });

    it('should error if not enter JOB when register', async () => {
        const res = await request(strapi.server.httpServer)
            .post('/api/auth/local/register')
            .send({
                username: "testtest1",
                email: "testtest1@gmail.com",
                password: "testtestpass",
            })

        expect(res.statusCode).toBe(400);
        expect(res.body.error.message).toBe("job must be defined.");
    });
});