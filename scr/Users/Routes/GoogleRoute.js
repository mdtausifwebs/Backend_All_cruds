const {
  googleRegister,
  googleLogin,
} = require("../Controoler/GoogleController");

const routes = require("express").Router();

routes.post("/googleregister", googleRegister);
routes.post("/googlelogin", googleLogin);

module.exports = routes;
