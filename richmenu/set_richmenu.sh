# 1-1
curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H 'Authorization: Bearer hdDeS/aOHiZgkqv1+qamPrTFtxCcxpaBVBt/IOvMBiGOW741fh8hrZZiLsF+A8zs1utm5DjOMB2e+RcUUysT41IeqJsu9C8aVUNgU374R8iR899cV3VjKNDvXdnCDRF3jRjnoNKISk4qyE+N7JxMiwdB04t89/1O/w1cDnyilFU=' \
-H 'Content-Type: application/json' \
-d \
'{
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
          "width": 2500,
          "height": 843
        },
        "action": {
          "type": "postback",
          "data": "action=buy&itemid=123"
        }
      }
   ]
}'

# 1-2
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/richmenu-c384a5f0eb246353dfd500515f576cb3/content \
-H "Authorization: Bearer hdDeS/aOHiZgkqv1+qamPrTFtxCcxpaBVBt/IOvMBiGOW741fh8hrZZiLsF+A8zs1utm5DjOMB2e+RcUUysT41IeqJsu9C8aVUNgU374R8iR899cV3VjKNDvXdnCDRF3jRjnoNKISk4qyE+N7JxMiwdB04t89/1O/w1cDnyilFU=" \
-H "Content-Type: image/jpeg" \
-T ~/Desktop/official-line-bot/rich-menu.png

# 1-3
curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/richmenu-c384a5f0eb246353dfd500515f576cb3 \
-H "Authorization: Bearer hdDeS/aOHiZgkqv1+qamPrTFtxCcxpaBVBt/IOvMBiGOW741fh8hrZZiLsF+A8zs1utm5DjOMB2e+RcUUysT41IeqJsu9C8aVUNgU374R8iR899cV3VjKNDvXdnCDRF3jRjnoNKISk4qyE+N7JxMiwdB04t89/1O/w1cDnyilFU="