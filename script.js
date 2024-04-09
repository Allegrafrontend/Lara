window.addEventListener('DOMContentLoaded', function() {
    var elementos = document.querySelectorAll('.elemento'); // Seleciona todos os elementos

    // Função para animar cada elemento individualmente
    function fadeIn(elemento, delay) {
        setTimeout(function() {
            elemento.style.opacity = '1'; // Define a opacidade como 1 para mostrar o elemento
        }, delay); // Define um atraso para cada elemento
    }

    // Loop para animar cada elemento com um atraso incremental
    elementos.forEach(function(elemento, index) {
        fadeIn(elemento, index * 500); // Atraso de 500ms entre cada elemento (pode ajustar conforme necessário)
    });
});