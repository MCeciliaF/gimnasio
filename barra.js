// Función para actualizar la barra de progreso basada en el desplazamiento del scroll
function updateProgressBarOnScroll() {
    const progressBar = document.querySelector('.current-progress-percentage');
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    if (progressBar) {
        progressBar.style.width = scrollPercentage + '%';
        progressBar.textContent = Math.round(scrollPercentage) + '%';
    }
}

// Añadir un evento de scroll para actualizar la barra de progreso
window.addEventListener('scroll', updateProgressBarOnScroll);
