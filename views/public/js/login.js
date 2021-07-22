const signLink = document.getElementById("signLink");
const loginLink = document.getElementById("loginLink");

const square = document.getElementsByClassName('container');
const fadeOut = document.getElementsByClassName("fadeOut");

document.getElementById("iniciarSesionBoton").setAttribute("disabled", "");

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
document.getElementById("emailLoginInput").addEventListener("input", () => {
	let correo = document.getElementById("emailLoginInput").value;
	setTimeout(() => {
		if(!correo.endsWith(".com")){
			document.getElementById("iniciarSesionBoton").setAttribute("disabled", "");
			document.getElementById("emailLoginInput").classList.add("is-invalid");
		}else if(correo.indexOf("@") == -1){
			document.getElementById("iniciarSesionBoton").setAttribute("disabled", "");
			document.getElementById("emailLoginInput").classList.add("is-invalid");
		}else{
			document.getElementById("iniciarSesionBoton").removeAttribute("disabled");
			document.getElementById("emailLoginInput").classList.remove("is-invalid");
			document.getElementById("emailLoginInput").classList.add("is-valid");
		};
	}, 250);
});

// Password verification
document.getElementById("passwordLoginInput").addEventListener("input", () => {
	if(document.getElementById("passwordLoginInput").value.length <= 4){
		setTimeout(() => {
			document.getElementById("iniciarSesionBoton").setAttribute("disabled", "");
			document.getElementById("passwordLoginInput").classList.remove("is-valid");
			document.getElementById("passwordLoginInput").classList.add("is-invalid");
		}, 250);
	}else{
		setTimeout(() => {
			document.getElementById("iniciarSesionBoton").removeAttribute("disabled");
			document.getElementById("passwordLoginInput").classList.remove("is-invalid");
			document.getElementById("passwordLoginInput").classList.add("is-valid");
		}, 250);
	};
});