require('dotenv').config();
const server = require('./src/server');
const config = require('./config');

const port = config.get('port');
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});
