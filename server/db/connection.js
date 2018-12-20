const monk = require('monk');
const connectionStirng = process.env.MONGODB_URI || 'localhost/messageboard';
const db = monk(connectionStirng);

module.exports = db;