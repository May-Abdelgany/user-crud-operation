import express from 'express'
import userRouter from './modules/users/user.router.js'
const app = express();
app.use(express.json())
app.use(userRouter)
app.get("*", (req, res, next) => {
    res.json({ message: "404 page not found" })
})
app.listen(3000, () => {
    console.log("running server")
})