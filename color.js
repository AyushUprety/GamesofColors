var R=0; var B=0;                             //initializing the variables.
var G=0;
function generaterandom()                // random color generator
{   
    for(let i=0;i<3;i++)
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

var add=('rgb'+'('+R+','+G+','+B+')');  // generating random rgb with the random R,G,B.
colour=document.querySelector('#colour').innerHTML=add;  //adding  RGB text on top of the page.
var randombox=Math.floor(Math.random()*6);  // random box generator 
var box=document.getElementById('box'+randombox); // adding box to random no.

function fixonecolor()
{
    document.getElementById('box'+randombox).style.backgroundColor=add;   // fixing the random box color to the color in our rgb heading.
}

function randomcolor()    // giving random colors to all the boxes.
{
    for(let i=0;i<6;i++)
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
        a.remove();
    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=add;

        }   
    }
    
});
var b=document.querySelector('#box1');
b.addEventListener('click',function()
{
    if(this.id!=box.id){
        b.remove();
        tryagain();
    }
    else 
    {
        let get1=document.getElementsByClassName('square');  // note that classname returns array so indexing is must to get multiple values.
        for(var i = 0; i < get1.length; i++){                // for that used ge1.length
             
           get1[i].style.background=add;

        }       }
});

var c=document.querySelector('#box2');
c.addEventListener('click',function()
{
    if(this.id!=box.id){
        c.remove();
        tryagain();
    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=add;

        }       }
});
var d=document.querySelector('#box3');
d.addEventListener('click',function()
{
    if(this.id!=box.id){
        d.remove();
        tryagain();
    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=add;

        }      }
});
var e=document.querySelector('#box4');
e.addEventListener('click',function()
{
    if(this.id!=box.id){
        e.remove();
        
    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=add;

        }      
    }
});
var f=document.querySelector('#box5');
f.addEventListener('click',function()
{
    if(this.id!=box.id){
        f.remove();
        tryagain();
    }
    else 
    {
        let get1=document.getElementsByClassName('square');
        for(var i = 0; i < get1.length; i++){
            
           get1[i].style.background=add;

        }   
    }
}); }

function tryagain()
{
  
}
generaterandom();
randomcolor();
fixonecolor();
rado();

