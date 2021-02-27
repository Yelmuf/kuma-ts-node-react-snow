import express from "express"
import { setupApi } from "./api"

const PORT = 9009

const app = express()

setupApi(app)

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
