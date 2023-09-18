// Funciones para pagina de Boletos
//Enviar 
let bt_EnviarForm=  document.getElementById('botonEnviarForm');
bt_EnviarForm.addEventListener('click',function() { 
  msgBotonesEnviar();
}) ;

let bt_LimpiarForm=  document.getElementById('botonElimnarForm');
bt_LimpiarForm.addEventListener('click',function() { 
  msgLimpiarFormulario();
}) ;


const msgBotonesEnviar = () => {

  Toastify({
    text: "Tu Mensaje ha sido enviado. Gracias por contactarnos",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #0039a6, #00BFFF)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  
  }

  const msgLimpiarFormulario = () => {

    window.location.reload();
    
    }