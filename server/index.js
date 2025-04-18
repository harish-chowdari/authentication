const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))
require("./db")

const AuthRoutes = require("./Routes/AuthRoutes") 
const OtpRouter = require("./Routes/OtpRoutes") 

app.use("/api", AuthRoutes)
app.use("/api", OtpRouter)

const port = process.env.PORT || 3000

 
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});

