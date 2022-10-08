const request = require('supertest');
import { Start } from '../src/routes';
const APP = Start(4000)


describe('Should create User account at ==> /api/v1/signin-user', function() {
    it('responds with json', function(done) {
      request(APP)
        .post('/api/v1/signin-user')
        .send({
                name:"Eveguel Butal Arocha",
                email:"eveguelfreelancers@gmail.com",
                password:"321456",
                conpassword:"321456"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(202, done);
    });
});


describe('Should Login User account at ==> /api/v1/login-user', function() {
    it('responds with json', function(done) {
      request(APP)
        .post('/api/v1/login-user')
        .send({
            email:"eveguelfreelancer@gmail.com",
            password:"321456"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});


describe('Should Logout User account at ==> /api/v1/logout-user', function() {
    it('responds with json', function(done) {
      request(APP)
        .post('/api/v1/logout-user')
        .send({
            email:"eveguelfreelancer@gmail.com",
            password:"321456"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

//.set('x-access-token', GenerateTestToken())