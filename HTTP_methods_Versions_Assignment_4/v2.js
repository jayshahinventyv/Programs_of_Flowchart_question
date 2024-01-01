// import { Client, Request } from 'react-native-http2';
// console.log(1)
async function displayData2() {
  // const client = new Client();
  const request = new Request('http://localhost:3000/mobiles', {
    method: 'GET',
  })
  const response = await client.send(request);
  console.log(response);
}