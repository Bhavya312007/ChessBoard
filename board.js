let board = document.querySelector('.board');
let colors=[getCssVariable('--color1'),getCssVariable('--color2')];
let piecesColors=[getCssVariable('--piecesColor1'),getCssVariable('--piecesColor2')];
let contrastColor=getCssVariable('--contrastColor');
let size = getCssVariable('--size');
let unit = getCssVariable('--unit');

for(let i=0;i<8;i++){
    let row= createElement();
    for(let j=0;j<8;j++){
        let div = createElement();
        div.classList.add('block');
        row.append(div);
        if((i+j)%2==0) div.style.background=colors[0];
        else div.style.background=colors[1];
    }
    // row.style.display='flex';
    // row.style.flexDirection='row';
    // row.style.display='block';
    row.classList.add('row');
    board.append(row);
}

let positions = Array.from({length:64},(_,i)=>i);
console.log(positions);

shuffleArray(positions);
let randomPosition = positions.slice(0,32);
console.log(randomPosition);

let blocks = document.querySelectorAll('.block');



function setArrangements(){
    let arrangements = [
        [8,pawn,piecesColors[0]],
        [8,pawn,piecesColors[1]],
        [1,king,piecesColors[0]],
        [1,king,piecesColors[1]],
        [1,queen2,piecesColors[0]],
        [1,queen2,piecesColors[1]],
        [2,rook,piecesColors[0]],
        [2,rook,piecesColors[1]],
        [2,bishop3,piecesColors[0],contrastColor],
        [2,bishop3,piecesColors[1],contrastColor],
        [2,horse,piecesColors[0],contrastColor],
        [2,horse,piecesColors[1],contrastColor]
    ]
    
    let j=0;
    for(let i=0;i<arrangements.length;i++){
        if(arrangements[i].length==3)
            for(let k=0;k<arrangements[i][0];k++)
                blocks[positions[j++]].append(arrangements[i][1](size,unit,arrangements[i][2]))
        else
            for(let k=0;k<arrangements[i][0];k++) 
                blocks[positions[j++]].append(arrangements[i][1](size,unit,arrangements[i][2],arrangements[i][3]))
    
    }
}

setTimeout(setArrangements,200)