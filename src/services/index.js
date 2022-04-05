import express from "express";


const servicesRouter = express.Router()



servicesRouter.post("/")

servicesRouter.get("/")

servicesRouter.get("/:serviceId")

servicesRouter.put("/:serviceId")

servicesRouter.delete("/:serviceId")


export default servicesRouter