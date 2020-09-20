export default {
    "size": {
      "width": 2500,
      "height": 1686
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
          "height": 842
        },
        "action": {
          "type": "postback",
          "text": "量測回報",
          "data": "action=1"
        }
      },
      {
        "bounds": {
          "x": 834,
          "y": 0,
          "width": 833,
          "height": 842
        },
        "action": {
            "type": "postback",
            "text": "本日狀況",
            "data": "action=2"
        }
      },
      {
        "bounds": {
          "x": 1667,
          "y": 0,
          "width": 833,
          "height": 842
        },
        "action": {
            "type": "postback",
            "text": "使用指南",
            "data": "action=3"
        }
      },
      {
        "bounds": {
          "x": 0,
          "y": 842,
          "width": 833,
          "height": 842
        },
        "action": {
            "type": "postback",
            "text": "即時數據",
            "data": "action=4"
        }
      },
      {
        "bounds": {
          "x": 834,
          "y": 842,
          "width": 833,
          "height": 842
        },
        "action": {
            "type": "postback",
            "text": "緊急連絡",
            "data": "action=5"
        }
      },
      {
        "bounds": {
          "x": 1667,
          "y": 842,
          "width": 833,
          "height": 842
        },
        "action": {
          "type":"datetimepicker",
          "label":"Select date",
          "data":"action=TimeStamp",
          "mode":"datetime",
          "initial":"2020-09-20t00:00",
          "max":"2020-09-30t23:59",
          "min":"2017-12-25t00:00"
         }
      }
   ]
}