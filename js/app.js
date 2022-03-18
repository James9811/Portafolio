const btn = document.querySelector('.hamburguesa'); 
const listas = document.querySelector('.menu '); 

 btn.addEventListener('click',()=>{
listas.classList.toggle('actives');
console.log("ledio");
 }) 
 var typed = new Typed('.typed',{
   strings:[
   '<i class="textoHtml5">Html5</i>',
   '<i class="textoCss">Css</i>',
   '<i class="textoBootstrap">Bootstrap</i>',
   '<i class="textoJavaScripts">JavaScripts</i>',
   '<i class="textoPhp">PHP "medio"</i>'
],
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
 })   


window.addEventListener('scroll', ()=>{
    const llegada = document.querySelector('#card');
   const ubicacion = llegada.getBoundingClientRect();
 
 // const scro = window.scrollY;
//console.log(scro)


if(ubicacion.top<560){
    llegada.classList.add('active')
}else{
    llegada.classList.remove('active')
}


});
window.addEventListener('scroll', ()=>{

    const img2 = document.querySelector('#our-img');
    const mi2_ubicacion = img2.getBoundingClientRect();



    if (mi2_ubicacion.top<400){
        img2.classList.add('active2')
       }else{
           img2.classList.remove('active2')
       }
    
});

