const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/'));

// Heroku bydefault set an ENV variable called PORT=443
//  so that you can access your site with https default port.
// Falback port will be 8080; basically for pre-production test in localhost
// You will use $ npm run prod for this
app.listen(process.env.PORT || 8080);
