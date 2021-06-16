var button                   = document.createElement('button');
button.style.marginTop       = "5px";
button.style.backgroundColor = "#4CAF50";
button.style.border          = "#4CAF50";
button.style.color           = "#fff";
button.style.padding         = "15px 32px";
button.style.textAlign       = "center";
button.style.display         = "inline-block";
button.style.fontSize        = "16px";
button.innerHTML             = 'Tăng Âm Lượng ( Vanh )';
document.getElementById("info").append(button)

button.addEventListener('click', function() {
	var videoElement    = document.querySelector("video")
	var audioCtx        = new AudioContext()
	var source          = audioCtx.createMediaElementSource(videoElement)
	var gainNode        = audioCtx.createGain()
	gainNode.gain.value = 3 // double the volume
	source.connect(gainNode)
	gainNode.connect(audioCtx.destination)
});
