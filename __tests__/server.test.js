import request from 'supertest';
import app from '../server';

describe('GET /', () => {
  it('should display "Hello World" on the main page', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World');
    expect(response.statusCode).toBe(200);
  });
});
