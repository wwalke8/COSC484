const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, err => {
        if(err) throw err;
    }
    
);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
app.use(express.json());

app.listen(port, () => {
    const usersRouter = require('./routes/users');
    const postsRouter = require('./routes/posts');
    const commentsRouter = require('./routes/comments');

    app.use('/users', usersRouter);
    app.use('/posts', postsRouter);
    app.use('/comments', commentsRouter);

    console.log(`Server is running on port: ${port}`);
});