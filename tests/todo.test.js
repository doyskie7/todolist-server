const request = require('supertest');
import { Start } from '../src/routes';
import { GenerateTestToken } from '../src/utils/Authenticate';
var randomstring = require("randomstring");
const APP = Start(4001)

describe('Should create Todo List ==> /api/v1/create-todo', function() {
    it('responds with json', function(done) {
      request(APP)
        .post('/api/v1/create-todo')
        .send({
            name:randomstring.generate(),
            status:randomstring.generate(),
            description:randomstring.generate()
        })
        .set('x-access-token', GenerateTestToken())
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});


describe('Should fetch Todo List ==> /api/v1/fetch-todo', function() {
    it('responds with json', function(done) {
      request(APP)
        .post('/api/v1/fetch-todo')
        .set('x-access-token', GenerateTestToken())
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});


describe('Should update Todo List ==> /api/v1/update-todo', function() {
    it('responds with json', function(done) {
      request(APP)
        .post('/api/v1/update-todo')
        .send({
            name:randomstring.generate(),
            status:randomstring.generate(),
            description:randomstring.generate()
        })
        .set('x-access-token', GenerateTestToken())
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('Should delete Todo List ==> /api/v1/delete-todo', function() {
    it('responds with json', function(done) {
      request(APP)
        .post('/api/v1/delete-todo')
        .send({
            id:261,
            todo:"",
            description:"",
            status:"active"
        })
        .set('x-access-token', GenerateTestToken())
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});