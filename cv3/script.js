document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.portfolio-filters .filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-grid .portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Remover la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir la clase 'active' al botón clickeado
            event.target.classList.add('active');

            const filterValue = event.target.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block'; // Mostrar todos los elementos
                } else {
                    // Si el elemento no tiene la clase del filtro, ocultarlo
                    if (!item.classList.contains(filterValue)) {
                        item.style.display = 'none';
                    } else {
                        item.style.display = 'block'; // Mostrar el elemento si coincide con el filtro
                    }
                }
            });
        });
    });
});