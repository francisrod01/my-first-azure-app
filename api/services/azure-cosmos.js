const { CosmosClient } = require('@azure/cosmos');
const config = require('../config/config');
const azure = config.azure;

async function listDatabases() {
  // Establish a new instance of the CosmosClient to be used throughout this demo
  const dbClient = new CosmosClient({
    endpoint: azure.endpoint,
    key: azure.masterKey,
  });

  const { resources } = await dbClient.databases.readAll().fetchAll();
  console.log('[AZURE] all databases: ', resources);

  return resources;
}


module.exports = {
  listDatabases,
};
