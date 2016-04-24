
import request from 'supertest';
import  parse from '..';
import koa  from 'koa';
import should from 'should';

describe('parse.json(req, opts)', ()=>{

  describe('with valid json', function(){
    it('should parse', (done) => {
      var app = new koa();

      app.use(async (ctx) => {
        var body = await parse.json(ctx);
        body.should.eql({ foo: 'bar' });
        done();
      });

      request(app.listen())
      .post('/')
      .send({ foo: 'bar' })
      .end(function(){});
    })
  })

  describe('with content-length zero', function(){

    it('should return null', function(done) {
        var app = new koa();

        app.use(async (ctx)=> {
          var body = await parse.json(ctx);
          body.should.eql({});
          done();
        });
        request(app.listen())
        .post('/')
        .set('content-length', 0)
        .end(function(){});
    })
  })

  describe('with invalid json', function(){

    it('should parse error', function(done){
      var app = new koa();

      app.use( async (ctx) => {
        try {
          await parse.json(ctx);
        } catch (err) {
          err.should.not.equal(null);
          done();
        }
      });

      request(app.listen())
      .post('/')
      .set('content-type', 'application/json')
      .send('{"foo": "bar')
      .end(function(){});
    })
  })

  describe('with non-object json', function(){
    it('should parse', function(done){
        var app = new koa();

        app.use( async (ctx) => {
          try {
            await parse.json(ctx);
          } catch (err) {
            err.should.not.equal(null);
            err.message.should.equal('invalid JSON, only supports object and array');
            done();
          }
        });

        request(app.listen())
        .post('/')
        .set('content-type', 'application/json')
        .send('"foo"')
        .end(function(){});
    });
  })
})