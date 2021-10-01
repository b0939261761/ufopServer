import pathToRegexp from 'path-to-regexp';
import organizations from './organizations.js';
import persons from './persons.js';

//= ============================================================================

const router = [
  ...organizations,
  ...persons
];

export default (url, method) => {
  let params = {};
  const findRoute = route => {
    if (route.method !== method) return false;
    const match = pathToRegexp.match(route.url)(url);
    if (!match) return false;
    ({ params } = match);
    return true;
  };

  const route = router.find(findRoute);
  if (!route) return null;
  return {
    handler: route.handler,
    params
  };
};
