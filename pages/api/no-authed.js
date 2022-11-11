export default function handler(_, res) {
  res.statusCode = 401
  res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"')
  res.end('Basic Auth Required')
}