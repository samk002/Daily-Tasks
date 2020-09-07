const mongoose = require('mongoose');

const connection = "mongodb+srv://sanyam:<password>@cluster0.wlyxq.mongodb.net/<databaseName>?retryWrites=true&w=majority"
mongoose.connect(connection, { useNewUrlParser: true })
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err))
