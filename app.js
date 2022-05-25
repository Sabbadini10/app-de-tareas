const fs = require('fs');

const process = require('process');

let tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

let archivo = require('./funcionesDeTareas');

let leerTareas = archivo.leerArchivo();

let agregarTareas = archivo.agregarArchivo();

let eliminarTareas = archivo.eliminarArchivo();

const accion = process.argv[2];

const id = +process.argv[3]

const titulo = process.argv[4];

const estado = process.argv[5];


switch (accion) {
    case 'listar':
        leerTareas
        for (let i = 0; i < tareas.length; i++) {
        console.log(`(${i + 1})_${tareas[i].titulo} - ${tareas[i].estado}`)
        }
        break;
    case 'agregar':
        agregarTareas
        tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
        let agregado = new Object();
        agregado = tareas.push({
            id: id,
            titulo: titulo,
            estado: estado,
        })
        fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 3))
        console.log(`
      =====================================
      = Su tarea se agrego correctamente  =
      =====================================
       `)
        console.log(`La tareas agregada es : ${agregado}`)
        break;
    case 'eliminar':
        eliminarTareas
        tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
        let eliminado = tareas.pop({
            id: id,
            titulo: titulo,
            estado: estado,
        })
        fs.writeFileSync('./tareas.json', JSON.stringify(tareas, null, 3))
        console.log(`
        =====================================
        = Su tarea se elimino correctamente =
        =====================================
      `)
        console.log(`La tareas eliminada es : ${eliminado.id}, ${eliminado.titulo}, ${eliminado.estado}`)
        break;
    case undefined: console.log(`
       ==============================================================
       =  Atencion - Tienes que pasar una accion.                   =
       =  Las acciones disponibles son : listar, agregar, eliminar. =
       ==============================================================
        `)
        break;

    default: console.log(`
   ==============================================================
   =  No entiendo que quieres hacer                             =
   =  Las acciones disponibles son : listar, agregar, eliminar. =
   ==============================================================
    `)
        break;
}

