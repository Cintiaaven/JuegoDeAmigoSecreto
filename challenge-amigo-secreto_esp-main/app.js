// Array donde se guardan los nombres ingresados
let amigos = [];

// Función para añadir un nombre
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validación: que no esté vacío ni contenga solo números
  if (nombre === "" || !isNaN(nombre)) {
    alert("Por favor, ingresa un nombre válido (no vacío y sin solo números).");
    return;
  }

  // Agrega el nombre al array
  amigos.push(nombre);

  // Limpia el input
  input.value = "";

  // Actualiza la lista visual
  actualizarLista();
}

// Función que actualiza la lista en pantalla
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpia el contenido anterior

  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// Función para hacer el sorteo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debes ingresar al menos un nombre para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indiceAleatorio];

  // Mostrar en una alerta
  alert("El amigo secreto es: " + ganador);

  // También lo mostramos en el HTML (opcional)
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${ganador}</li>`;
}
