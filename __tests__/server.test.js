const request = require('supertest');
const app = require('../server'); // Adjust the path to your server file

describe('GET /', () => {
  it('should display "Hello World" on the main page', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World');
    expect(response.statusCode).toBe(200);
  });
});

var server = app.listen(3000, function(){
    console.log("Running on port 3000 - https://localhost/3000")
})

afterAll(done => {
    server.close();
    done()
})