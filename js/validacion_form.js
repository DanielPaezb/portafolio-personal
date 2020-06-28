(function () {
  //Funcion auto invocada (Protege mis variables)
  var formulario = document.getElementById("form"), // Accedemos al ID 'formulario'
    nombre = formulario.nombre, // Creo la variable nombre y lo enlazo al formulario
    correo = formulario.correo, // Creo la variable correo y lo enlazo al formulario
    mensaje = formulario.mensaje, // Creo la variable mensaje y lo enlazo al formulario
    errores = document.getElementById("errores"); // Accedo al contendor con ID errores.
  //Validaciones sencillas de campos
  function validarNombre(e) {
    if (nombre.value == null || nombre.value == "") {
      console.log("Complete el campo de nombre");
      errores.style.dysplay = "block"; //Muestra el contenedor oculto 'errores'
      errores.innerHTML += "<li>Digite su nombre </li>"; // Concatena el error anterior con el siguiente y me agrega una nueva linea.
      e.preventDefault(); // Previene que el formulariose envíe por defecto luego de las validaciones, detiene su ejecución hasta validar.
    } else {
      errores.style.display = "none"; //Cada error concatenado va desapareciendo a medida que se rellenan los campos.
    }
  }

  function validarCorreo(e) {
    if (correo.value == null || correo.value == "") {
      console.log("Complete el campo de correo");
      errores.style.style = "block";
      errores.innerHTML += "<li>Digite su email</li>";
      e.preventDefault();
    } else {
      errores.style.display = "none";
    }
  }

  function validarMensaje(e) {
    if (mensaje.value == null || mensaje.value == "") {
      console.log("Complete el campo del mensaje");
      errores.style.display = "block";
      errores.innerHTML +="<li>Complete el campo mensaje</li>";
      e.preventDefault();
    } else {
      errores.style.display = "none";
    }
  }

  function validarForm(e) {
    //Función que me reune todas las funciones anteriores a una sola.
    errores.innerHTML = "";
    validarNombre(e);
    validarCorreo(e);
    validarMensaje(e);
  }
  formulario.addEventListener("submit", validarForm);
})();
