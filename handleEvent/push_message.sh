curl -v -X GET https://api.line.me/v2/bot/group/{groupId}/summary \
-H 'Authorization: Bearer hdDeS/aOHiZgkqv1+qamPrTFtxCcxpaBVBt/IOvMBiGOW741fh8hrZZiLsF+A8zs1utm5DjOMB2e+RcUUysT41IeqJsu9C8aVUNgU374R8iR899cV3VjKNDvXdnCDRF3jRjnoNKISk4qyE+N7JxMiwdB04t89/1O/w1cDnyilFU='

Uc650cc1aafa052f38346b668c98275ec

Ua1a63145f359e1616866ae7f7eca8257
'C896dc67683edccaa41119acbac3825e0'
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer hdDeS/aOHiZgkqv1+qamPrTFtxCcxpaBVBt/IOvMBiGOW741fh8hrZZiLsF+A8zs1utm5DjOMB2e+RcUUysT41IeqJsu9C8aVUNgU374R8iR899cV3VjKNDvXdnCDRF3jRjnoNKISk4qyE+N7JxMiwdB04t89/1O/w1cDnyilFU=' \
-d '{
    "to": "Uc650cc1aafa052f38346b668c98275ec",
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