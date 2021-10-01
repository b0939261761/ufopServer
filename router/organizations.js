import { getLastOrganization, setIsNewUsrInfoOrganization, getOrganization } from '../db/index.js';

const getLastOrganizationRoute = {
  url: '/organizations/last',
  method: 'GET',
  handler: async (req, res) => {
    const organization = await getLastOrganization();
    res
      .writeHead(200, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(organization));
  }
};

const setIsNewUsrInfoOrganizationRoute = {
  url: '/organizations/isNewUsrInfo',
  method: 'POST',
  handler: async (req, res) => {
    const code = req.body.code?.trim() ?? '';
    await setIsNewUsrInfoOrganization(code);
    res.writeHead(204).end();
  }
};

const getOrganizationRoute = {
  url: '/organizations/:code',
  method: 'GET',
  handler: async (req, res) => {
    const organization = await getOrganization(req.params.code);
    res
      .writeHead(200, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(organization));
  }
};

export default [getLastOrganizationRoute, setIsNewUsrInfoOrganizationRoute, getOrganizationRoute];
