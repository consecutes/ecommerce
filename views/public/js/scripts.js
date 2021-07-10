// Product loader
let productsAndPagination = document.getElementById("productsAndPagination");
let loader = document.getElementById("loader");

window.addEventListener("load", () => {
	productsAndPagination.classList.remove("d-none");
	loader.classList.add("d-none");
});