// selectors and variables
const playlistBtn = document.querySelector('.playlist-btn')
const playlistContainer = document.querySelector('.playlist-container')

// event listeners
playlistBtn.addEventListener('click', () => {
	playlistContainer.classList.toggle('playlist-active')
})
