const router = require('express').Router();
const connection = require('./../db');

// Retrieve all controls
router.get('/', (req,res) => {
    connection.query('SELECT * FROM cultural_control', (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });
});

//  Retrieve control with id
router.get('/:id', function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM cultural_control where id=?', id, (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });

});

//  Create New control
router.post('/', (req, res) => {
    let control = req.body;

    connection.query("Insert into cultural_control set ?; ", control, (err, result) => {
        if (err) throw err;
        else
        {
            return res.send({ error: false, data: result, message: 'New cultural control has been added successfully.' });
        }
    });

});

// Update an existing crop
router.put('/:id', (request, response) => {
    const id = request.params.id;

    connection.query('UPDATE cultural_control SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;

        response.send('Cultural control updated successfully.');
    });
});

// Delete a crop
router.delete('/:id', (request, response) => {
    const id = request.params.id;

    connection.query('DELETE FROM cultural_control WHERE id = ?', id, (error, result) => {
        if (error) throw error;

        response.send('Cultural control deleted.');
    });
});

module.exports = router;
