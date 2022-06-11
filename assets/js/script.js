var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Evento para cambiar de color al hacer Doble Click en INGREDIENTES y PREPARACION
$(document).ready(function () {
  $("u").dblclick(function () {
    $(this).css('color','red');
  });
});

// Evento para crear alerta al presionar en botón ENVIAR CORREO
document.getElementById('enviarCorreo').onclick = function(){
    alert('El correo fue enviado correctamente...');
};

// Evento Toggle para mostrar o ocultar el contenido de las tarjetas
$(document).ready(function(){
    $(".card").click(function(){
        $('.card-text').toggle("slow");
    })
})
