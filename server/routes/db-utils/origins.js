'use strict';
const knex = require('../../../utils/knex');

const addOriginToDb = (obj) => {
  const { country, global } = obj;
  const newOrigin = {
    country,
    global
  };

  return knex('origins')
    .insert(newOrigin,['origins.id', 'country'])
    .then(([results]) => {
      if(results){
        return results;
      }
    });

};
  
module.exports = addOriginToDb;