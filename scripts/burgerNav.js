// selectors and variables
const burgerBtn = document.querySelector('.burger-btn')
const linksContainer = document.querySelector('.links')

// functions
function activateNav() {
	linksContainer.classList.toggle('activate')

	// checking if it's the home page
	if (document.title === 'Kakhorov Utkirbek') {
		document.querySelector('.intro-container').classList.toggle('burger-active')
	} else {
		document.querySelector('main').classList.toggle('burger-active')
	}
}

// event listeners
burgerBtn.addEventListener('click', activateNav)
