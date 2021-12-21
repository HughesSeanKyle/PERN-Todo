const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
	user: 'postgres',
	password: process.env.postgrespw,
	host: 'localhost',
	port: 5432,
	database: 'perntodo',
});

module.exports = pool;

/*
    This creates a new pool based on the postgres super Admin/user
    - - The perntodo db will be used for this project 

    - - You now export this so that this may be used as a config file for postgres. 

    - - See notes for more on Database pooling 
*/
