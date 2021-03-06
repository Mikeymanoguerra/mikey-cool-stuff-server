'use strict';

const knex = require('../utils/knex');
const fs = require('fs');

module.exports = function(file) {
  const sql = fs.readFileSync(file).toString();
  return knex.raw(sql);
};