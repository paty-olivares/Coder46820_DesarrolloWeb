// Funciones para pagina de Boletos
//AGREGAR 
let bt_comprar1=  document.getElementById('botonComprar1');
bt_comprar1.addEventListener('click',function() { 
  msgBotonesAgregar();
}) ;
let bt_comprar2 =  document.getElementById('botonComprar2');
bt_comprar2.addEventListener('click',function() { 
  msgBotonesAgregar();
}) ;

let bt_comprar3 =  document.getElementById('botonComprar3');
bt_comprar3.addEventListener('click',function() { 
  msgBotonesAgregar();
}) ;

let bt_comprar4 =  document.getElementById('botonComprar4');
bt_comprar4.addEventListener('click',function() { 
  msgBotonesAgregar();
}) ;

//ELIMINAR 
let bt_eliminar1 =  document.getElementById('botonElimnar1');
bt_eliminar1.addEventListener('click',function() { 
  msgBotonesEliminar();
}) ;

let bt_eliminar2 =  document.getElementById('botonElimnar2');
bt_eliminar2.addEventListener('click',function() { 
  msgBotonesEliminar();
}) ;

let bt_eliminar3 =  document.getElementById('botonElimnar3');
bt_eliminar3.addEventListener('click',function() { 
  msgBotonesEliminar();
}) ;

let bt_eliminar4 =  document.getElementById('botonElimnar4');
bt_eliminar4.addEventListener('click',function() { 
  msgBotonesEliminar();
}) ;

const msgBotonesAgregar = () => {

  Toastify({
    text: "Has adquirido boletos, gracias por tu compra.",
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

  const msgBotonesEliminar = () => {

    Toastify({
      text: "Has eliminado boletos, puedes retomar tu compra en cualquier momento.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #E32636, #FF0800)",  
      },
      onClick: function(){} // Callback after click
    }).showToast();
    
    }