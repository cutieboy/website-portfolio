//GRAB MENU BUTTON ELEMENTS
let buttonLeft = document.getElementById('btn-line-left');
let buttonRight = document.getElementById('btn-line-right');
let buttonRemove = document.getElementById('btn-line-remove');
let navLabel = document.getElementById('nav-check-label');
let navCheck = document.getElementById('nav-check');
let slideIndex = 1;
showSlides(slideIndex);


//FUNCTION TO ROTATE LINES 45DEG AND BACK
function rotateLines() {
	if(navCheck.checked === true) {
		buttonLeft.style.transform = "rotate(45deg)";
		buttonRemove.style.transform = "rotate(-45deg)";
		buttonRight.style.border = "0";
		buttonRemove.style.marginLeft = "37%";
		buttonLeft.style.marginLeft = "37%";
		buttonRemove.style.marginTop = "60%";
		buttonLeft.style.marginTop = "35%";
	} else if(navCheck.checked === false) {
		buttonRemove.style.marginTop = "45%";
		buttonRemove.style.marginLeft = "30%";
		buttonLeft.style.marginTop = "20%";
		buttonLeft.style.marginLeft = "30%";
		buttonLeft.style.transform = "rotate(0)";
		buttonRemove.style.transform = "rotate(0)";
		buttonRight.style.borderTop = "2px solid white";
	}
}

function plusSlides(slideNumber) {
	showSlides(slideIndex += slideNumber);
}

function showSlides(slideNumber) {
	let i;
	let slides = document.getElementsByClassName("slide");

	if(slideNumber > slides.length) slideIndex = 1;
	if(slideNumber < 1) slideIndex = slides.length;
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}
