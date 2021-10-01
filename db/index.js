import { connect } from './db.js';
import { getOrganization, getLastOrganization, setIsNewUsrInfoOrganization } from './organizations.js';
import { getLastPerson, setIsNewUsrInfoPerson } from './persons.js';

export {
  connect,
  getOrganization,
  getLastOrganization,
  setIsNewUsrInfoOrganization,
  getLastPerson,
  setIsNewUsrInfoPerson
};

export default {
  connect,
  getOrganization,
  getLastOrganization,
  setIsNewUsrInfoOrganization,
  getLastPerson,
  setIsNewUsrInfoPerson
};
