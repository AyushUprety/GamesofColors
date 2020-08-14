var R=0; 
var B=0;                             //initializing the variables.
var G=0;
function generaterandom()                // random color generator
{   
    for(let i=0;i<3;i++)                                // for running all logic this loop is used.
    {   var randomno=Math.floor(Math.random()*256);
        if(i==0){
            R=R+randomno;
            

        }
        else if(i==1)
        {
            G=G+randomno;
            
        }
        else{
            B=B+randomno;
            
        }
    }    
}

 // generating random rgb with the random R,G,B.
  //adding  RGB text on top of the page.
var randombox=Math.floor(Math.random()*6);  // random box generator 
var box=document.getElementById('box'+randombox); // adding box to random no.



function fixonecolor()
{
    var add=('rgb'+'('+R+','+G+','+B+')'); 
    box.style.backgroundColor=add;
    var colour=document.querySelector('#colour').innerHTML=add;
    return add;
}


function randomcolor(n)    // giving random colors to all the boxes.
{
    for(let i=0;i<n;i++)
    {
        var store=document.getElementById('box'+i);
        store.style.background='#'+Math.floor(Math.random()*16777215).toString(16);
    }
}

function rado(){                          //selecting and coloring all the boxes with same color if condition is true otherwise deleting it
var a=document.querySelector('#box0');
a.addEventListener('click',function()
{   
    if(this.id!=box.id){
        this.style.backgroundcolor='black';
    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=fixonecolor();
        }
        document.querySelector('#tryagain').innerHTML='Correct';   
    }
    
});
var b=document.querySelector('#box1');
b.addEventListener('click',function()
{
    if(this.id!=box.id){
        this.style.backgroundColor='black';    }
    else 
    {
        let get1=document.getElementsByClassName('square');  // note that classname returns array so indexing is must to get multiple values.
        for(var i = 0; i < get1.length; i++){                // for that used ge1.length
             
           get1[i].style.background=fixonecolor();
        }
        document.querySelector('#tryagain').innerHTML='Correct';      
    }
});

var c=document.querySelector('#box2');
c.addEventListener('click',function()
{
    if(this.id!=box.id){
        this.style.backgroundColor='black';    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=fixonecolor();

        } 
        document.querySelector('#tryagain').innerHTML='Correct';      
    }
});
var d=document.querySelector('#box3');
d.addEventListener('click',function()
{
    if(this.id!=box.id){
        this.style.backgroundColor='black';
    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=fixonecolor();

        }      
        document.querySelector('#tryagain').innerHTML='Correct';
}
});
var e=document.querySelector('#box4');
e.addEventListener('click',function()
{
    if(this.id!=box.id){
        this.style.backgroundColor='black';
        
    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=fixonecolor();

        }
        document.querySelector('#tryagain').innerHTML='Correct';      
    }
});
var f=document.querySelector('#box5');
f.addEventListener('click',function()
{
    if(this.id!=box.id){
        f.style.backgroundColor='black';
    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=fixonecolor();

        }
        document.querySelector('#tryagain').innerHTML='Correct';   
    }
}); }
document.querySelector('#Newcolors').addEventListener('click',Newcolors);
document.querySelector('#easy').addEventListener('click',Easy);
function Newcolors()
{   
    

    generaterandom();
    randomcolor(6);
    fixonecolor();
    rado();
}
var square=document.querySelectorAll('.square');
console.log(square);
function Easy()
{
   
        for(let i=0;i<6;i++)
        {
            square[i].style.backgroundColor='black';
        }
        randomcolor(3);
        fixonecolor();

            
           
}   

generaterandom();
randomcolor(6);              //All boxex ma random color generate gareko Out of them later one fixed box color is replaced by below function.
fixonecolor();               // fixing the color for the random box;
rado();                     //selecting and coloring all the boxes with same color if condition is true otherwise deleting it
