const express=require("express");
const app=express();

//enviornment file er object k process er moddhe import korechi
require("dotenv").config();
const PORT=process.env.PORT || 3000;

app.use(express.json());

const blog=require("./routes/blog")
app.use("/api",blog);

const connectdb=require("./config/database")
connectdb();

// Swagger setup
const { swaggerUi, swaggerSpec } = require('./config/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT,()=>{
    console.log("Server Running Successfully");
})

app.get('/',(req,res)=>{
    res.send(`<h1>This is Homepage</h1>`)
})