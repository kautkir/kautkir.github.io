// functions
function loadAppear() {
	let introText = document.querySelector('.intro-description')
	introText.classList.add('appear')
}

function scrollAppear() {
	let introText = document.querySelector('.academic-description')
	let introPosition = introText.getBoundingClientRect().top
	let screenPosition = window.innerHeight / 1.3

	if (introPosition < screenPosition) {
		introText.classList.add('appear')
	}
}

// event listeners
window.addEventListener('scroll', scrollAppear)

loadAppear()
