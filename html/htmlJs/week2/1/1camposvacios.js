





document.getElementById('miFormulario').addEventListener('submit',function(event){
    let errores= [];

    let nombre = document.getElementById('nombre').value;

    let email = document.getElementById('email').value;

    let edad = document.getElementById('edad').value;

    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    if(nombre === ''){
        errores.push('El campo nombre es obligatorio.');
    }
    else{
        errores.push("")
    }


    if(email === ''){
        errores.push('El campo email es obligatorio');    
    }
    else{
        errores.push("")
        function esEmailValido(email){
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email)
        }
    
        if(!esEmailValido(email)){
            errores.push("El formato del correo es invalido.")
        }
        else{
            errores.push("")
        }
    }


    if (edad === ''){
        errores.push('El campo edad es obligatorio');
    }
    else{
        errores.push("")
        function esEdadValida(edad){
            let min = 18;
            let max = 65;
            return edad >= min && edad <= max;
        }

        if (!esEdadValida(edad)){
            errores.push("La edad debe ser entre 18 y 65 años")
        }
        else{
            errores.push("")
        }
    }


    if (numero1 === ''){
        errores.push('El numero 1 debe ser ingresado')
    }
    else{
        errores.push("")
    }

    if(numero2 === ''){
        errores.push("El numero 2 debe ser ingresado")
        }
    else{
       errores.push("")
    }


    

    if(errores.length > 0){
        event.preventDefault();

        document.getElementById('errores').innerHTML = errores.join('<br>');
    }
    else{
    }


    let total = document.getElementById("total")

    function suma(numero1,numero2){
        if(numero1 && numero2){
            return +numero1 + +numero2;
        }
        else{
            errores.push("Asegurese de ingresar datos")
            return "Ingrese numeros correctamente";
        }

    }

    let total1 = suma(numero1,numero2)
    total.innerHTML = "Total="+total1
    console.log(total1+"-"+numero1+"-"+numero2)


});