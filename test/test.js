/**
 * Created by satyasutar on 9/26/15.
 */

var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        request(app).get('/').expect('hello world', done);
    });
});
