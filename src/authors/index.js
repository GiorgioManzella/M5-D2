import express from "express";


const authorsRouter = express.Router()



authorsRouter.post("/", () => {})

authorsRouter.get("/", () => {})

authorsRouter.get("/:authorsId", () => {})

authorsRouter.put("/:authorsId", () => {})

authorsRouter.delete("/:authorsId", () => {})


export default authorsRouter