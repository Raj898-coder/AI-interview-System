import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
dotenv.config()
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app = express()

app.use(cors({
    origin:"https://ai-interview-systems-1.onrender.com/",
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())

// Root Route
app.get("/", (req, res) => {
    res.send("Backend is Running Successfully 🚀")
})

app.use("/api/auth" , authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview" , interviewRouter)
app.use("/api/payment" , paymentRouter)

const PORT = process.env.PORT || 6000

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})
