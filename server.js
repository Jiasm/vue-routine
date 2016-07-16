'use strict';

var app = require('koa')();
var router = require('koa-router')();
var serve = require('koa-static');
var views = require('co-views');

var render = views('views', {
  map: { html: 'ejs' }
})

app.use(router.routes())
  .use(router.allowedMethods())
  .use(serve(__dirname + '/public'));

router.get('/', function * () {
  this.body = yield render('index');
});
app.listen(12306);
