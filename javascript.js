
// Funciones para incrementar y decrementar la cantidad
function increaseAmount() {
    let input = document.getElementById("amount");
    input.value = parseInt(input.value) + 1;
}

function decreaseAmount() {
    let input = document.getElementById("amount");
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

// Agregar eventos a los botones
document.getElementById("increase").addEventListener("click", increaseAmount);
document.getElementById("decrease").addEventListener("click", decreaseAmount);