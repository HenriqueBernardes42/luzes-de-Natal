const lights = document.getElementsByClassName("lights")
const input = document.getElementById("input")


function stop(){
    for(let i = 0; i < lights.length; i++){
        lights[i].style.animation = "none"
        lights[i].style.backgroundColor = "darkslategray"
    }  
}

function start(){
    for(let i = 0; i < lights.length; i++){
        lights[i].style.animation = ""
        lights[i].style.backgroundColor = lights[i].id
        lights[i].style.animationDuration = input.value + "s"
    }  
}

