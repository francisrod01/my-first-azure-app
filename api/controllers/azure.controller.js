const { listDatabases } = require('../services/azure-cosmos');

async function retrieveDatabases() {
  return await listDatabases();
}


module.exports = {
  retrieveDatabases,
};
