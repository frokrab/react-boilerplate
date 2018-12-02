// Example PostgreSQL client config
//
// Please make a copy of this file in the same folder named config.js
// and replace the values with your own values credentials.
// 5432 is the default port number for PostgreSQL.
//
// 'dmi_notes' is the name of the database created for you with the 'db-setup' script.
// If you would like to use a different database, you will have to modify the script
// or setup the database and schema without the provided script.
//
// database/config.js is already in the .gitignore file for you.

module.exports = {
  user: 'YOUR_USERNAME',
  database: 'dmi_notes',
  host: 'YOUR_HOSTNAME',
  port: 5432,
};
