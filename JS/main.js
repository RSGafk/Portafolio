// Mostrar un mensaje de bienvenida en consola
console.log("Bienvenido al portafolio de Rubén Sánchez 😎");

// prueba de Efecto visual: cambia el color del header al hacer scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.backgroundColor = window.scrollY > 50 ? "#192a56" : "#273c75";
});
//Animaciones con Intersection Observer

const elementosAnimar = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            //observer.unobserve(entry.target);
        } else{
            entry.target.classList.remove("visible");
        }
    });
}, {
    threshold: 0.15,
});
elementosAnimar.forEach(elemento => {
    observer.observe(elemento);
});
