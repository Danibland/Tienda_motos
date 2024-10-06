const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const catalogoController = require("../controllers/catalogoController");

router.get("/registrar", registerController.getRegisterPage);
router.get("/login", loginController.getLoginPage);
router.get("/", catalogoController.getCatalogoPage);
router.post("/validar", registerController.register);

module.exports = router;
