const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailSignUpInput");
const passwordInput = document.getElementById("passwordSignUpInput");
const repeatPasswordInput = document.getElementById("repeatPasswordInput")
const signUpButton = document.getElementById("registrarseBoton");

signUpButton.setAttribute("disabled", "");

const validation = {
	firstName: false,
	lastName: false,
	email: false,
	password: false,
	passwordRepeat: false
}

// First and last name styles and validation
firstNameInput.addEventListener("input", () => {
	firstNameInput.classList.remove("is-valid")
	setTimeout(() => {
		firstNameInput.classList.add("is-valid");
		validation["firstName"] = true;
	}, 250);
});
lastNameInput.addEventListener("input", () => {
	lastNameInput.classList.remove("is-valid")
	setTimeout(() => {
		lastNameInput.classList.add("is-valid");
		validation["lastName"] = true;
	}, 250);
});

// Email validation
emailInput.addEventListener("input", () => {
	let correo = emailInput.value;
	setTimeout(() => {
		if(!correo.endsWith(".com")){
			emailInput.classList.add("is-invalid");
			validation["email"] = false;
		}else if(correo.indexOf("@") == -1){
			emailInput.classList.add("is-invalid");
			validation["email"] = false;
		}else{
			emailInput.classList.remove("is-invalid");
			emailInput.classList.add("is-valid");
			validation["email"] = true;
		};
	}, 250);
});

// Password verification
passwordInput.addEventListener("input", () => {
	if(passwordInput.value.length <= 4){
		setTimeout(() => {
			passwordInput.classList.remove("is-valid");
			passwordInput.classList.add("is-invalid");
		}, 250);
	}else{
		setTimeout(() => {
			passwordInput.classList.remove("is-invalid");
			passwordInput.classList.add("is-valid");
			validation["password"] = true;
		}, 250);
	};
});
repeatPasswordInput.addEventListener("input", () => {
	if(passwordInput.value != repeatPasswordInput.value){
		setTimeout(() => {
			repeatPasswordInput.classList.remove("is-valid");
			repeatPasswordInput.classList.add("is-invalid");
		}, 250);
	}else{
		setTimeout(() => {
			validation["passwordRepeat"] = true;
			repeatPasswordInput.classList.remove("is-invalid");
			repeatPasswordInput.classList.add("is-valid");
		}, 250);
	};
});

setInterval(() => {
	let v = Object.values(validation);
	let y = v.filter(value => value === false);
	if(y.indexOf(false) == -1){
		signUpButton.removeAttribute("disabled");
	}else{
		signUpButton.setAttribute("disabled", "");
	};
}, 500);