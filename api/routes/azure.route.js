const express = require('express');
const asyncHandler = require('express-async-handler');
const azureCtrl = require('../controllers/azure.controller');

const router = express.Router();

router.get('/cosmos', asyncHandler(getCosmosDBs));


async function getCosmosDBs(req, res) {
  let databases = await azureCtrl.retrieveDatabases();

  databases = databases.map(db => {
    delete db._etag;
    return db;
  });

  res.json(databases);
}


module.exports = router;
