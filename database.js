const mongoose = require('mongoose');

const connection = 'mongodb+srv://sanyam:root@cluster0-wlyxq.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connection, { useNewUrlParser: true })
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err))