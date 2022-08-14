const express = require('express');
const mongoose = require('mongoose');
const app = express();

// mongoose.connect('mongodb://cerebro:mypassword@192.168.176.2:27017/?authSource=admin')
mongoose.connect('mongodb://cerebro:mypassword@mongo:27017/?authSource=admin')
.then(() => {console.log('Succesfully connected to db')})
.catch(err => {  console.log(err)});

app.get('/', (req, res) => {
res.send('<h2>this is me</h2>');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('LISTEN TO 3000'))  