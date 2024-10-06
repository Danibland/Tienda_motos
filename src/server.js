const express = require("express");
const path = require("path");
const app = express();
const port = 8080;



// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Importar rutas
const routes = require("./routes/routes");

// Usar las rutas
app.use("/", routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

