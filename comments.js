// Create web server for comments

// import modules
const express = require('express');
const router = express.Router();

// create comments array
const comments = [
    { id: 1, username: 'John', comment: 'Hello World!' },
    { id: 2, username: 'Jane', comment: 'Hi there!' },
    { id: 3, username: 'Bob', comment: 'How are you?' },
    { id: 4, username: 'Mary', comment: 'Nice to meet you!' },
    { id: 5, username: 'Mike', comment: 'Good morning!' },
];

// create route for GET /comments
router.get('/', (req, res) => {
    res.send(comments);
}
);

// create route for POST /comments
router.post('/', (req, res) => {
    const comment = {
        id: comments.length + 1,
        username: req.body.username,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
}
);

// create route for PUT /comments/:id
router.put('/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found.');
        return;
    }
    comment.username = req.body.username;
    comment.comment = req.body.comment;
    res.send(comment);
}
);

// create route for DELETE /comments/:id
router.delete('/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found.');
        return;
    }
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
}
);

// create route for GET /comments/:id
router.get('/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found.');
        return;
    }
    res.send(comment);
}
);


// Create web server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


// export router
// module.exports = router;  // in router.js file use this line of code to import router

// Run web server application
// node comments.js
// Open web browser and navigate to http://localhost:3000/comments
// Open Postman and send GET request to http://localhost:3000/comments
// Open Postman and send POST request to http://localhost:3000/comments
// Open Postman and send PUT request to http://localhost:3000/comments/1
// Open Postman and send DELETE request to http://localhost:3000/comments/1
// Open Postman and send GET request to http://localhost:3000/comments/1

// END
// ******************************************************
