let a=document.querySelector(".sample")
console.log(a);
let submit=document.querySelector(".submit");
submit.style.color="red"; submit.style.height="40px";


function submitfun(){
    alert("you clicked the button")

}

submit.addEventListener('click',submitfun)

function back(){
    submit.style.backgroundColor="red";
    submit.style.color="yellow";
}
submit.addEventListener('mouseenter',back)
function back2(){
    submit.style.backgroundColor="white";
}
submit.addEventListener('mouseleave',back2)

let b=document.querySelector(".left")
let c=document.querySelector(".right")

function back(){
    b.style.backgroundColor="green";
}
function color1(){
    b.style.backgroundColor="red";
}

b.addEventListener('click',back)
b.addEventListener('mouseleave',color1)


function back2(){
    c.style.backgroundColor="red";
}
function color2(){
    c.style.backgroundColor="green";
}
c.addEventListener('click',color1)
c.addEventListener('mouseleave',back1)


