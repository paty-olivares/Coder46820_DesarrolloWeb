let bt_search =  document.getElementById('botonSearch');
bt_search.addEventListener('click',function() { 
  msgBotones();
}) ;
let bt_search1 =  document.getElementById('botonSearch1');
bt_search1.addEventListener('click',function() { 
  msgBotones();
}) ;
let bt_search2 =  document.getElementById('botonSearch2');
bt_search2.addEventListener('click',function() { 
  msgBotones();
}) ;
let bt_search3 =  document.getElementById('botonSearch3');
bt_search3.addEventListener('click',function() { 
  msgBotones();
}) ;
let bt_search4 =  document.getElementById('botonSearch4');
bt_search4.addEventListener('click',function() { 
  msgBotones();
}) ;

// Funciones para usar Toastify
const msgBotones = () => {

    Toastify({
      text: "Esta funcionalidad se agregará muy pronto.",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    
    }
