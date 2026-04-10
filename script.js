let cheat = false;

let currRow = 0;
let currCol = 0;

const solution = [
    ["C", "A", "X", "T", "S"],
    ["D", "X", "O", "G", "S"],
    ["B", "I", "R", "X", "D"],
    ["X", "F", "I", "S", "H"],
    ["L", "I", "X", "O", "N"]
];

document.addEventListener("DOMContentLoaded", () => {

    const layout = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
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

                // Moves user to next square with input
                input.addEventListener("input", () => {
                    const inputs = document.querySelectorAll("input"); 
                    const index = Array.from(inputs).indexOf(input);

                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                    console.log(index)   // 0 1
                    console.log(inputs.length - 1) // 19 19

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


 document.addEventListener("keydown", function(event) {
                    let current = document.activeElement
                    key = event.key
                    const row = Number(current.dataset.row);
                    const col = Number(current.dataset.col);                    
                    console.log(row)
                    console.log(col)
                    let next = null;

                    let nextRow = row;
                    let nextCol = col;

                    if (key == "ArrowRight") {

                        nextCol += 1
                        if (nextCol == 5) {
                            nextCol = 0; 
                            nextRow +=1;
                            if (row +1 == 5) {
                                nextCol = 0;
                                nextRow = 0;
                            }
                        }   
                    }
                    if (key == "ArrowLeft") {

                        nextCol -= 1
                        if (nextCol == -1) {
                            nextCol = 4; 
                            nextRow -= 1;
                            if (row - 1 == -1) {
                                nextCol = 4;
                                nextRow = 4;
                            }
                        }   
                    }
                    
                    console.log("NEXTCOL ", nextRow, nextCol)
                    next = document.querySelector(`[data-row="${nextRow}"][data-col="${nextCol}"]`);
                    next.focus();
                    /*
                    if (col + 1 == 5) {
                        if (row + 1 < 5) {
                        next = document.querySelector(`[data-row="${row +1}"][data-col="${0}"]`);
                        } else {
                            next = document.querySelector(`[data-row="${0}"][data-col="${0}"]`);

                        }
                    } else {
                        next = document.querySelector(`[data-row="${row}"][data-col="${col + 1}"]`);
                    }
                    console.log(next)*/
                    if (key == "ArrowRight") {
                        
                        
                    }
});