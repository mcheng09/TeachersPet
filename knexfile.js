var databaseName = 'teacherspet';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'teacherspet'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
