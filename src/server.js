// const express = require("express") // OLD SYNTAX
import express from "express" // <-- NEW IMPORT SYNTAX (remember to add "type": "module" to package.json to use it!)
import listEndpoints from 'express-list-endpoints'
import servicesRouter from "./services/index.js"

const server = express()
const port = 3001


server.use("/services", servicesRouter)

server.listen(port, () => {

  console.table(listEndpoints(server))
  console.log(`server is running on ${port}`)
})



