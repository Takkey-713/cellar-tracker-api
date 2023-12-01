import express from 'express'
import router from './routers/router'

const app = express()
const port = process.env.PORT || 5001

app.use(express.json())

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

app.use('/api/v1', router)
