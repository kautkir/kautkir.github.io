// selectors and variables
const body = document.querySelector('body');
const imgMainContainer = document.querySelector('.show-img-container');
const imgContainer = document.querySelector('.show-img-content');
const imgs = document.querySelectorAll('.gallery-page img');
const img = document.createElement('img');
const closeBtn = document.querySelector('.close-img');

// functions
const showImg = (e) => {
	// setting current img properties
	const currentImgSrc = e.target.src;
	const currentImgAlt = e.target.alt;

	// creating img and it's attributes	
	const attSrc = document.createAttribute('src');
	const attAlt = document.createAttribute('alt');

	// setting attribute values
	attSrc.value = currentImgSrc;
	attAlt.value = currentImgAlt;

	// appending the img to the container
	img.setAttributeNode(attSrc);
	img.setAttributeNode(attAlt);
	imgContainer.appendChild(img);
}

const closeImg = () => {
	imgContainer.removeChild(img);
}

const toggleClass = () => {
	body.classList.toggle('stop-scroll');
	imgMainContainer.classList.toggle('show-active');
	imgContainer.classList.toggle('show-active');
}

// event listeners
imgs.forEach(img => img.addEventListener('click', (e) =>{
	showImg(e);
	toggleClass();
}));

closeBtn.addEventListener('click', () =>{
	toggleClass();
	closeImg();
});