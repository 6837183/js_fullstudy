
// console.log(document.querySelector('.speed-bar'))
var bar=document.querySelector('.speed-bar')
var speed=document.querySelector('.speed')
var video=document.querySelector('.flex')
function handleMove(e){
    var y=e.pageY-this.offsetTop
    var percent=y/this.offsetHeight
    var min=0.4
    var max=4
    var height = Math.round(percent*100) + '%'
    var playbachRate=percent * ( max - min ) + min
    bar.style.height=height
    bar.textContent =playbachRate.toFixed(2) + 'x'
    video.playbackRate = playbachRate;


}


speed.addEventListener('mousemove',handleMove)