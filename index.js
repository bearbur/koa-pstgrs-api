
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./src/router/index');
const app = new Koa();

const PORT = process.env.PORT || 3334;

// body parser
app.use(bodyParser());

// routes
app.use(indexRoutes.routes());

// server
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;