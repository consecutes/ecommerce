const signLink = document.getElementById("signLink");
const loginLink = document.getElementById("loginLink");

const square = document.getElementsByClassName("container");
const fadeOut = document.getElementsByClassName("fadeOut");

const emailInput = document.getElementById("emailLoginInput");
const loginButton = document.getElementById("iniciarSesionBoton");
const passwordInput = document.getElementById("passwordLoginInput");

loginButton.setAttribute("disabled", "");

const validation = {
	email: false,
	password: false,
};

signLink.addEventListener("click", () => {
	square[0].classList.remove("fadeIn");
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
	square[1].classList.remove("fadeIn");
	square[1].classList.add("fadeOut");
	setTimeout(() => {
		square[1].classList.remove("fadeOut");
		square[1].classList.remove("d-block");
		square[1].classList.add("d-none");

		square[0].classList.add("d-block");
		square[0].classList.add("fadeIn");
	}, 1000);
});

// Login Validation

// Email verification
emailInput.addEventListener("input", () => {
	let correo = emailInput.value;
	setTimeout(() => {
		if (!correo.endsWith(".com")) {
			emailInput.classList.add("is-invalid");
			validation["email"] = false;
		} else if (correo.indexOf("@") == -1) {
			emailInput.classList.add("is-invalid");
			validation["email"] = false;
		} else {
			emailInput.classList.remove("is-invalid");
			emailInput.classList.add("is-valid");
			validation["email"] = true;
		}
	}, 250);
});

// Password verification
passwordInput.addEventListener("input", () => {
	if (passwordInput.value.length <= 4) {
		setTimeout(() => {
			validation["password"] = false;
			passwordInput.classList.remove("is-valid");
			passwordInput.classList.add("is-invalid");
		}, 250);
	} else {
		setTimeout(() => {
			validation["password"] = true;
			passwordInput.classList.remove("is-invalid");
			passwordInput.classList.add("is-valid");
		}, 250);
	}
});

setInterval(() => {
	let v = Object.values(validation);
	let y = v.filter((value) => value === false);
	if (y.indexOf(false) == -1) {
		loginButton.removeAttribute("disabled");
	} else {
		loginButton.setAttribute("disabled", "");
	}
}, 500);
