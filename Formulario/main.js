const btn = document.querySelector('#botonEnviar');
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#respuesta');
var botonEnviar = document.getElementById('botonEnviar');// Obtener el botón de enviar


/*Funcion para sacar los datos del Formulario con FormData (ve la leccion anterior)*/

const getData = () => {
  const datos = new FormData(formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  formulario.reset();
  return datosProcesados;
}



/*Funcion para colocar los datos en el Servidor */

const postData = async () => {
 
  /*Crea un objeto con la informacion del formulario*/
   const newUser = getData();

   try{
    const response = await fetch('http://localhost:3000/users', {
    /*especifica el metodo que se va a usar*/
    method: 'POST',
    /*especifica el tipo de informacion (JSON)*/
    headers: {'Content-Type': 'application/json'},
    /*coloca la informacion en el formato JSON */
    body: JSON.stringify(newUser)
    });
    

    if(response.ok){
        const jsonResponse = await response.json();

        /* Codigo a ejecutarse con la respuesta*/

        const {name, area, empresa, residencia, trabajo} = jsonResponse;

        respuesta.innerHTML = 
        `<ul> 
           ¡Exito! Se guardó la siguiente información:
          <li>${name}</li> 
          <li>${area}</li> 
          <li>${empresa}</li>
          <li>${residencia}</li> 
          <li>${trabajo}</li>
        </ul>`
       
    }
   
   }catch(error){
     console.log(error);
   }
   
}

btn.addEventListener('click', (event) => {
  event.preventDefault();
  postData();
  
})

// Agregar evento de clic al botón
botonEnviar.addEventListener('click', function() {

  // Ejemplo de limpieza de checkboxes (desmarcar todos los checkboxes)
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
  });

  // Ejemplo de limpieza de campos de texto (vaciar campos de texto)
  var camposTexto = document.querySelectorAll('input[type="text"]');
  camposTexto.forEach(function(campo) {
      campo.value = '';
  });


  // Deshabilitar el botón de enviar después de limpiar
  botonEnviar.disabled = true;
});