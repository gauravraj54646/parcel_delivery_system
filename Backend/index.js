const  express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");

dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(express.json()) //it can allowjson data



//routes
app.use("/auth",authRoute);

//database connection
const DB = process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log(`DB connection is Successfull!`);
}).catch((error)=>{
    console.log(error);
})


//server
const PORT = process.env.PORT;
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`)
} )