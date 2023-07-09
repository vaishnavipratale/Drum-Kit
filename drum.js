var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handalclick);
function handalclick(){
   var buttoninnerhtml= this.innerHTML
   makesound(buttoninnerhtml)
   buttonanimation(buttoninnerhtml)
}
}

////keypresss
document.addEventListener("keypress",function(event){
    makesound(event.key)
    buttonanimation(event.key)

    //console.log(event.key)
})

function makesound(key){
    switch(key){
        case "w": 
        var tom1=new Audio("drumsound/tom-1.mp3")
        tom1.play()
        break
        case "a": 
        var tom1=new Audio("drumsound/tom-2.mp3")
        tom1.play()
        break
        case "s": 
        var tom2=new Audio("drumsound/tom-3.mp3")
        tom2.play()
        break
        case "d": 
        var tom3=new Audio("drumsound/tom-4.mp3")
        tom3.play()
        break
        case "j": 
        var tom4=new Audio("drumsound/crash.mp3")
        tom4.play()
        break
        case "k": 
        var tom5=new Audio("drumsound/kick-bass.mp3")
        tom5.play()
        break
        case "l": 
        var tom6=new Audio("drumsound/snare.mp3")
        tom6.play()
        break
        default:console.log(buttoninnerhtml)
        }}


        function buttonanimation(curentkey){
           var activebutton=document.querySelector("."+curentkey)
           activebutton.classList.add("pressed")

           setTimeout(function(){
            activebutton.classList.remove("pressed")

           },100)
        }
