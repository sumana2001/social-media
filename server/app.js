const express=require('express');
const app=express();
const PORT=process.env.PORT||5000;
var mongoose = require('mongoose');
const {MONGOURI}=require('./keys');
require('./models/user');
require('./models/post');

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/user'));

mongoose.connect(MONGOURI, {useNewUrlParser: true,useUnifiedTopology: true});
var db = mongoose.connection;
db.on('connected',()=>{
    console.log("Connected to db");
})
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(PORT,()=>{
    console.log("Server is up at port",PORT)
})
