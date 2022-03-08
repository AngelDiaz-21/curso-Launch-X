var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    // Que cuando presionemos un clic tengan un cambio a sus clases y agregue la clase active
btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

// Cuando cerramos el popup quitamos la clase
btnCerrarPopup.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
    // Con esto reiniciamos el formulario cada que lo cerramos
    $('input[type=text]').val('');
    $('input[type=email]').val('');
    $('input[type=password]').val('');
});