const { listDatabases } = require('../services/azure-cosmos');

module.exports = {
  retrieveDatabases,
};

async function retrieveDatabases() {
  return await listDatabases();
}
