let cheat = false;



const solution = [
    ["C", "A", "#", "T", "S"],
    ["D", "#", "O", "G", "S"],
    ["B", "I", "R", "#", "D"],
    ["#", "F", "I", "S", "H"],
    ["L", "I", "#", "O", "N"]
];

document.addEventListener("DOMContentLoaded", () => {

    const layout = [
        ["", "", "#", "", ""],
        ["", "#", "", "", ""],
        ["", "", "", "#", ""],
        ["#", "", "", "", ""],
        ["", "", "#", "", ""]
    ];

    const grid = document.getElementById("grid");

    layout.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            if (cell === "#") {
                const div = document.createElement("div");
                div.classList.add("cell", "block");
                grid.appendChild(div);
            } else {
                const input = document.createElement("input");
                input.maxLength = 1;
                input.classList.add("cell");

                input.dataset.row = rowIndex;
                input.dataset.col = colIndex;

                // 👇 ADD THIS BLOCK HERE
                input.addEventListener("input", () => {
                    const inputs = document.querySelectorAll("input");
                    const index = Array.from(inputs).indexOf(input);

                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                });

                grid.appendChild(input);
            }
        });
    });

});


function checkAnswers() {
    const inputs = document.querySelectorAll("input");
    cheat = !cheat
    if (cheat) {
    inputs.forEach(input => {
        const row = input.dataset.row;
        const col = input.dataset.col;

        const correct = solution[row][col];
        const user = input.value.toUpperCase();

        if (user === correct) {
            input.style.backgroundColor = "lightgreen";
        } else {
            input.style.backgroundColor = "salmon";
        }
    });
    } else {
        inputs.forEach(input => {
        const row = input.dataset.row;
        const col = input.dataset.col;



        input.style.backgroundColor = "white";
    });
    }
    

}