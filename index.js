import http from 'http';
import getRoute from './router/router.js';
import { connect } from './db/index.js';

const host = '0.0.0.0';
const port = process.env.SERVER_PORT;

//= ============================================================================

const requestListener = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Token')

  try {
    if (req.method === 'OPTIONS') return res.writeHead(204).end();
    if (req.headers.token !== process.env.TOKEN) return res.writeHead(401).end();

    const route = getRoute(req.url, req.method);
    if (!route) return res.writeHead(404).end();

    if (req.headers['content-type'] === 'application/json') {
      try {
        let body = '';
        for await (const chunk of req) body += chunk;
        req.body = JSON.parse(body);
      } catch (err) {
        return res.writeHead(400).end(err.toString());
      }
    }

    req.params = route.params;
    return route.handler(req, res);
  } catch (err) {
    return res.writeHead(500).end(err.toString());
  }
};

//= ============================================================================

connect();

const server = http.createServer(requestListener);
server.listen(port, host, () => console.info(`Server running at http://${host}:${port}/`));
