const texto = `
Hay personas que aparecen sin avisar,
pero terminan convirtiéndose
en la parte más bonita de los días.

Y aunque el tiempo avance,
hay miradas que simplemente
no se olvidan.
`;

let i = 0;

function escribir() {

    if (i < texto.length) {

        document.getElementById("poema").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir, 50);
    }
}

window.onload = function () {
    escribir();
}

function mostrarMensaje() {

    const mensaje = document.getElementById("mensajeFinal");

    mensaje.classList.add("mostrar");
}