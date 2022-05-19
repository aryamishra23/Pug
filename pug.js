const pug = require('pug');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const template = 'strong #{message}';
const context = { message: 'Hello template!' };
const fn = pug.compile(template);
console.log(fn(context));
app.get('/', function (req, res) {
    res.render('index.pug');
  });
app.listen(5000);