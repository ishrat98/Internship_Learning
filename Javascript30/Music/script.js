window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    //console.log(audio);
    if(!audio) return;
     audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');

    function removeTransition(e)    {
        console.log(e);
    }
    // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});