const {fetchDataFromSupabse} = require('./supabaseClient')

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    console.log('Received request for users', req); // 调试输出
    fetchDataFromSupabse({
        table: 'user', // 指定表名
        columns: '*', // 查询所有列
    }).then(data => {
        console.log('/all',  data)
        return res.status(200).json(data);
    }).catch(e => {
        return res.status(500).json({error: e.message});
    })
});
router.get('/:userId', (req, res) => {
    const userId = req.params.userId; // 从 URL 中获取 userId
    // 这里可以根据 userId 查询数据库
    fetchDataFromSupabse({table: 'user', columns:'id',filters: {id: JSON.parse(userId)}}).then(user => {
        console.log('/users/data', user, userId)
        return res.status(200).json(user);
    }).catch(e => {
        return res.status(500).json({error: e.message});
    })

});
module.exports = router;
