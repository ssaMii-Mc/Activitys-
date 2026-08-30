const botones = document.querySelectorAll(".porciones button");
const filas = document.querySelectorAll("#tabla tbody tr");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const factor = Number(boton.dataset.factor);

    botones.forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");

    filas.forEach((fila) => {
      const celda = fila.querySelector(".cantidad");
      const base = Number(celda.dataset.base);
      const resultado = base * factor;
      celda.textContent = Number.isInteger(resultado) ? resultado : resultado.toFixed(1);
    });
  });
});