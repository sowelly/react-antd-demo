require('dotenv').config()

var express = require('express');
const cors = require('cors')
var path = require('path');
const apiRoutes = require('./routes/index')
var app = express();

const whiteList = ['http://localhost:3001','http://192.168.0.111:3001']

const corsOptions = {
    origin: (origin, callback) => {
        console.log('origin', origin)
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


app.use('/api', apiRoutes)

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../client/build')));


// 所有其他请求都重定向到 React 应用
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

// app.get('*', (req, res) => {
//     console.log('req.originalUrl', req.originalUrl)
//     res.redirect(`http://localhost:3001${req.originalUrl}`);
// });


//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const PORT = process.env.PORT||8088;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
