$(document).ready(function () {
    $('.play-boton').on('click', () => {
        $('.play-boton').hide();
        localStorage.setItem('slide214', 'true')
        $('.cursor').hide();
        $('.boton-next').show();
        $('.reproduc').show();
        $('.vutom-col').hide();
    })
})