const appInsights = require('applicationinsights');
const azureCtrl = require('../controllers/azure.controller');

appInsights.setup()
  .setAutoCollectConsole(true, true)
  .start();

async function getCosmosDBs(context, req) {
  let databases = await azureCtrl.retrieveDatabases();

  databases = databases.map(db => {
    delete db._etag;
    return db;
  });

  context.res.json(databases);
}

module.exports = getCosmosDBs;
