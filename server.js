const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');

const items = require('./routers/api/items')
const app = express();
// Body parser Middleware
app.use(bodyParser.json());
// DB Config
const db = require('./config/dev_env').mongoURI;
//Connect to mongodb
mongoose.connect(db,{ useNewUrlParser: true })
.then(() => console.log("Mongodb connected..."))
.catch(err=> console.log(err));

// use routes
app.use('/api/items', items);


const port=process.env.PORT||5000;
app.listen(port, ()=> console.log('server started on port ${port}'));
