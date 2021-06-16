chrome.extension.onMessage.addListener(request => {
	switch(request.type) {
		case 'get-link':
			getLink()
			break
	}
})

function getLink() {
	localStorage.a = "123"
}
