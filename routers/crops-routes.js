const router = require('express').Router();
const connection = require('./../db');

// Retrieve all crops
router.get('/', (req,res) => {
    connection.query('SELECT * FROM crops', (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });
});

//  Retrieve crop with id
router.get('/:id', function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM crops where id=?', id, (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });

});

//  Create New crop
router.post('/', (req, res) => {
    let crop = req.body;

    connection.query("Insert into crops set ?; ", crop, (err, result) => {
        if (err) throw err;
        else
        {
            return res.send({ error: false, data: result, message: 'New crop has been added successfully.' });
        }
    });

});

// Update an existing crop
router.put('/:id', (request, response) => {
    const id = request.params.id;

    connection.query('UPDATE crops SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;

        response.send('Crop updated successfully.');
    });
});

// Delete a crop
router.delete('/:id', (request, response) => {
    const id = request.params.id;

    connection.query('DELETE FROM crops WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send('Crop deleted.');
    });
});

module.exports = router;
