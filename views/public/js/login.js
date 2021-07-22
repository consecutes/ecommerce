const signLink = document.getElementById("signLink");
const loginLink = document.getElementById("loginLink");

const square = document.getElementsByClassName('container');
const fadeOut = document.getElementsByClassName("fadeOut");

signLink.addEventListener("click", () => {
	square[0].classList.remove("fadeIn")
	square[0].classList.add("fadeOut");
	setTimeout(() => {
		square[0].classList.remove("fadeOut");
		square[0].classList.remove("d-block");
		square[0].classList.add("d-none");

		square[1].classList.remove("d-none");
		square[1].classList.add("d-block");

		square[1].classList.add("fadeIn");
	}, 1000);
});

loginLink.addEventListener("click", () => {
	square[1].classList.remove("fadeIn")
	square[1].classList.add("fadeOut")
	setTimeout(() => {
		square[1].classList.remove("fadeOut")
		square[1].classList.remove("d-block")
		square[1].classList.add("d-none")

		square[0].classList.add("d-block");
		square[0].classList.add("fadeIn");
	}, 1000);
});