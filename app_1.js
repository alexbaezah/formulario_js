

// para capturar el formulario, se le pone un id

window.addEventListener('load', function() {
    console.log("Dom cargado!")

    var formulario = document.querySelector("#formulario") //acá lo seleccionamos
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    

    formulario.addEventListener('submit', function(){
        console.log("evento submit capturado") //acá probamos si captura el submit

        var nombre = document.querySelector("#nombre").value; 
        var apellidos = document.querySelector("#apellidos").value; 
        var edad = parseInt(document.querySelector("#edad").value);
        
        if(nombre.trim() === null || nombre.trim().length === 0){
            alert("el nombre no es válido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es válido";
            return false;
        }else {
            document.querySelector("#error_nombre").style.display = "none"
        }

        if(apellidos.trim() === null || apellidos.trim().length === 0){
            alert("el apellido no es válido");
            return false;
        }

        if(edad === null || edad <= 0 || isNaN(edad)){
            alert("el edad no es válida");
            return false;
        }

        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellidos, edad];
        var index
        for(index in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[index]);
            box_dashed.append(parrafo)
             
        }

        console.log(nombre, apellidos, edad); //para comprobar si se retornan

      
    });
});