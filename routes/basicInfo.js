const {fetchDataFromSupabse} = require('./supabaseClient')

var express = require('express');
var router = express.Router();


router.get('/basicInfo', async (req, res) => {
    try {
        const users = await fetchDataFromSupabse({table: 'users'})
        console.log('/basicInfo/data', users)
        return res.status(200).json(users);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});

module.exports = router;
