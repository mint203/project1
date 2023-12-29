const path = require('path');
const express = require('express');
const methodOverride = require('method-override')
const app = express();
const port = 3000;




const route = require('./routes');
const morgan = require('morgan');
app.use(morgan('combined'));

const db = require('./config/db')
// connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
/* HANDLEBARS - TEMPLATE ENGINES */
/*--------------------------------------------------------- */
const handlebars = require('express-handlebars');
const exp = require('constants');
const { signup } = require('./app/controllers/SiteControllers');
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
/*--------------------------------------------------------- */

route(app);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
