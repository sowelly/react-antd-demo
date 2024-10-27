// responseFormatter.js
const responseFormatter = (req, res, next) => {
    res.sendResponse = (data, status = 200) => {
        res.status(status).json({
            status: 'success',
            code: status,
            data: data,
        });
    };

    res.sendError = (error, status = 400) => {
        res.status(status).json({
            status: 'error',
            code: status,
            message: error,
        });
    };

    next();
};

module.exports = responseFormatter;
