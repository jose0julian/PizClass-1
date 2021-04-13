const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("En el middleware");
    next();
});

app.use((req, res, next) => {
    res.send('<h1>PizClass</h1>');
});

app.listen(3000);