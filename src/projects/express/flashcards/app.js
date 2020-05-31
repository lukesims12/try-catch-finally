const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const names = [
    ["Luke", "Sims"],
    ["Adam", "Sims"]
]

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'))
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error("New Error!")
    err.status = 500;
    next();
});

app.use((req, res, next) => {
    next();
});

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
});

app.listen(3000, () => {
    console.log("Running on localhost:3000.")
});