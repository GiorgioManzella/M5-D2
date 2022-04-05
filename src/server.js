// const express = require("express") // OLD SYNTAX
import express from "express" // <-- NEW IMPORT SYNTAX (remember to add "type": "module" to package.json to use it!)


const server = express()

server.listen(3001, () => {
  console.log('server is running on 3001')
})



