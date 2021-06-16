var button                   = document.createElement('button');
var buttonDisable            = document.createElement('button');
// Css button enable
button.style.marginTop       = "5px";
button.style.backgroundColor = "#4CAF50";
button.style.border          = "#4CAF50";
button.style.color           = "#fff";
button.style.padding         = "15px 32px";
button.style.textAlign       = "center";
button.style.display         = "inline-block";
button.style.fontSize        = "16px";
button.innerHTML             = 'Tăng Âm Lượng ( Vanh )';

buttonDisable.style.marginTop       = "5px";
buttonDisable.style.backgroundColor = "red";
buttonDisable.style.color           = "#fff";
buttonDisable.style.padding         = "15px 32px";
buttonDisable.style.textAlign       = "center";
buttonDisable.style.display         = "none";
buttonDisable.style.fontSize        = "16px";
buttonDisable.innerHTML             = 'Tắt chức năng';

document.getElementById("info").append(button)
document.getElementById("info").append(buttonDisable)

let videoElement = document.querySelector("video")
let audioCtx     = new AudioContext()
let source       = audioCtx.createMediaElementSource(videoElement)
let gainNode     = audioCtx.createGain()

button.addEventListener('click', function() {
	gainNode.gain.value = 3 // triple the volume
	source.connect(gainNode)
	gainNode.connect(audioCtx.destination)
	buttonDisable.style.display = "inline-block"
	button.style.display        = "none"
});

buttonDisable.addEventListener('click', function() {
	gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
	buttonDisable.style.display = "none"
	button.style.display        = "inline-block"
});
