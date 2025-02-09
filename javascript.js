document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los grupos de cantidad de productos
    const productContainers = document.querySelectorAll(".div__product-amount");

    productContainers.forEach(container => {
        // Obtener los botones y el input dentro de cada producto
        const decreaseButton = container.querySelector(".amount-btn:first-child");
        const increaseButton = container.querySelector(".amount-btn:last-child");
        const amountInput = container.querySelector("input[name='amount']");

        // Función para aumentar la cantidad
        increaseButton.addEventListener("click", function () {
            amountInput.value = parseInt(amountInput.value) + 1;
        });

        // Función para disminuir la cantidad (mínimo 0)
        decreaseButton.addEventListener("click", function () {
            if (parseInt(amountInput.value) > 0) {
                amountInput.value = parseInt(amountInput.value) - 1;
            }
        });
    });
});
