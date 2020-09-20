import client from "../client.js"
import querystring from "querystring"
import {flex1, flex2, flex3, flex4, join_flex} from "./message_template/flex.js"
export function handleEvent(event) {
    //console.log(event);
    if (event.type === 'join'){
      client.replyMessage(event.replyToken, join_flex)
    }
    if (event.type === 'postback'){
      let data = querystring.parse(event.postback.data);
      switch(data.action){
        case '1':
          client.replyMessage(event.replyToken, flex1)
          break;
        case '2':
          client.replyMessage(event.replyToken, flex2)
          break;
        case '3':
          client.replyMessage(event.replyToken, flex3)
          break;
        case '4':
          client.replyMessage(event.replyToken, flex4)
          break;
        case '5':
          client.replyMessage(event.replyToken, {
            type: 'sticker',
            packageId: '1',
            stickerId: '1'
          })
          break;
        case 'TimeStamp':
          client.replyMessage(event.replyToken, {
            type: 'sticker',
            packageId: '1',
            stickerId: '2'
          })
          break;
      } 
    }
    if (event.type !== 'message' || event.message.type !== 'text') {
      // ignore non-text-message event
      return Promise.resolve(null);
    }
    if (event.message.text === 'test2') {
        return client.replyMessage(event.replyToken, [
            flex1,
            flex2,
            flex3
      ]);
    }
  }