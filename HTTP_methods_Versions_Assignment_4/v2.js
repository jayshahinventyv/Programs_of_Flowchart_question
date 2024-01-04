const http2 = require('http2');

function displayData2() {

    const client = http2.connect('http://localhost:3000/mobile');

    const req = client.request({
        ':method': 'GET',
        ':path': '/data',
    });

    req.on('response', (headers, flags) => {
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            console.log('Received data:', data);
            // You can process the received data here
        });
    });

    req.end();

}