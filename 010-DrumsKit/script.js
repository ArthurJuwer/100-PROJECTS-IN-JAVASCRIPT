const audioSticks = new Audio("/010-DrumsKit/songs/floor.mp3");
const audioHats = new Audio("/010-DrumsKit/songs/hats.mp3");
const audioSnare = new Audio("/010-DrumsKit/songs/snare.mp3");
const audioHiTom = new Audio("/010-DrumsKit/songs/hitom.mp3");
const audioFloor = new Audio("/010-DrumsKit/songs/floor.mp3");
const audioBass = new Audio("/010-DrumsKit/songs/bassdrum.mp3");


const btnSticks = document.querySelector("#sticks")
const btnHats = document.querySelector("#hihats")
const btnSnare = document.querySelector("#snare")
const btnHighTom = document.querySelector("#hitom")
const btnFloorTom = document.querySelector("#floortom")
const btnBassDrum = document.querySelector("#bassdrum")

btnSticks.addEventListener("click", ()=>{
    audioPlay(audioSticks)
})
btnHats.addEventListener("click", ()=>{
    audioPlay(audioHats)
})
btnSnare.addEventListener("click", ()=>{
    audioPlay(audioSnare)
})
btnBassDrum.addEventListener("click", ()=>{
    audioPlay(audioBass)
})

btnHighTom.addEventListener("click", ()=>{
    audioPlay(audioHiTom)
})
btnFloorTom.addEventListener("click", ()=>{
    audioPlay(audioFloor)
})
function audioPlay(audio){
    audio.play();
}