document.getElementById('cambiarMensaje').addEventListener('click', function() {
    const mensajes = [
        '¡Felíz dia de nuestra 1° chateada! Mi amor, el inicio de muchos, y muchos más.',
        '¡Celebrando el amor! ¡Feliz Aniversario!',
        'Hoy es un día especial. 27 de marzo <3',
        '¡Amor eterno! ¡Hey vosh!'
    ];
    
    const randomIndex = Math.floor(Math.random() * mensajes.length);
    document.getElementById('mensaje').innerText = mensajes[randomIndex];
});

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Posición inicial aleatoria en el eje X
    particle.style.left = Math.random() * 100 + 'vw';
    
    // Variar tamaño de las partículas
    const size = Math.random() * 10 + 3; // Tamaño entre 3px y 13px
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Añadir la partícula al contenedor de partículas
    document.getElementById('particles').appendChild(particle);
    
    // Animar la partícula
    setTimeout(() => {
        particle.style.transform = 'translateY(-100vh)';
        particle.style.opacity = 0;
        
        // Eliminar la partícula del DOM después de la animación
        particle.addEventListener('transitionend', () => {
            particle.remove();
        });
    }, 10);
}

// Crear partículas cada 40 ms
setInterval(createParticle, 40);