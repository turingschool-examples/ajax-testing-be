const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knexfile')[environment];
const knex = require('knex')(configuration);

module.exports = {
  all: () => {
    let indexQuery = "SELECT * from entries";
    return knex.raw(indexQuery).then(resp => resp.rows);
  },
  find: (id) =>  {
    let getQuery = "SELECT * from entries WHERE id=?"
    return knex.raw(getQuery, [id]).then(resp => resp.rows[0] || undefined);
  },
  create: (entry) => {
    let insertQuery = "INSERT INTO entries (author, body, created_at) VALUES (?, ?, ?) RETURNING *";
    let insertData = [entry.author, entry.body, new Date()];
    return knex.raw(insertQuery, insertData).then(resp => resp.rows[0]);
  },
  destroy: (id) => {
    let destroyQuery = "DELETE FROM entries WHERE id=?";
    return knex.raw(destroyQuery, [id]);
  },
  destroyAll: () => {
    let destroyQuery = "DELETE FROM entries";
    let resetQuery = "ALTER SEQUENCE entries_id_seq RESTART WITH 1"
    return Promise.all([
      knex.raw(destroyQuery),
      knex.raw(resetQuery)
    ]);
  }
}
