const express = require('express');

const app = express();
app.set('view engine', 'ejs')
.use(express.static(__dirname + '/public'))
.use('/', require('./routes/feed'))

//app.use('/feed', feedRoutes);

app.listen(8080);