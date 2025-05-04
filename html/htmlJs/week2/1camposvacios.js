document.getElementById('miFormulario').addEventListener('submit',function(event){
    let errores= [];

    let nombre = document.getElementById('nombre').value;

    let email = document.getElementById('email').value;

    let edad = document.getElementById('edad').value;

    if(nombre === ''){
        errores.push('El campo nombre es obligatorio.');
    }

    if(email === ''){
        errores.push('El campo email es obligatorio');    
    }

    if (edad=== ''){
        errores.push('El campo edad es obligatorio');
    }

    if(errores.length > 0){
        event.preventDefault();

        document.getElementById('errores').innerHTML = errores.join('<br>');
    }
});