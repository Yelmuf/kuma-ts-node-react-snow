import { Application } from "express"

export const setupApi = (app: Application): void => {

  app.get('/ping', (req, res) => {
    res.send("Pong")
  })
}