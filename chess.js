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
