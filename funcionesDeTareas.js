const fs = require('fs');
let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
let archivoTareas = {
  archivo: 'tareas.json',
  leerArchivo: function () {
        fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 3));
  },
  agregarArchivo: function () {

  },
  eliminarArchivo: function () {

  }
}



module.exports = archivoTareas;
