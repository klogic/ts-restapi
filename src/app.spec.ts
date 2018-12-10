import app from './app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Hi World request', () => {
  it('should be return Hi World on call', async() => {
    return chai.request(app).get('/')
      .then(res => {
        chai.expect(res.text).to.equal('Hi World');
      })
  })
})

describe('Hi request', () => {
  it('should be return Hi on call', async() => {
    return chai.request(app).get('/hi')
      .then(res => {
        chai.expect(res.text).to.equal('Hi');
      })
  })
})

describe('Hello request', () => {
  it('should be return Hello on call', async() => {
    return chai.request(app).get('/hello')
      .then(res => {
        chai.expect(res.text).to.equal('Hello');
      })
  })
})

describe('awesome request', () => {
  it('should be return awesome on call', async() => {
    return chai.request(app).get('/awesome')
      .then(res => {
        chai.expect(res.text).to.equal('This is awesome');
      })
  })
})