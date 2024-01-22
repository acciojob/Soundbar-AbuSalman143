//your JS code here. If required.
function playSound(audioUrl){
    

    console.log(audioUrl);
     audio = new Audio(audioUrl);
     audio.play();
}

function stopSound() {
     
       audio.pause();
       audio.currentTime = 0;
     
   }