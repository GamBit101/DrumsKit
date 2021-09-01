// window.addEventListener('keydown', function(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//     key.classList.add('playing')
//     audio.currentTime = 0
//     if(!audio) return;
//     audio.play()
//     this.setTimeout(function(){
//         key.classList.remove('playing')
//     },0.07*1000)
// })
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`.audio${e.keyCode}`)
    const key = document.querySelector(`.key${e.keyCode}`)
    key.classList.add('playing')
    audio.currentTime = 0
    if(!audio) return;
    audio.play()
    this.setTimeout(function(){
        key.classList.remove('playing')
    },0.07*1000)
})