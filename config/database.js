module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        host: env(
          "DATABASE_HOST",
          "cluster0-5sncc.mongodb.net/test?retryWrites=true"
        ),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "coding-toast-api"),
        username: env("DATABASE_USERNAME", "admin"),
        password: env("DATABASE_PASSWORD", "Ie31!2w5WGK9"),
        srv: env("DATABASE_SRV", true),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", "admin"),
        ssl: env("DATABASE_SSL", true),
      },
    },
  },
});
