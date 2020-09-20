export default {
    "size": {
      "width": 2500,
      "height": 843
    },
    "selected": false,
    "name": "Nice richmenu",
    "chatBarText": "Tap here",
    "areas": [
      {
        "bounds": {
          "x": 0,
          "y": 0,
          "width": 833,
          "height": 843
        },
        "action": {
          "type": "postback",
          "text": "Text",
          "data": "action=buy&itemid=123"
        }
      },
      {
        "bounds": {
          "x": 834,
          "y": 0,
          "width": 833,
          "height": 843
        },
        "action": {
          "type":"uri",
          "label":"View details",
          "uri": "https://www.google.com/",
          "Text": "Redirect to URL",
          "altUri": {
             "desktop" : "https://www.google.com/"
          }
       }
      },
      {
        "bounds": {
          "x": 1667,
          "y": 0,
          "width": 833,
          "height": 843
        },
        "action":{
            "type":"datetimepicker",
            "label":"Select date",
            "data":"storeId=12345",
            "mode":"datetime",
            "initial":"2017-12-25t00:00",
            "max":"2018-01-24t23:59",
            "min":"2017-12-25t00:00"
         }
        // "action":{
        //     "type": 'sticker',
        //     "packageId": '1',
        //     "stickerId": '1'
        // }
        // "action": {
        //     "type":"uri",
        //     "label":"View details",
        //     "uri": "https://www.google.com/",
        //     "Text": "Redirect to URL",
        //     "altUri": {
        //        "desktop" : "https://www.google.com/"
        //     }
        //  }
        // "action": {
        //   "type": 'location',
        //   "title": 'my location',
        //   "address": "〒150-0002 東京都渋谷区渋谷２丁目２１−１",
        //   "latitude": 35.65910807942215,
        //   "longitude": 139.70372892916203
        // }
      }
   ]
  }