# bj-body

`npm install --save bj-body`

####1. simple usage:
examplified by test code as below:
```
  import {JsonFromRaw} from 'bj-body';
  var app = new koa();

  app.use(async (ctx) => {
    var body = await JsonFromRaw(ctx);
    body.should.eql({ foo: 'bar' });
    done();
  });

  request(app.listen())
  .post('/')
  .send({ foo: 'bar' })
  .end(function(){});

``` 

####2. customizing usage:
```
  import {JsonFromStr, rawBody} from 'bj-body';
  var app = new koa();

  app.use(async (ctx) => {
    var raw = await rawBody(ctx);
    //console.log('raw body:', raw);
    raw.should.eql('{"foo":"bar"}');
    var body = await jsonFromStr(raw);
    body.should.eql({ foo: 'bar' });
    done();
  });

  request(app.listen())
  .post('/')
  .send({ foo: 'bar' })
  .end(function(){});
```