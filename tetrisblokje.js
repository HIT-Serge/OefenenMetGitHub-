"use strict";

const tetrisBlock1_1 =
    [
        ["X", "O", "O"],
        ["X", "X", "O"],
        ["O", "X", "O"]
    ];

const tetrisBlock1_2 =
    [
        ['O','O','O'],
        ['O','X','X'],
        ['X','X','O']
    ];

const tetrisBlock1_3 =
    [
        ["X", "O", "O"],
        ["X", "X", "O"],
        ["O", "X", "O"]
    ];

const tetrisBlock1_4 =
    [
        ['O','O','O'],
        ['O','X','X'],
        ['X','X','O']
    ];

const tetrisShape1 = 
    [
        tetrisBlock1_1,
        tetrisBlock1_2,
        tetrisBlock1_3,
        tetrisBlock1_4
    ];
    
const tetrisBlock2_1 =
    [
        ["X", "O", "O"],
        ["X", "O", "O"],
        ["X", "X", "O"]
    ];

const tetrisBlock2_2 =
    [
        ["X", "X", "X"],
        ["X", "O", "O"],
        ["O", "O", "O"]
    ];
    
const tetrisBlock2_3 =
    [
        ["O", "X", "X"],
        ["O", "O", "X"],
        ["O", "O", "X"]
    ];

const tetrisBlock2_4 =
    [
        ["O", "O", "O"],
        ["O", "O", "X"],
        ["X", "X", "X"]
    ];

const tetrisShape2 =
[
    tetrisBlock2_1,
    tetrisBlock2_2,
    tetrisBlock2_3
];

const tetrisBlock =
    [
        tetrisShape1,
        tetrisShape2
    ];


// window.addEventListener("load", () => readAllArrays(tetrisBlock));

window.addEventListener("keydown", showNextBlock);
let numberOfSpacebarPresses = 0;
let numberOfRightArrowPresses = 0;

function showNextBlock(event) //Laat het volgende blok zien wanneer op de spatiebalk gedrukt wordt.
{
    let pressedKey = event.key;
    
    
    
    if (pressedKey == " ") 
    { 
        numberOfSpacebarPresses++;   
        console.log(numberOfSpacebarPresses);
        
        // console.log(tetrisBlock.length);
        
        if (numberOfSpacebarPresses >= tetrisBlock.length)
        {
            console.log('test');
            numberOfSpacebarPresses = 0;
            
        }
        readArray(tetrisBlock);
        
    }
    else if (pressedKey == "ArrowRight")
    {
        numberOfRightArrowPresses++;
        // test 
        

        if (numberOfRightArrowPresses >= tetrisBlock[numberOfSpacebarPresses].length) 
        {
            numberOfRightArrowPresses = 0;
        }
        console.log("arrow "+numberOfRightArrowPresses);
        readArray(tetrisBlock);
    }
}

function readArray(tetrisArray) //Leest het block uit dat wordt meegegeven door showNextBlock, wat weer gebaseerd is op het aantal spaties.
{
    let verwijderVorigeTabel = document.getElementById("tableOne");

    if (verwijderVorigeTabel != null) //Verwijderen vorige tabel
    {
        verwijderVorigeTabel.remove();
    }

    let blockSection = document.getElementById("showBlocks");
    let addTable = document.createElement("table");
    blockSection.appendChild(addTable);

    //tetrisBlock[welk blok][welke shape][welke rij][welke kolom]
    let blockNumber = numberOfSpacebarPresses; //--> welk blok
    let shapeNumber = numberOfRightArrowPresses; //welke shape

            for (let rowBlock = 0; rowBlock < tetrisArray[blockNumber][shapeNumber].length; rowBlock++) //loopen door eerste blokhaken = rijen --> welke rij
            {
            let addRow = document.createElement("tr");
            addTable.appendChild(addRow);
            addTable.id = "tableOne";

                for (let columnBlock = 0; columnBlock < tetrisArray[blockNumber][shapeNumber][rowBlock].length; columnBlock++) //loopen door tweede blokhaken = kolommen --> welke kolom
                {     
                let addColumn = document.createElement("td");
                addRow.appendChild(addColumn);

                if (tetrisArray[blockNumber][shapeNumber][rowBlock][columnBlock] == "X")
                {
                    addColumn.textContent = "";
                    addColumn.className = "yellow";
                }
                else
                {
                    addColumn.textContent = "";
                    addColumn.className = "white";
                }
                }
            }
        
    
}

// function rotateBlock()
// {

// }

// function readAllArrays(allArrays)
// {
//     for (let array = 0; array < allArrays.length; array++) //Met elke spatie de volgende laten zien, weer op 0 zetten na de laatste?
//     {
//         readArray(allArrays[array]);
//     }
// }

// function readSecondArray(tetrisSecondArray)
// {
//     let blockSection = document.getElementById("showBlocks");
//     // let addTableTwo = document.createElement("table");
//     // blockSection.appendChild(addTableTwo);

//     for (let rowSecondBlock = 0; rowSecondBlock < tetrisSecondArray.length; rowSecondBlock++) //loopen door eerste blokhaken = rijen
//     {
//         for (let columnSecondBlock = 0; columnSecondBlock < tetrisSecondArray[rowSecondBlock].length; columnSecondBlock++) //loopen door tweede blokhaken = kolommen
//         {
//             let addNewDiv = document.createElement("div");
//             blockSection.appendChild(addNewDiv);
//             addNewDiv.id = `${rowSecondBlock}.${columnSecondBlock}`;
//             if (tetrisSecondArray[rowSecondBlock][columnSecondBlock] == "X") //Als X, dan rood
//             {
//                 addNewDiv.textContent = "";
//                 addNewDiv.className = "red";
//                 console.log(addNewDiv.className);
//             }
//             else //Als O, dan zwart
//             {
//                 addNewDiv.textContent = "";
//                 addNewDiv.className = "black";
//             }
//         }
//     let insertLineBreak = document.createElement("br");
//     blockSection.appendChild(insertLineBreak);
//     }
// }