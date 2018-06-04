let apiUrl;
switch(process.env.NODE_ENV) {
case 'development':
  apiUrl = 'http://localhost:5000/api/';
  break;
default:
  apiUrl = 'https://mbtch5z7l7.execute-api.us-east-1.amazonaws.com/Prod/api/';
  break;
}

const config = {
  isLocalHost: Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  ),
  apiUrl: apiUrl
};

export default config;