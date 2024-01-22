//your JS code here. If required.
 function playSound(audiUrl){
	 stopSound(); // Stop any currently playing sound

      audio = new Audio(audioUrl);
      audio.play();
 }

function stopSound() {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }