$(document).ready(function() {
    mascaraObloqueo();
});

function mascaraObloqueo() {
    $.blockUI({
        //AQUI SOLOCA CAMBIA LA IMG Y COLOCA EL ORDEN DE TUS CARPETAS PARA QUE FUNCIONE BIEN
        message: ' <img src="../img/MascaraCargaSinFondo.gif" class="img-fluid" width="500" height="500">',
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