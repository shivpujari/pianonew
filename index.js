const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckBox = document.querySelector(".keys-checkbox input")

let audio = new Audio("a.wav");//by default sound is a
const playTune =(key)=>{
    audio.src = `${key}.wav`;// passing audio src based on key pressed
    audio.play();//playing audio
}

pianoKeys.forEach(key =>{
    // console.log(key.dataset.key);
    // console.log(key);
    key.addEventListener("click", ()=> playTune(key.dataset.key))
});
const handleVolume = (e)=>{
    audio.volume = e.target.value;
    }

const pressedKey = (e)=>{
    playTune(e.key)
    // console.log(e);
}

const showHide = (e)=>{
    pianoKeys.forEach(key=> key.classList.toggle("hide"))
}
document.addEventListener("keydown", pressedKey)
keysCheckBox.addEventListener("click", showHide)
volumeSlider.addEventListener("input", handleVolume)