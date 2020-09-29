'use strict';
const supertest = require('supertest');
const server = require('../../src/server');

describe('/dogs', () => {
  let request;
  let axios = {
    get: () => Promise.resolve({ data: 'foobar' })
  };

  before(() => {
    const app = server();
    request = supertest.agent(app);
  });

  it('should return a 200', () => {
    return request.get('/dogs').expect(200);
  });
});

describe('/dogs', () => {
  let request;
  let axios = {
    get: () => Promise.reject(new Error('Failed Opps'))
  };

  before(() => {
    const app = server();
    request = supertest.agent(app);
  });

  it('should return a 500', () => {
    return request.get('/dogs').expect(500);
  });
});
