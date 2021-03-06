const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

//connect DB
connectDB();

//Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => {
    res.send("Hello World!")
})

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))


app.listen(PORT, ()=> {
    console.log(`Connected on port ${PORT}`)
})