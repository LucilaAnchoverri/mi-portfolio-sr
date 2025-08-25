document.addEventListener("DOMContentLoaded", () => {
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".proyectosCard");
const Buttons = document.querySelectorAll(".proyectoBtn");


  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // quitar "active" de todos y agregar al clicado
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const tags = card.getAttribute("data-tags").split(",");

        if (filter === "all" || tags.includes(filter)) {
          card.style.display = "block"; // mostrar
        } else {
          card.style.display = "none"; // ocultar
        }
      });
    });
  });


  Buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank"); // abre en nueva pestaña
      }
    });
  });
});

