const router = require('express').Router();
const connection = require('./../db');

// Retrieve all users
router.get('/', (req,res) => {
    connection.query('SELECT * FROM users', (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });
});

//  Retrieve user with email
router.get('/:email', function (req, res) {
    let email = req.params.email;
    connection.query('SELECT * FROM users where email=?', email, (err, result) => {
        if (err) throw err;
        else
          return res.json(result)
    });

});

//  Create New user
router.post('/', (req, res) => {
    let user = req.body;

    connection.query("Insert into users set ?; ", user, (err, result) => {
        if (err) throw err;
        else
        {
            return res.send({ error: false, data: result, message: 'New user has been added successfully.' });
        }
    });

});

// Update an existing user
router.put('/:email', (request, response) => {
    const email = request.params.id;

    connection.query('UPDATE users SET ? WHERE email = ?', [request.body, email], (error, result) => {
        if (error) throw error;

        response.send('User updated successfully.');
    });
});

// Delete a user
router.delete('/:email', (request, response) => {
    const email = request.params.id;

    connection.query('DELETE FROM users WHERE email = ?', email, (error, result) => {
        if (error) throw error;

        response.send('User deleted.');
    });
});

module.exports = router;
