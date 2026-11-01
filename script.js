const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value;

        if (!expression || !/^[0-9+\-*/%.() ]+$/.test(expression)) {
            throw new Error("Invalid");
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid");
        }

        display.value = String(
            Number(result.toFixed(10))
        );

    } catch {
        display.value = "Error";
    }
}
