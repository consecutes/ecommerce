import {cardGenerator} from './cards.js';
import {addPagination, removePagination} from './addRemovePagination.js';
// Buttons
const allHeroBtn = document.getElementById("allHeroBtn");
const shirtsHeroBtn = document.getElementById("shirtsHeroBtn");
const pantsHeroBtn = document.getElementById("pantsHeroBtn");
const tecnologyHeroBtn = document.getElementById("tecnologyHeroBtn");
const foodHeroBtn = document.getElementById("foodHeroBtn");

// All products button
allHeroBtn.addEventListener("click", () => {
	addPagination();
	cardGenerator(document.getElementById("productsArea"), "shirts")

	document.getElementById("productsTittle").innerHTML="<strong>Products</strong>"
});
// Shirts button
shirtsHeroBtn.addEventListener("click", () => {
	removePagination();
	cardGenerator(document.getElementById("productsArea"), "shirts")

	document.getElementById("productsTittle").innerHTML="<strong>Shirts</strong>"
});
// Pants button
pantsHeroBtn.addEventListener("click", () => {
	removePagination();
	cardGenerator(document.getElementById("productsArea"), "pants")

	document.getElementById("productsTittle").innerHTML="<strong>Pants</strong>"
});
// Tecnology button
tecnologyHeroBtn.addEventListener("click", () => {
	removePagination();
	cardGenerator(document.getElementById("productsArea"), "technology")

	document.getElementById("productsTittle").innerHTML="<strong>Tecnology</strong>"
});