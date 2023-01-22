const { registeruser } = require("../Controoler/RegistrationController");

const routes = require("express").Router();

routes.post("/registeruser", registeruser);

module.exports = routes;
