const zoe = document.querySelector("#zoe-animation");

zoe.addEventListener('mousedown', function(){
    zoe.style.transition = "3s ease";
    zoe.style.boxShadow = "0px 0px 300px 200px rgba(246,71,255,1)";
})

zoe.addEventListener('mouseup', function(){
    zoe.style.boxShadow = "none";
})