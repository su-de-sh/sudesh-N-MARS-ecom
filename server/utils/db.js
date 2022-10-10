const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");
const { DATABASE_URL } = require("./config");

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
// const runMigrations = async () => {
//   const migrator = new Umzug({
//     migrations: {
//       glob: "migrations/*.js",
//     },
//     storage: new SequelizeStorage({ sequelize, tableName: "migrations" }),
//     context: sequelize.getQueryInterface(),
//     logger: console,
//   });

//   const migrations = await migrator.up();
//   console.log("Migrations up to date", {
//     files: migrations.map((mig) => mig.name),
//   });
// };

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    console.log("connected to the database");
  } catch (err) {
    console.log("failed to connect to the database");
    return process.exit(1);
  }

  return null;
};
const migrationConf = {
  migrations: {
    glob: "server/migrations/*.js",
  },
  storage: new SequelizeStorage({ sequelize, tableName: "migrations" }),
  context: sequelize.getQueryInterface(),
  logger: console,
};

const runMigrations = async () => {
  const migrator = new Umzug(migrationConf);
  const migrations = await migrator.up();
  console.log("Migrations up to date", {
    files: migrations.map((mig) => mig.name),
  });
};
const rollbackMigration = async () => {
  console.log("this should run");
  await sequelize.authenticate();
  console.log("this should not run");
  const migrator = new Umzug(migrationConf);
  await migrator.down();
};

module.exports = { connectToDatabase, sequelize, rollbackMigration };
