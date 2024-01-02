const http2 = require('http2');
function displayData2() {

  // Replace 'your-http2-endpoint.com' and '/path' with your specific endpoint and path
  const options = {
    hostname: "http://localhost:3000/mobiles",
    // path: '/mobiles',
    method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
  };
  
  const req = http2.request(options, (res) => {
    res.on('data', (chunk) => {
      console.log(`Received chunk of data: ${chunk}`);
      // Process received data here
    });
  
    res.on('end', () => {
      console.log('No more data received');
      // Do something after all data has been received
    });
  });
  
  req.on('error', (e) => {
    console.error(`Request error: ${e}`);
  });
  
  // Send the request
  req.end();


  
}

// http.createServer(() => {console.log("Listening on 5000")}).listen(8080);
