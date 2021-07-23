import {cardGenerator} from './cards.js';
import {addPagination, removePagination} from './addRemovePagination.js';
// Buttons
const allHeroBtn = document.getElementById("allHeroBtn");
const shirtsHeroBtn = document.getElementById("shirtsHeroBtn");
const pantsHeroBtn = document.getElementById("pantsHeroBtn");
const tecnologyHeroBtn = document.getElementById("tecnologyHeroBtn");
const foodHeroBtn = document.getElementById("foodHeroBtn");
// Tittle
const productsTittle = document.getElementById("productsTittle");
// The item currently active (all products button by default)
let activeItem = document.getElementById("heroCategoriesList").getElementsByClassName("active")[0];
// All products button
allHeroBtn.addEventListener("click", () => {
	addPagination();
	document.getElementById("productsTittle").classList.add("d-block");
	document.getElementById("productsTittle").classList.remove("d-none");
	cardGenerator(document.getElementById("productsArea"), "shirts")

	productsTittle.innerHTML="<strong>Our products</strong>"

	activeItem = document.getElementById("heroCategoriesList").getElementsByClassName("active")[0];

	activeItem.classList.remove("active", "list-group-item-secondary");
	allHeroBtn.classList.add("active", "list-group-item-secondary");
});
// Shirts button
shirtsHeroBtn.addEventListener("click", () => {
	removePagination();
	document.getElementById("productsTittle").classList.add("d-block");
	document.getElementById("productsTittle").classList.remove("d-none");
	cardGenerator(document.getElementById("productsArea"), "shirts")

	productsTittle.innerHTML="<strong>Shirts</strong>"

	activeItem = document.getElementById("heroCategoriesList").getElementsByClassName("active")[0];

	activeItem.classList.remove("active", "list-group-item-secondary");
	shirtsHeroBtn.classList.add("active", "list-group-item-secondary");
});
// Pants button
pantsHeroBtn.addEventListener("click", () => {
	removePagination();
	document.getElementById("productsTittle").classList.add("d-block");
	document.getElementById("productsTittle").classList.remove("d-none");
	cardGenerator(document.getElementById("productsArea"), "pants")

	productsTittle.innerHTML="<strong>Pants</strong>"

	activeItem = document.getElementById("heroCategoriesList").getElementsByClassName("active")[0];

	activeItem.classList.remove("active", "list-group-item-secondary");
	pantsHeroBtn.classList.add("active", "list-group-item-secondary");
});
// Tecnology button
tecnologyHeroBtn.addEventListener("click", () => {
	removePagination();
	document.getElementById("productsTittle").classList.add("d-block");
	document.getElementById("productsTittle").classList.remove("d-none");
	cardGenerator(document.getElementById("productsArea"), "technology")

	productsTittle.innerHTML="<strong>Tecnology</strong>"

	activeItem = document.getElementById("heroCategoriesList").getElementsByClassName("active")[0];
	
	activeItem.classList.remove("active", "list-group-item-secondary");
	tecnologyHeroBtn.classList.add("active", "list-group-item-secondary");
});