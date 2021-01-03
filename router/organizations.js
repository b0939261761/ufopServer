import { getLastOrganization, setIsNewUsrInfo, getOrganization } from '../db/index.js';

const getLastOrganizationRoute = {
  url: '/organizations/lastOrganization',
  method: 'GET',
  handler: async (req, res) => {
    const organization = await getLastOrganization();
    res
      .setHeader('Content-Type', 'application/json')
      .writeHead(200)
      .end(JSON.stringify(organization));
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
    res
      .writeHead(statusCode)
      .end(resBody);
  }
};

const getOrganizationRoute = {
  url: '/organizations/:code',
  method: 'GET',
  handler: async (req, res) => {
    const organization = await getOrganization(req.params.code);
    res
      .setHeader('Content-Type', 'application/json')
      .writeHead(200)
      .end(JSON.stringify(organization));
  }
};

export default [getLastOrganizationRoute, setIsNewUsrInfoRoute, getOrganizationRoute];
