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
const activeItem = document.getElementById("heroCategoriesList").getElementsByClassName("active")[0];
// All products button
allHeroBtn.addEventListener("click", () => {
	addPagination();
	cardGenerator(document.getElementById("productsArea"), "shirts")

	productsTittle.innerHTML="<strong>Products</strong>"

	activeItem.classList.remove("active", "list-group-item-dark");
	allHeroBtn.classList.add("active", "list-group-item-dark");
});
// Shirts button
shirtsHeroBtn.addEventListener("click", () => {
	removePagination();
	cardGenerator(document.getElementById("productsArea"), "shirts")

	productsTittle.innerHTML="<strong>Shirts</strong>"

	activeItem.classList.remove("active", "list-group-item-dark");
	shirtsHeroBtn.classList.add("active", "list-group-item-dark");
});
// Pants button
pantsHeroBtn.addEventListener("click", () => {
	removePagination();
	cardGenerator(document.getElementById("productsArea"), "pants")

	productsTittle.innerHTML="<strong>Pants</strong>"

	activeItem.classList.remove("active", "list-group-item-dark");
	pantsHeroBtn.classList.add("active", "list-group-item-dark");
});
// Tecnology button
tecnologyHeroBtn.addEventListener("click", () => {
	removePagination();
	cardGenerator(document.getElementById("productsArea"), "technology")

	productsTittle.innerHTML="<strong>Tecnology</strong>"

	activeItem.classList.remove("active", "list-group-item-dark");
	tecnologyHeroBtn.classList.add("active", "list-group-item-dark");
});