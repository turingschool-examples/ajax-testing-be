exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE entries(
    id SERIAL PRIMARY KEY NOT NULL,
    author TEXT,
    body TEXT,
    created_at TIMESTAMP
  )`;
  return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE entries`;
  return knex.raw(dropQuery);
};
