function createElement(type='div'){
    Element = document.createElement(type);
    return Element;
}

function rectangle(length,width,Bcolor){
    element=createElement();
    element.style.height=length;
    element.style.width=width;
    element.style.background=Bcolor;
    return element;
}

function trapezoid(height,width,left,right,Bcolor,direction='top'){
    element=createElement();
    if(direction=='top') element.style.borderTop= height+' solid '+Bcolor;
    else element.style.borderBottom= height+' solid '+Bcolor;
    element.style.height=0;
    element.style.width=width;
    element.style.borderLeft=left+' solid transparent';
    element.style.borderRight=right+' solid transparent';
    return element;
}

function ellipse(height,width,Bcolor){
    element=createElement();
    element.style.height=height;
    element.style.width=width;
    element.style.background=Bcolor;
    element.style.borderRadius='50%';
    return element;
}

function shape(top,topColor,bottom,bottomColor,left,leftColor,right,rightColor){
    element=createElement();
    element.style.height="0";
    element.style.width="0";
    if(left!=='0px') element.style.borderLeft=left+' solid '+leftColor;
    if(right!=='0px') element.style.borderRight=right+' solid '+rightColor;
    if(top!=='0px') element.style.borderTop=top+' solid '+topColor;
    if(bottom!=='0px') element.style.borderBottom=bottom+' solid '+bottomColor;
    return element;
}

function trick(height,width,Bcolor,top,topColor,bottom,bottomColor,left,leftColor,right,rightColor){
    element=createElement();
    element.style.height=height;
    element.style.width=width;
    element.style.background=Bcolor;
    if(left!=='0px') element.style.borderLeft=left+' solid '+leftColor;
    if(right!=='0px') element.style.borderRight=right+' solid '+rightColor;
    if(top!=='0px') element.style.borderTop=top+' solid '+topColor;
    if(bottom!=='0px') element.style.borderBottom=bottom+' solid '+bottomColor;
    return element;
}


//aling the items
function align(element,flexDirection='column'){
    element.style.display='flex';
    element.style.flexDirection=flexDirection;
    element.style.alignItems='center';
    return element;
}
function add(element,element2){
    element.append(element2);
    return element;
}


// making a combo
function hybrid(size,unit,Bcolor,shapes=[],demultiplyer){
    group=createElement();
    function val(k){
        length=(size*k)/demultiplyer;
        let str = length.toString() + unit;
        return str;
    }
    for(let i=0;i<shapes.length;i++){
        // rectangle
        if(shapes[i][0]==1) 
        group.append(rectangle(val(shapes[i][1]),val(shapes[i][2]),Bcolor));
    
        //trapezoid
        else if(shapes[i][0]==2)
            group.append(trapezoid(val(shapes[i][1]),val(shapes[i][2]),val(shapes[i][3]),val(shapes[i][4]),Bcolor,shapes[i][5]));
    
        // ellipse
        else if(shapes[i][0]==3) 
            group.append(ellipse(val(shapes[i][1]),val(shapes[i][2]),Bcolor));
        
        //shape
        else if(shapes[i][0]==4)
        group.append(shape(val(shapes[i][1]),shapes[i][2],val(shapes[i][3]),shapes[i][4],val(shapes[i][5]),shapes[i][6],val(shapes[i][7]),shapes[i][8]));

        //trick
        //trick
        else if(shapes[i][0]==5)
            group.append(
                    trick(val(shapes[i][1]),
                        val(shapes[i][2]),
                        shapes[i][3],
                        val(shapes[i][4]),
                        shapes[i][5],
                        val(shapes[i][6]),
                        shapes[i][7],
                        val(shapes[i][8]),
                        shapes[i][9],
                        val(shapes[i][10]),
                        shapes[i][11])
                    );
    }
    return group;
}

// making a combo
function hybrid2(size,unit,Bcolor,shapes=[],demultiplyer){
    let group=createElement();
    function val(k){
        length=(size*k)/demultiplyer;
        let str = length.toString() + unit;
        return str;
    }
    for(let i=0;i<shapes.length;i++){

        //defining the direction
        if(typeof(shapes[i])=='string') align(group,shapes[i]);

        //more shapes group in the group
        else if(Array.isArray(shapes[i][0])) group.append(hybrid2(size,unit,Bcolor,shapes[i],demultiplyer)); 

        // rectangle
        else if(shapes[i][0]==1) 
        group.append(rectangle(val(shapes[i][1]),val(shapes[i][2]),Bcolor));
    
        //trapezoid
        else if(shapes[i][0]==2)
            group.append(trapezoid(val(shapes[i][1]),val(shapes[i][2]),val(shapes[i][3]),val(shapes[i][4]),Bcolor,shapes[i][5]));

        // ellipse
        else if(shapes[i][0]==3) 
        group.append(ellipse(val(shapes[i][1]),val(shapes[i][2]),Bcolor));
    
        else if(shapes[i][0]==4)
        group.append(shape(val(shapes[i][1]),shapes[i][2],val(shapes[i][3]),shapes[i][4],val(shapes[i][5]),shapes[i][6],val(shapes[i][7]),shapes[i][8]));

        //trick
        else if(shapes[i][0]==5)
        group.append(
                trick(val(shapes[i][1]),
                    val(shapes[i][2]),
                    shapes[i][3],
                    val(shapes[i][4]),
                    shapes[i][5],
                    val(shapes[i][6]),
                    shapes[i][7],
                    val(shapes[i][8]),
                    shapes[i][9],
                    val(shapes[i][10]),
                    shapes[i][11])
                );
    }
    return group;
}


function king(size,unit,Bcolor){
    shapes=[
        [1,2,2],
        [1,2,7],
        [1,2,2],
        [2,3,14,2,2,'bottom'],
        [2,13,12,8,8,'top'],
        [1,3,25],
        [2,22,14,8,8,0],
        [1,4,38]
    ]
    return align(hybrid(size,unit,Bcolor,shapes,50));
}

function queen(size,unit,Bcolor){
    shapes=[
        [3,4,4],
        [2,3,1,2,2,0,'bottom'],
        [2,13,12,8,8,'top'],
        [1,3,25],
        [2,22,14,8,8,0],
        [1,4,38]
    ]
    return align(hybrid(size,unit,Bcolor,shapes,50));
}

function queen2(size,unit,Bcolor){
    shapes=[
        [
            [4,0,'transparent',6,Bcolor,0,'transparent',6,'transparent'],
            [4,0,'transparent',8,Bcolor,4,'transparent',4,'transparent'],
            [4,0,'transparent',6,Bcolor,6,'transparent',0,'transparent'],
            'row'
        ],
        // [2,3,1,2,2,0,'bottom'],
        [2,13,12,8,8,'top'],
        [1,3,25],
        [2,22,14,8,8,0],
        [1,4,38]
    ]
    function val(k){
        demultiplyer=50;
        length=(size*k)/demultiplyer;
        let str = length.toString() + unit;
        return str;
    }
    let queen = align(hybrid2(size,unit,Bcolor,shapes,50));
    let part = queen.querySelector('div');
    part.style.display='flex';
    part.style.alignItems = 'end';
    parts = queen.querySelector('div').querySelectorAll('div');
    // parts[0].style.transform='skew(10deg)';
    // parts[2].style.transform='skew(-10deg)';
    parts[1].style.marginLeft=val(4.2);
    parts[1].style.marginRight=val(4.2);
    return queen;
}

function rook(size,unit,Bcolor){
    shapes = [
        [[1,4,4],[1,4,8],[1,4,4],'row'],
        [1,5,30],
        [1,27,22],
        [1,5,30],
        'column'
    ]
    function val(k){
        demultiplyer=50;
        length=(size*k)/demultiplyer;
        let str = length.toString() + unit;
        return str;
    }
    let rook = hybrid2(size,unit,Bcolor,shapes,50);
    first = rook.querySelectorAll('div')[0].querySelectorAll('div')[1];
    first.style.marginLeft=val(7);
    first.style.marginRight=val(7);
    return rook;
}

function pawn(size,unit,Bcolor){
    shapes = [
        [3,18,18],
        [1,4,14],
        [2,4,15,2,2,'botttom'],
        [2,25,10,7,7,'bottom'],
        [1,5,30],
        'column'
    ];
    function val(k){
        demultiplyer=50;
        length=(size*k)/demultiplyer;
        let str = length.toString() + unit;
        return str;
    }
    let pawn=align(hybrid(size,unit,Bcolor,shapes,50));
    pawn.classList.add('pawn');
    pawn.style.position='relative';
    part = pawn.querySelectorAll('div')[1];
    part.style.position='absolute';
    part.style.top=val(14);
    return pawn;
}

function bishop(size,unit,Bcolor){
    shapes=[
        [3,20,13],
        [1,4,20],
        [2,25,11,9,9,'bottom'],
        [1,3,28],
        [1,5,35],
        'column'
    ];
    function val(k){
        demultiplyer=50;
        length=(size*k)/demultiplyer;
        let str = length.toString() + unit;
        return str;
    }
    let bishop=align(hybrid(size,unit,Bcolor,shapes,50));
    bishop.style.position='relative';
    part = bishop.querySelectorAll('div')[1];
    part.style.position='absolute';
    part.style.top=val(16);
    return bishop;;
}
function bishop2(size,unit,Bcolor){
    shapes=[
        [[3,20,13],[1,15,6]],
        [1,4,20],
        // [2,25,11,9,9,'bottom'],
        [[3,30,20],[1,18,11]],
        [1,3,28],
        [1,5,35],
        'column'
    ];
    function val(k){
        demultiplyer=50;
        length=(size*k)/demultiplyer;
        let str = length.toString() + unit;
        return str;
    }
    let bishop=align(hybrid2(size,unit,Bcolor,shapes,50));
    align(bishop.querySelectorAll('div')[4]);
    align(bishop.querySelectorAll('div')[0]);
    bishop.style.position='relative';
    let part = bishop.querySelectorAll('div')[4].querySelector('div');
    part.style.position='absolute';
    part.style.top=val(14);
    part = bishop.querySelectorAll('div')[0].querySelector('div');
    part.style.position='absolute';
    // part.style.top=val(0);
    return bishop;;
}

function bishop3(size,unit,Bcolor,contrastColor){
    shapes=[
        [4,14,contrastColor,0,'transparent',0,'transparent',4,'transparent'],
        [3,20,13],
        [1,4,20],
        [2,25,10,8,8,'bottom'],
        [1,3,27],
        [1,5,35],
        'column'
    ];
    function val(k){
        demultiplyer=45;
        length=(size*k)/demultiplyer;
        let str = length.toString() + unit;
        return str;
    }
    let bishop=align(hybrid(size,unit,Bcolor,shapes,50));
    bishop.style.position='relative';
    part = bishop.querySelectorAll('div')[2];
    part.style.position='absolute';
    part.style.top=val(16);
    part = bishop.querySelectorAll('div')[0];
    part.style.position='absolute';
    part.style.top=val(0);
    return bishop;;
}

function horse(size,unit,Bcolor,contrastColor){
    shapes=[
        // [4,8,Bcolor,8,Bcolor,13,Bcolor,13,Bcolor],
        // [4,16,Bcolor,16,Bcolor,8,Bcolor,8,Bcolor],
        // [4,8,contrastColor,0,'transparent',0,'transparent',4,'transparent'],
        // [1,10,20],
        // [1,10,1],
        [5,8,0,'transparent',2,'transparent',2,'transparent',20,Bcolor,0,'transparent'],
        [5,35,15,Bcolor,0,'transparent',0,'transparent',0,'transparent',0,'transparent'],
        // [1,10,1],
        [1,8,30],
        [5,2,2,contrastColor,0,'transparent',0,'transparent',0,'transparent',0,'transparent'],
        // [3,8,8],
        // [3,8,8],
        'column'
    ];
    function val(k){
        demultiplyer=50;
        length=(size*k)/demultiplyer;
        let str = length.toString() + unit;
        return str;
    }
    let horse=hybrid(size,unit,Bcolor,shapes,50);
    // horse.style.alignItems='start';
    horse.style.position='relative';

    parts = horse.querySelectorAll('div');
    // parts[0].style.transform='skew(-13deg) rotate(-13deg)';

    horse.style.height=val(50);
    horse.style.width=val(50);
    for(i=0;i<4;i++) parts[i].style.position='absolute';

    parts[0].style.top=val(7);
    parts[0].style.borderTopLeftRadius="30%";
    parts[0].style.borderBottomLeftRadius="30%";
    
    parts[1].style.top=val(5);
    parts[1].style.left=val(15);
    parts[1].style.borderTopRightRadius="30%";
    // parts[0].style.borderBottomLeftRadius="30%"
    
    parts[2].style.top=val(33);
    parts[2].style.left=val(5);
    parts[0].style.transform='rotate(-13deg)';
    parts[1].style.transform='rotate(10deg)';
    
    parts[3].style.top=val(10);
    parts[3].style.left=val(20);

    // parts[4].style.top=val(4);
    // parts[4].style.left=-val(4);

    // parts[2].style.top=val(40);
    // part = horse.querySelectorAll('div')[0];
    // part.style.position='absolute';
    // part.style.top=val(0);
    return horse;
}
// document.querySelector('.test').append(trapezoid('100px','50px','25px','25px','black',0));
// document.querySelector('.test').append(trapezoid('100px','50px','25px','25px','black',0));
// document.querySelector('.test').append(ellipse('100px','50px','black'));
// document.querySelector('.test').append(king(100,'px','black'));
// document.querySelector('.test').append(queen(100,'px','black'));
// document.querySelector('.test').append(queen2(100,'px','black'));
// document.querySelector('.test').append(rook(100,'px','black'));
// document.querySelector('.test').append(pawn(100,'px','black'));
// document.querySelector('.test').append(bishop(100,'px','black'));
// document.querySelector('.test').append(bishop2(100,'px','black'));
// document.querySelector('.test').append(bishop3(100,'px','blue','white'));
// document.querySelector('.test').append(bishop3(100,'px','black','white'));
// document.querySelector('.test').append(horse(100,'px','black','white'));







// utility function to shuffleArray
function shuffleArray(array){
    for(let i=array.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
}

function getCssVariable(variableName){
    let rootStyles=getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variableName);
}