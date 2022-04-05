import express from "express";
import fs from "fs"
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const authorsRouter = express.Router()
const userJSONPath = ""


const currentFilePath = fileURLToPath(import.meta.url)
const parentFolder = dirname(currentFilePath)
const authorsJsonPath = join(parentFolder, "authors.json")


authorsRouter.post("/", (req, res) => {

    res.send({message: "hello post is here"})
    console.log('post funziona')
})

authorsRouter.get("/", (req, res) => {
    const fileContent = fs.readFileSync(authorsJsonPath)

    const authorsArray = JSON.parse(fileContent)


    res.send(authorsArray)
})

authorsRouter.get("/:authorsId", (req, res) => {})

authorsRouter.put("/:authorsId", (req, res) => {})

authorsRouter.delete("/:authorsId", (req, res) => {})


export default authorsRouter