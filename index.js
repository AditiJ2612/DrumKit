var i;
for(i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",click);
    function click(){
      var buttonInnerHTML= this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
      }
    }
    
    document.addEventListener("keypress",function(event){
      makeSound(event.key)
      buttonAnimation(event.key);
    });

function makeSound(key){
  switch (key) {
    case "w":
      var audio1=new Audio('audios/1.mpeg');
      audio1.play();
    break;
    case "a":
        var audio2=new Audio('audios/3.mpeg');
        audio2.play();
    break;
        case "s":
        var audio3=new Audio('audios/2.mpeg');
        audio3.play();
    break;
     case "d":
        var audio4=new Audio('audios/4.mpeg');
        audio4.play();
    break; 
    case "j":
      var audio5=new Audio('audios/5.mpeg');
      audio5.play();
    break; 
    case "k":
      var audio6=new Audio('audios/6.mpeg');
      audio6.play();
    break;
    case "l":
      var audio7=new Audio('audios/7.mpeg');
      audio7.play();
    break;
    default:
      console.log(buttonInnerHTML);
}
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
}