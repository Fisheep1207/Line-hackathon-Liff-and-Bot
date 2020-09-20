curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/summary \
-H 'Authorization: Bearer hdDeS/aOHiZgkqv1+qamPrTFtxCcxpaBVBt/IOvMBiGOW741fh8hrZZiLsF+A8zs1utm5DjOMB2e+RcUUysT41IeqJsu9C8aVUNgU374R8iR899cV3VjKNDvXdnCDRF3jRjnoNKISk4qyE+N7JxMiwdB04t89/1O/w1cDnyilFU='

Uc650cc1aafa052f38346b668c98275ec

curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer hdDeS/aOHiZgkqv1+qamPrTFtxCcxpaBVBt/IOvMBiGOW741fh8hrZZiLsF+A8zs1utm5DjOMB2e+RcUUysT41IeqJsu9C8aVUNgU374R8iR899cV3VjKNDvXdnCDRF3jRjnoNKISk4qyE+N7JxMiwdB04t89/1O/w1cDnyilFU=' \
-d '{
    "to": "U6e4b5422fa0760786d5f84ee8fe3c94a",
    "messages":[
        {
            "type":"text",
            "text":"蔡豆"
        },
        {
            "type":"text",
            "text":"嗨"
        }
    ]
}'