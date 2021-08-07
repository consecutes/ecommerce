// Buttons
const allHeroBtn = document.getElementById("allHeroBtn");
const shirtsHeroBtn = document.getElementById("shirtsHeroBtn");
const pantsHeroBtn = document.getElementById("pantsHeroBtn");
const tecnologyHeroBtn = document.getElementById("tecnologyHeroBtn");
// Tittle
const productsTittle = document.getElementById("productsTittle");
// Products Area
const productsArea = document.getElementById("productsArea");
// The item currently active (all products button by default)
let activeItem = document
	.getElementById("heroCategoriesList")
	.getElementsByClassName("active")[0];
// All products button
allHeroBtn.addEventListener("click", () => {
	activeItem = document
		.getElementById("heroCategoriesList")
		.getElementsByClassName("active")[0];
	activeItem.classList.remove("active", "list-group-item-dark");
	allHeroBtn.classList.add("active", "list-group-item-dark");

	productsTittle.innerHTML = "<strong>Top products</strong>";
});
// Shirts button
shirtsHeroBtn.addEventListener("click", () => {
	activeItem = document
		.getElementById("heroCategoriesList")
		.getElementsByClassName("active")[0];
	activeItem.classList.remove("active", "list-group-item-dark");
	shirtsHeroBtn.classList.add("active", "list-group-item-dark");

	productsTittle.innerHTML = "<strong>Shirts</strong>";
});
// Pants button
pantsHeroBtn.addEventListener("click", () => {
	activeItem = document
		.getElementById("heroCategoriesList")
		.getElementsByClassName("active")[0];
	activeItem.classList.remove("active", "list-group-item-dark");
	pantsHeroBtn.classList.add("active", "list-group-item-dark");

	productsTittle.innerHTML = "<strong>Pants</strong>";
});
// Tecnology button
tecnologyHeroBtn.addEventListener("click", () => {
	activeItem = document
		.getElementById("heroCategoriesList")
		.getElementsByClassName("active")[0];
	activeItem.classList.remove("active", "list-group-item-dark");
	tecnologyHeroBtn.classList.add("active", "list-group-item-dark");

	productsTittle.innerHTML = "<strong>Tecnology</strong>";
});
