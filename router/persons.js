import { getLastPerson, setIsNewUsrInfoPerson } from '../db/index.js';

const getLastPersonRoute = {
  url: '/persons/last',
  method: 'GET',
  handler: async (req, res) => {
    const organization = await getLastPerson();
    res
      .writeHead(200, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(organization));
  }
};

const setIsNewUsrInfoPersonRoute = {
  url: '/persons/isNewUsrInfo',
  method: 'POST',
  handler: async (req, res) => {
    const fullName = req.body.fullName?.trim() ?? '';
    const address = req.body.address?.trim() ?? '';
    await setIsNewUsrInfoPerson(fullName, address);
    res.writeHead(204).end();
  }
};

export default [getLastPersonRoute, setIsNewUsrInfoPersonRoute];
