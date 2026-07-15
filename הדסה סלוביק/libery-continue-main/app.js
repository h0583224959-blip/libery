// app.js
const express = require('express');
const app = express();
const apiRouter = require('./routes/index.route');

app.use(express.json());

app.use('/api', apiRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running beautifully on port ${PORT}`);
});