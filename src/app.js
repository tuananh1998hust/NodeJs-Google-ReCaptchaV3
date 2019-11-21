import express from 'express';
import fetch from 'isomorphic-fetch';
import Key from './config/key';
import * as url from './config/url';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});
// Use Routes
app.post(url.v1 + url.user, (req, res) => {
  const { token } = req.body;
  const { secretKeyCaptcha } = Key;
  console.log(token);
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKeyCaptcha}&response=${token}`;

  fetch(url, {
    method: 'post',
  })
    .then(response => response.json())
    .then(gooleResponse => {
      console.log(gooleResponse);
      res.json({ gooleResponse });
    })
    .catch(error => res.json({ error }));
});

export default app;
