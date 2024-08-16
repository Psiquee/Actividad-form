const formulario= document.getElementById('id-formulario');
const cambioEstilo = document.getElementById('style-contraste');

cambioEstilo.addEventListener('click',()=>{
    const linkCss=document.getElementById('styles');
    const currentAttribute=linkCss.getAttribute('href');
    if(currentAttribute=='./css/styles.css'){
        linkCss.setAttribute('href', './css/styles-contraste.css');
    }else{
        linkCss.setAttribute('href', './css/styles.css')
    }
})

