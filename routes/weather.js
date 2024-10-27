const express = require('express')
const {getWeather} = require('../services/weather')

var router = express.Router();


router.get('/:city', async (req, res) => {
    try {
        const city = req.params.city; // 从 URL 中获取 city
        console.log('/getWeather/data', city)
        const users = await getWeather(city)
        return res.sendResponse(users)
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});

module.exports = router;
