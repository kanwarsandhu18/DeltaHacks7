var colors = generateRandomColors(6); 
var squares = document.querySelectorAll(".square") ;
var picked = rand();

var display = document.querySelector(".colordisplay");
var message = document.querySelector(".message");
var h1 = document.querySelector("h1");
var newbuton = document.querySelector(".newcolor");
var easy = document.querySelectorAll("#mode")[0];
var hard = document.querySelectorAll("#mode")[1];
var attemptleft = document.querySelector(".attempts");

hardBool = true ;





for(var i = 0 ; i < colors.length ; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var colorid = this.style.backgroundColor;
        console.log(colorid,picked);
        if(colorid == picked){
             message.textContent = "Correct!";
             changeColor(colorid);
             h1.style.backgroundColor = colorid ;
             newbuton.textContent = "Play Again!!"
        }
        else {
            this.style.backgroundColor =  "#232323" ;
            message.textContent = "Incorrect guess!";
        }

    });
}

display.textContent = picked ; 

function changeColor(color){
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = color ;
    }
}

function rand(){
    var randColor= Math.floor(Math.random() * colors.length );
    return colors[randColor] ;
}

function generateRandomColors(x){
    var arr = [];
    for(var i =0 ; i < x ; i ++) {
        arr.push(rcolor());
    }


    return arr ;
}

function rcolor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")" ;
}

newbuton.addEventListener("click",function(){
    if (hardBool){
        colors = generateRandomColors(6);
    }
    else{
        colors = generateRandomColors(3);
    }
    
    picked = rand() ;
    display.textContent = picked ; 
    h1.style.background =  "steelblue" ;
    message.textContent = ""
    newbuton.textContent = "New Colors"

    for(var i = 0 ; i < colors.length ; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    

});

easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = generateRandomColors(3);
    picked = rand();
    display.textContent = picked ;
    h1.style.background =  "steelblue" ;
    message.textContent = ""
    newbuton.textContent = "New Colors"
    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none"; 
        }
    }
    hardBool = false ;
    

});

hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generateRandomColors(6);
    picked = rand();
    display.textContent = picked ;
    h1.style.background =  "steelblue" ;
    message.textContent = ""
    newbuton.textContent = "New Colors"
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }
    hardBool = true ;
});