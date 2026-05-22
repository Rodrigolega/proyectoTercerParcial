const knex = require('knex');
const Config = require('./knexfile.js');
const db = knex(Config);

module.exports = db;