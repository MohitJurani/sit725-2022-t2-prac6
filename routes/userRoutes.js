var express = require("express");
var router = express.Router();

router.get('/', (_, res) => {
        res.json({statusCode: 200, message: 'Success', data: {'name': 'Mohit'}})
    })

module.exports = router;
