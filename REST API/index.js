import express from "express";
import bodyParser from "body-parser";

import userRoutes from './routes/users.js';

const app = express();
const PORT = 6969;

app.use(bodyParser.json());

app.listen(PORT, () =>{
    console.log(`Server is ready on PORT: ${PORT}`)
})

app.use('/users', userRoutes);

app.get('/', (req,res) => {
    res.send("Homepage");
});