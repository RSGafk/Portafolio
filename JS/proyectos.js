// seccion dinamica de proyectos donde se crea una arreglo de proyectos y se muestran en el html
// 1. Definimos un arreglo de proyectos
const proyectos = [
{
    titulo: "Sistema de Gestión de Inventario (SGI)",
    descripcion: "Aplicación para controlar materiales, entradas y salidas en almacén, con reportes automáticos.",
    tecnologias: ["MySQL", "C#", "Windows Forms."],
    link: "html/sgi.html"
},
/*{
//espacio para agregar otro proyecto
},
{
//espacio para agregar otro proyecto
}*/
];

// 2. Obtenemos el contenedor donde se mostrarán los proyectos
const contenedor = document.getElementById("lista-proyectos");

// 3. Recorremos el arreglo y creamos las tarjetas
proyectos.forEach(proyecto => {
  // Creamos un elemento div para cada tarjeta
const card = document.createElement("div");
card.classList.add("proyecto");

  // Generamos el contenido HTML de la tarjeta
card.innerHTML = `
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <p><strong>Tecnologías:</strong> ${proyecto.tecnologias.join(", ")}</p>
    <a href="${proyecto.link}" >Ver proyecto</a>
`;

  // Agregamos la tarjeta al contenedor
contenedor.appendChild(card);
});