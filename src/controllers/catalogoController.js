const path = require('path');

exports.getCatalogoPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/catalogo.html'));
};
