exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE entries RESTART IDENTITY')
  .then(function() {
    return Promise.all([
      knex.raw(
        'INSERT INTO entries (author, body, created_at) VALUES (?, ?, ?)',
        ["nate@turing.io", "I hate mashed potatoes", new Date]
      ),
      knex.raw(
        'INSERT INTO entries (author, body, created_at) VALUES (?, ?, ?)',
        ["nate@turing.io", "I love rap music", new Date]
      ),
      knex.raw(
        'INSERT INTO entries (author, body, created_at) VALUES (?, ?, ?)',
        ["nate@turing.io", "I hate game shows", new Date]
      )
    ]);
  });
};
