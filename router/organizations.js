import { getLastCode, setIsNewUsrInfo, getOrganization } from '../db/index.js';

const getLastCodeRoute = {
  url: '/organizations/lastUsrInfo',
  method: 'GET',
  handler: async (req, res) => {
    const code = await getLastCode();
    res.writeHead(200);
    res.end(code);
  }
};

const setIsNewUsrInfoRoute = {
  url: '/organizations/isNewUsrInfo',
  method: 'POST',
  handler: async (req, res) => {
    const code = req.body?.code;
    let statusCode = 204;
    let resBody;
    if (!code) {
      statusCode = 400;
      resBody = 'MISSING_PARAMETER';
    }
    await setIsNewUsrInfo(code);
    res.writeHead(statusCode);
    res.end(resBody);
  }
};

const getOrganizationRoute = {
  url: '/organizations/:code',
  method: 'GET',
  handler: async (req, res) => {
    const organization = await getOrganization(req.params.code);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(organization));
  }
};

export default [getLastCodeRoute, setIsNewUsrInfoRoute, getOrganizationRoute];
