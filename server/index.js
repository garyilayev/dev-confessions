import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { expressCspHeader, SELF } from 'express-csp-header';
import dotenv from 'dotenv' ;

import confessionRoutes from './routes/confessions.js';

// init server
const app = express();
dotenv.config();

// Middleware
app.use(express.json({limit: "20mb", extended: true}));
app.use(express.urlencoded({limit: "20mb", extended: true}));
app.use(cors());


// Routes
app.use('/confessions', confessionRoutes);

app.use('/', (req, res) => {
    res.send('Welcome to Dev-Confessions API')
});

// Define connections
const PORT = process.env.PORT || 5050;

// DB connection
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
.catch(err => {
    console.log(err.message);
})
