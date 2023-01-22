const PORT = process.env.PORT || 3001;
const express = require('express')
const app = express()

const path = require('path')
const fs = require('fs')
const notesRoute = require('./routes/notesRoute/notesRoute');
const htmlRoute = require('./routes/htmlRoute');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());

app.use('/api', notesRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));