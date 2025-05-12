import request from 'supertest';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));

describe('GET /', () => {
  it('should display "Hello World" on the main page', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
    expect(response.statusCode).toBe(200);
  });
});
