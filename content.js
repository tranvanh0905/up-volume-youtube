let button                   = document.createElement('button');
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

window.addEventListener('load', pageLoad);

function pageLoad() {
	//All your code here
	console.log('page is fully loaded');

}

document.getElementById("info").append(button)
button.addEventListener('click', function() {
	let videoElement    = document.querySelector("video")
	let audioCtx        = new AudioContext()
	let source          = audioCtx.createMediaElementSource(videoElement)
	let gainNode        = audioCtx.createGain()
	gainNode.gain.value = 3 // triple the volume
	source.connect(gainNode)
	gainNode.connect(audioCtx.destination)
});
