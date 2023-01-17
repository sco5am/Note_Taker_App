const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const notesRoute = require('./routes/notesRoute');
const htmlRoute = require('./routes/htmlRoute');

app.use(express.static('public'));
app.use(express.json());
app.use('/', notesRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));