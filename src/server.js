const fs = require('fs');
const koa = require('koa');
const path = require('path');
const track = require('./track');

const pixelPath = path.join(__dirname, 'pixel.gif');
const pixel = fs.readFileSync(pixelPath);
const pixelHeaders = {
  'Cache-Control':        'private, no-cache, proxy-revalidate, max-age=0',
  'Content-Type':         'image/gif',
  'Content-Disposition':  'inline',
  'Content-Length':       pixel.length,
};

const demoPath = path.join(__dirname, '..', 'demo.html');
const demo = fs.readFileSync(demoPath, {'encoding': 'utf8'});

const app = koa();
app.use(function* () {
  if (this.request.path.slice(0, 10) === '/pixel.gif') {
    track(this.request.query.data);
    this.body = pixel;
    this.response.headers = pixelHeaders;
    this.response.status = 200;
  } else if (this.request.path === '/') {
    this.body = demo;
    this.response.status = 200;
  } else {
    this.response.status = 404;
  }
});

module.exports = app;
