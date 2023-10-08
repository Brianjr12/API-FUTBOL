import express from 'express'
import morgan from 'morgan'
import router from './routes/appRoutes.js'

const app = express()
const port = 3000
app.use(morgan("dev"))
app.use(express.json())


app.listen(port, () => console.log(`app listening on port ${port}!`))
app.use("/api",router)