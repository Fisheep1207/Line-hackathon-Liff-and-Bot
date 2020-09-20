import line           from '@line/bot-sdk'
import express        from 'express'
import config         from "./config.js"
import {handleEvent}  from "./handleEvent/handleEvent.js"
import bodyParser     from "body-parser"
import path           from 'path';
const __dirname = path.resolve();
const app = express();
const baseURL = "127.0.0.1"
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
const port = process.env.PORT || 3000

app.post('/', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result));
});

app.get('/form', (req, res) => {
  let options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }
  res.sendFile('./liff-form.html', options);
})

app.post('/receiveMessege', bodyParser.urlencoded({ extended: false }), bodyParser.json(), (req, res) => {
  console.log(req.body);
  res.send("Finish");
})

app.listen(port, () => {
    console.log(`server listen on port = ${port}`)
});