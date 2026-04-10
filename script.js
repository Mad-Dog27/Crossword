const hintBox = document.getElementById("hintBox");
hintBox.innerText = "your hint here";
hintBox.style.display = "block";
let cheat = false;
let lastClickTime = 0;
let clickTimeout;
let rowToggle = false;
let currRow = 0;
let currCol = 0;


let counta = 0;
let countb = 0;
let prevrow = 0;
let prevcol = 0;


const hints_row = [
    ["1. Across: A healthy lunch"],
    ["2. Across: ____ a river"],
    ["3. Across: Out of town"],
    ["4. Across: Spanish party island"],
    ["5. Across: Actress _____ Cruthid"]
];
const hints_column = [
    ["6. Down: Thin stage fabric"],
    ["7. Down: Dutch caribbean get-away"],
    ["8. Down: Song text"],
    ["9. Down: Astound"],
    ["10. Down: Result of traffic"]
];

let currRowHint = hints_row[0]
let currColHint = hints_column[0]

const solution = [
    ["S", "A", "L", "A", "D"],
    ["C", "R", "Y", "M", "E"],
    ["R", "U", "R", "A", "L"],
    ["I", "B", "I", "Z", "A"],
    ["M", "A", "C", "E", "Y"]
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

                input.addEventListener("click", (event) => {
                    const row = Number(event.target.dataset.row);
                    const col = Number(event.target.dataset.col);

                    currRowHint = hints_row[row];
                    currColHint = hints_column[col];

                    updateHint();
                    updateHighlight(row, col);
});

                // Moves user to next square with input
                input.addEventListener("input", () => {
                    
                    if (input.value === " ") {
                            input.value = "";
                            return;
                    }

                    const inputs = document.querySelectorAll("input"); 
                    const index = Array.from(inputs).indexOf(input);
                    inputNum = index
                    if (index == 24) {
                        inputs[0].focus();
                        inputNum = 0;
                    } else if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                        inputNum = index
                    }
                    
                    row = Math.floor((inputNum+1)/5)
                    col = (inputNum+1)%5
                    currRowHint = hints_row[row]
                    currColHint = hints_column[col]
                    updateHint()
                    updateHighlight(row, col)
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
            if (user != ""){
            input.style.backgroundColor = "salmon";
            }
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
                    console.log(key)
                    let nextRow = row;
                    let nextCol = col;
                    if (key == "Backspace") {
                        event.preventDefault();
                        nextCol = col;
                        nextRow = row;
                        target = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
                        console.log("TARGETVALa: ", target.value)
                        if (target.value == "") {
                            nextCol -= 1
                            console.log(row, col)
                            if (nextCol == -1) {
                                nextCol = 4; 
                                nextRow -= 1;
                                if (row - 1 == -1) {
                                    nextCol = 4;
                                    nextRow = 4;
                                }
                               
                            }   
                            console.log("COL: ",nextCol)
                            console.log("ROW: ", nextRow)
                            
                            nextTarget = document.querySelector(`[data-row="${nextRow}"][data-col="${nextCol}"]`);
                            console.log("this: ",nextTarget.value)

                            nextTarget.focus();
                        } else {
                        console.log("TARGETVAL: ", target.value)
                        target.value = "";
                        }
                        console.log("Killed")

                    } else if (key == " ") {



                        event.preventDefault();
                        console.log(row, col)
                        rowToggle = !rowToggle
                     
                        console.log(hints_row)
                        updateHint();
                        updateHighlight(nextRow, nextCol)

                        
                        const inputs = document.querySelectorAll("input");
                        if (cheat) {
                        inputs.forEach(input => {
                            const row = input.dataset.row;
                            const col = input.dataset.col;
                        })}




                    } else {
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
                    if (key == "ArrowUp") {

                        nextRow -= 1
                        if (nextRow == -1) {
                            nextRow = 4; 
                        }   
                    }
                    if (key == "ArrowDown") {

                        nextRow += 1
                        if (nextRow == 5) {
                            nextRow = 0; 
                        }   
                    }
                    console.log(key)

                    currRowHint = hints_row[nextRow]
                    currColHint = hints_column[nextCol]
                    updateHighlight(nextRow, nextCol)
                    console.log("NEXTCOL ", nextRow, nextCol)
                    next = document.querySelector(`[data-row="${nextRow}"][data-col="${nextCol}"]`);
                    next.focus();
                    updateHint()

                }
                    
                    
                   
});

function updateHint() {
    if (rowToggle) {
        hint = currRowHint;
    } else {
        hint = currColHint;
    }
    console.log(hint)
    hintBox.innerText = hint

}

function updateHighlight(row, col) {
    for (let i = 0; i <= 4; i++) {
                            if (counta >= 1) {
                                const tile = document.querySelector(`[data-row="${prevrow}"][data-col="${i}"]`);
                                tile.style.backgroundColor = "white";
                                if (i == 4) {counta = 0;}
                            }
                            if  (countb >= 1) {
                                const tile = document.querySelector(`[data-row="${i}"][data-col="${prevcol}"]`);
                                tile.style.backgroundColor = "white";
                                if (i == 4) {countb = 0;}
                            }
                        }

                        for (let i = 0; i <= 4; i++) {
                            
                            if (rowToggle) {
                            const tile = document.querySelector(`[data-row="${row}"][data-col="${i}"]`);
                            tile.style.backgroundColor = "yellow";
                            counta++;
                            prevrow = row;
                            } else {
                            const tile = document.querySelector(`[data-row="${i}"][data-col="${col}"]`);
                            tile.style.backgroundColor = "yellow"; 
                            countb++;
                            prevcol = col;
                            }
                        }

}
