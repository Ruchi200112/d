var a=document.querySelector("h1")
a.addEventListener("mouseover",function(){
    a.textContent="Moye Moye";
    a.style.color="purple";
})

a.addEventListener("mouseout",function(){
    a.textContent="Moye Moye";
    a.style.color="black";
})

var b=document.querySelector("h2")
b.addEventListener("click",function(){
    b.textContent="Sabu bhala ta...??";
    b.style.color="red";
})

b.addEventListener("dblclick",function(){
    a.textContent="kan khabar";
    a.style.color="black";
})