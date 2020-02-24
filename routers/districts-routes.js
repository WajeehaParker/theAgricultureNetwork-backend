const router = require('express').Router();
const connection = require('./../db');

//  Retrieve districts
router.get('/', (req,res) => {
    connection.query('SELECT * FROM districts', (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });
});

//  Retrieve control with id
router.get('/:province', function (req, res) {
    let province = req.params.province;
    connection.query('SELECT name FROM districts where province=?', province, (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });
});
module.exports = router;
