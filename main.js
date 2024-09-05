const formulario = document.getElementById('id-formulario');
const cambioEstilo = document.getElementById('style-contraste');


formulario.addEventListener("submit",(e) =>{
    e.preventDefault();
    if(formulario.checkValidity()){
        alert("Formulario completado correctamente");
    } else{
        formulario.reportValidity();
        alert("Error al completar el formulario. Verifica los campos requeridos")
    }
})
cambioEstilo.addEventListener('click',()=>{
    const linkCss=document.getElementById('styles');
    const currentAttribute=linkCss.getAttribute('href');
    if(currentAttribute=='./css/styles.css'){
        linkCss.setAttribute('href', './css/styles-contraste.css');
    }else{
        linkCss.setAttribute('href', './css/styles.css')
    }
})

