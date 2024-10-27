var express = require('express');
var router = express.Router();
const basicInfoRoutes = require('./basicInfo')
const userRoutes = require('./users')
const weatherRoutes = require('./weather')
const cors = require('cors')
const responseFormatter = require('./responseFormatter')
// 中间件
router.use(cors());
// router.use(express.json()); // 解析 JSON 请求体
router.use(responseFormatter);

// 使用路由
router.use('/users', userRoutes); // 用户路由
router.use('/basic', basicInfoRoutes); // 产品路由
router.use('/weather', weatherRoutes); // 天气路由


router.use((err, req, res, next) => {
    console.error(err)
    responseFormatter(res, false, null, err.message || '服务器内部错误')
})

module.exports = router;
