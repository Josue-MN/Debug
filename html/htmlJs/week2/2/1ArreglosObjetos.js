let tareas = [];

function crearTarea(nombre, descripcion){
    let nuevaTarea = {
        id: Date.now(),
        nombre: nombre,
        descripcion: descripcion,
        completo: false
    };
    tareas.push(nuevaTarea);
}

function leerTareas(){
    return tareas;
}

function actualizarTarea(id, datosActualizados){
    let tarea = tareas.find(t => t.id === id);
    if(tarea){
        Object.assign(tarea, datosActualizados);
    }
}


function eliminarTarea(id){
    tareas = tareas.filter(t => t.id !== id);
}




crearTarea("Aprender JavaScript", "Estuadiar los conc3eptos basicos de JavaScript");
crearTarea("    Hacer ejercicio","Salir a correr duranate 30 minutos");

console.log(leerTareas())

actualizarTarea(tareas[0].id,{completada: true})

console.log(leerTareas());

eliminarTarea(tareas[1].id)

console.log(leerTareas())