const Router = require("express")
const loginRoute = Router()
const loginHandler = require("../handlers/logHandler")

loginRoute.post("/services/auth/signin", loginHandler)

module.exports = loginRoute