function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // stop function not valid key
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip is not transition
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)