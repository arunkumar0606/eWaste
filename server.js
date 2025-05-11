const express = require('express');
const app = express();
const path = require('path');
const serverless = require("serverless-http");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
  });

app.get('/pickup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pickup.html'));
  });
  app.get('/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Confirmation.html'));
  });
  app.get('/how', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'process1.html'));
  });
  app.get('/rewards', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'rewards.html'));
  });
  

  app.get('/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
  });


module.exports.handler = serverless(app);