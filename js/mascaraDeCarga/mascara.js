$(document).ready(function() {
    mascaraObloqueo();
});

function mascaraObloqueo() {
    $.blockUI({
        // Usa la URL completa de la imagen
        message: '<img src="https://angelcer3.github.io/DAL-Gaming/img/MascaraCargaSinFondo.gif" class="img-fluid" width="500" height="500">',
        css: {
            border: 'none',
            backgroundColor: 'rgba(138,221,45,0)',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            color: '#FFFFFF'
        }
    });

    // Asegúrate de que la imagen tenga tiempo suficiente para cargarse
    setTimeout($.unblockUI, 1600);
}
