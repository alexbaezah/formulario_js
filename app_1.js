

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
        var edad = document.querySelector("#edad").value;

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