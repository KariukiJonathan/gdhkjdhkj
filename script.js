let container = document.getElementById("not-icon");

let mySound = new Audio("bellnoti.mp3");


container.addEventListener("click", () =>{
    mySound.play();
    setTimeout(()=> {
        mySound.pause();
    },10000);

   container.style.width = "250px";
   container.style.borderRadius = "25px";

    document.getElementById("notification-name").style.display = "block";

   setTimeout(() => {
    document.getElementById("message-branch").style.display = "block";
   },700);

});
  