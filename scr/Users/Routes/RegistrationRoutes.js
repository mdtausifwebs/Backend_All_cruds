const { isAuths } = require("../../middleware/IsAuths.js");
const {
  registeruser,
  userlist,
} = require("../Controoler/RegistrationController");

const routes = require("express").Router();

routes.post("/registeruser", registeruser);
routes.get("/users", isAuths, userlist);
module.exports = routes;
