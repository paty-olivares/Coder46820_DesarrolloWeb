//Javascript creado por mi para mi comisión de JavaScript
//Bibliografía:
//Estoy usando esta API de Músicos y Música gratutita que encontré
//Web Site:  https://rapidapi.com/Glavier/api/genius-song-lyrics1 
//Implementación: Búsqueda por información General del Artista se espera recibir el ID del artista.
//Cuando el usuario seleccione en el dropdown ejecutará el llamado a la API y modificará el DOM de acuerdo a los 
//valores encontrados en el Fetch.
//El API Key lo obtuve de forma gratuita registrándome en la página.

    

const txtBuscadorInput  = document.getElementById('ListadoBandas');
txtBuscadorInput.addEventListener("change",function() {   

//Pasando en el query de la API ? el Id del artista
const url = 'https://genius-song-lyrics1.p.rapidapi.com/artist/details/?id=' + txtBuscadorInput.value;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90dfb0d003mshbc6a59c838d531fp1ecbf4jsndc5cf57e1f9b',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};
try {
   
    fetch(url, options)
    .then( (resp) => resp.json() )
    .then( (data) => {
      //Busqueda por Id de Artista
      //console.log(data.artist.description_preview);
         
      node=document.getElementById("milista");      
     // console.log(node.childElementCount);
     
     //Limpiando la pantalla cada vez que seleccione un valor diferente
     if (node.childElementCount > 0) {
       // node.removeChild(node);      
       node.removeChild(document.getElementById("miLi"));            
     }

     //Creando mis nuevos componentes en el DOM
      const myfigure = document.createElement('figure')
      myfigure.id="miLi"
      myfigure.class="figure"          
      myfigure.innerHTML = `<img class="figure-img img-fluid rounded" src="${data.artist.image_url}" alt="Img of my band" >
               <figcaption class="myfigure-caption">${data.artist.description_preview}</figcaption>              
               `
               
      node.append(myfigure)



         })
       
} catch (error) {
	console.error(error);
}
})