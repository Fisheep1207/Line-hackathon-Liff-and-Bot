import line           from '@line/bot-sdk'
import client         from "./client.js"
import express        from 'express'
import config         from "./config.js"
import {handleEvent}  from "./handleEvent/handleEvent.js"
import {spawn}        from 'child_process';
import path           from 'path';
const __dirname = path.resolve();
const app = express();
const baseURL = "127.0.0.1"
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
const port = process.env.PORT || 3000
app.use(express.static("./form"));
app.use(express.static("./photo"));
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
  res.sendFile('./form/register.html', options);
})

// app.post('/receiveMessege', bodyParser.urlencoded({ extended: false }), bodyParser.json(), async (req, res) => {
//   console.log(req.body);
//   res.send("Finish");
// })

app.get('/sayTks', async (req, res) => {
  const message = {
    type: 'text',
    text: 'Hello World!'
  };
  
  await client.pushMessage('<to>', message)
    .then(() => {
s
    })
    .catch((err) => {
      // error handling
    });
})

app.listen(port, () => {
    console.log(`server listen on port = ${port}`)
});