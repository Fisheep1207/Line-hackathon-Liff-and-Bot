export const templateButton = {
    type: 'template',
    altText: 'Buttons alt text',
    template: {
        type: 'buttons',
        thumbnailImageUrl: 'https://github.com/line/line-bot-sdk-nodejs/raw/master/examples/kitchensink/static/buttons/1040.jpg',
        title: 'My button sample',
        text: 'Hello, my button',
        actions: [
            { label: 'Go to line.me', type: 'uri', uri: 'https://line.me' },
            { label: 'Say hello1', type: 'postback', data: 'hello こんにちは' },
            { label: '言 hello2', type: 'postback', data: 'hello こんにちは', text: 'hello こんにちは' },
            { label: 'Say message', type: 'message', text: 'Rice=米' },
        ],
    },
}