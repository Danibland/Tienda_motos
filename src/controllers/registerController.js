const { register } = require("module");
const path = require("path");
const UserService = require("../services/userService");



class RegisterController {
  getRegisterPage = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/registrar.html"));
  };

  async register(req, res) {
    try {
      const datos = req.body;
              
      console.log("Datos body " + datos);
      const user = await UserService.registerUser(datos);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.messaje });
    }
  }
}

module.exports = new RegisterController();
