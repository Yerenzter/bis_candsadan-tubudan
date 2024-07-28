const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cansadan_tubudandb'
});

module.exports = Object.freeze({ pool: pool });
