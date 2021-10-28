const express = require('express');
const app = express();


app.get('/api/posts', (req, res) => {
    const posts = [
        {
            id: "sdfd",
            fname: "Anonymous"
        }
    ];
    res.json(posts);

});




module.exports = app;