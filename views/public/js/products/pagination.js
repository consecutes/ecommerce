import {cardGenerator} from './cards.js';

// Page Index
let index = 1;
// Pages
const firstPagination = document.getElementById("firstPage");
const secondPagination = document.getElementById("secondPage");
const thirdPagination = document.getElementById("thirdPage");
const fourthPagination = document.getElementById("fourthPage");

// Previos and Next button
const nextPagination = document.getElementById("nextPage");
const previousPagination = document.getElementById("previousPage");

const previousLi = document.getElementById("previousLi");
const nextLi = document.getElementById("nextLi");

// Where the products are
const productsArea = document.getElementById("productsArea");

// Cards
let cards = productsArea.getElementsByClassName("col-12");

const removingMargin = (cards) => {
	let lastCardIndex = cards.length - 1;
	// Removing cards margin
	cards[lastCardIndex].classList.remove("mb-5");
	cards[lastCardIndex - 1].classList.remove("mb-5");
	cards[lastCardIndex - 2].classList.remove("mb-5");
	// Add a minor margin
	cards[lastCardIndex].classList.add("mb-4");
	cards[lastCardIndex - 1].classList.add("mb-4");
	cards[lastCardIndex - 2].classList.add("mb-4");
};

// Index verification
const indexVer = (index) => {

	if(index == 1){

		previousLi.classList.add("disabled");
		previousPagination.classList.remove("text-body");

		nextLi.classList.remove("disabled");
		nextPagination.classList.add("text-body");

	}else if(index == 3){

		nextLi.classList.add("disabled");
		nextPagination.classList.remove("text-body");

		previousLi.classList.remove("disabled");
		previousPagination.classList.add("text-body");

	}else{

		previousLi.classList.remove("disabled");
		previousPagination.classList.add("text-body");

		nextLi.classList.remove("disabled");
		nextPagination.classList.add("text-body");

	};

};

indexVer(index);

// First page
firstPagination.addEventListener("click", () => {
	
	index = 1;
	cardGenerator(productsArea, "shirts");
	indexVer(index);

});

// Second page
secondPagination.addEventListener("click", () => {
	
	index = 2;
	cardGenerator(productsArea, "pants");
	indexVer(index);

});

// Third page
thirdPagination.addEventListener("click", () => {
	
	index = 3;
	cardGenerator(productsArea, "technology");
	indexVer(index);

});

// Next pagination
nextPagination.addEventListener("click", () => {

	if(index == 1){

		cardGenerator(productsArea, "pants");
		index++;
		indexVer(index);

	}else if(index == 2){

		cardGenerator(productsArea, "technology");
		index++;
		indexVer(index);

	};

});

// Previous pagination
previousPagination.addEventListener("click", () => {

	if(index == 2){

		cardGenerator(productsArea, "shirts");
		index-=1;
		indexVer(index);

	}else if(index == 3){

		cardGenerator(productsArea, "pants");
		index-=1;
		indexVer(index);

	};

});

// Removing margin
removingMargin(cards);