$(document).ready(function() {
    mascaraObloqueo();
});

function mascaraObloqueo() {
    const imagePath = '../../img/MascaraCargaSinFondo.gif';
    console.log(`Loading image from: ${imagePath}`);

    $.blockUI({
        // Cambia la ruta de la imagen si es necesario
        message: `<img src="${imagePath}" class="img-fluid" width="500" height="500">`,
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
