var btnSubmit=document.getElementById("btn");

btnSubmit.addEventListener("click",()=>{
    var name=document.getElementById("myText").value;
    document.getElementById("result").innerHTML=name;
    document.querySelector(".container").style.opacity="1"; 
    document.querySelector(".register").style.opacity="0";
});