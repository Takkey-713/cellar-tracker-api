import express from 'express'
import cors from 'cors'
import router from './routers/router'

const app = express()
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
const port = process.env.PORT || 5001
app.use(express.json())
app.use('/api/v1', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
