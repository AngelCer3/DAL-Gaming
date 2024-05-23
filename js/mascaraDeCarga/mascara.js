$(document).ready(function() {
    mascaraObloqueo();
});

function mascaraObloqueo() {
    $.blockUI({
        //AQUI SOLOCA CAMBIA LA IMG Y COLOCA EL ORDEN DE TUS CARPETAS PARA QUE FUNCIONE BIEN
        message: ' <img src="https://angelcer3.github.io/DAL-Gaming/img/MascaraCargaSinFondo.gif" class="img-fluid" width="500" height="500">',
        css: {
            border: 'none',
            // padding: '15px', 
            backgroundColor: 'rgba(138,221,45,0)',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            // opacity: .5, 
            color: '#FFFFFF '
        }
    });

    setTimeout($.unblockUI, 1600);
}
document.addEventListener("DOMContentLoaded", () =>{
    let altura = document.getElementById('navSolido').offsetTop;
    window.addEventListener("scroll", () => {
        if (window.scrollY  > altura) {
           document.getElementById('navSolido').classList.add('menu-fixed');
        } else {
           document.getElementById('navSolido').classList.remove('menu-fixed');
        }
    });

});