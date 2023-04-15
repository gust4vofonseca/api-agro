module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'agro123',
    database: 'postgres',
    synchronize: false,
    logging: false,
    migrationsTableName: 'migration',
    entities: process.env.NODE_ENV === 'dev' ? ['src/modules/**/infra/typeorm/entities/*.ts'] : ['dist/modules/**/infra/typeorm/entities/*.js'],
    migrations: process.env.NODE_ENV === 'dev' ? ['src/shared/infra/typeorm/migrations/*.ts'] : ['dist/shared/infra/typeorm/migrations/*.js'],
    cli: {
      entitiesDir: 'src/modules/**/infra/typeorm/entities',
      migrationsDir: 'src/shared/infra/typeorm/migrations',
    },
  },
]
