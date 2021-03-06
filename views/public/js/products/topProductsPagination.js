import { topCardsGenerator } from "./topProductsGenerator.js";
// Page Index
let index = 1;
// Pages
const firstPagination = document.getElementById("1");
const secondPagination = document.getElementById("2");
const thirdPagination = document.getElementById("3");
const fourthPagination = document.getElementById("4");

// Previos and Next button
const nextPagination = document.getElementById("nextPage");
const previousPagination = document.getElementById("previousPage");

const previousLi = document.getElementById("previousLi");
const nextLi = document.getElementById("nextLi");

// Where the products are
const productsArea = document.getElementById("productsArea");

// Cards
let cards = productsArea.getElementsByClassName("col-lg-4");

const removingMargin = (cards) => {
	let lastCardIndex = cards.length - 1;
	// Removing cards margin
	cards[lastCardIndex].classList.remove("mb-4");
	cards[lastCardIndex - 1].classList.remove("mb-4");
	cards[lastCardIndex - 2].classList.remove("mb-4");
	// Add a minor margin
	cards[lastCardIndex].classList.add("mb-3");
	cards[lastCardIndex - 1].classList.add("mb-3");
	cards[lastCardIndex - 2].classList.add("mb-3");
};

// Index verification
const indexVer = (index) => {
	if (index == 1) {
		previousLi.classList.add("disabled");
		previousPagination.classList.remove("text-body");

		nextLi.classList.remove("disabled");
		nextPagination.classList.add("text-body");
	} else if (index == 3) {
		nextLi.classList.add("disabled");
		nextPagination.classList.remove("text-body");

		previousLi.classList.remove("disabled");
		previousPagination.classList.add("text-body");
	} else {
		previousLi.classList.remove("disabled");
		previousPagination.classList.add("text-body");

		nextLi.classList.remove("disabled");
		nextPagination.classList.add("text-body");
	}
};

indexVer(index);

// First page
firstPagination.addEventListener("click", () => {
	index = 1;
	topCardsGenerator(productsArea, "shirts", true);
	indexVer(index);
});

// Second page
secondPagination.addEventListener("click", () => {
	index = 2;
	topCardsGenerator(productsArea, "pants", true);
	indexVer(index);
});

// Third page
thirdPagination.addEventListener("click", () => {
	index = 3;
	topCardsGenerator(productsArea, "technology", true);
	indexVer(index);
});

// Next pagination
nextPagination.addEventListener("click", () => {
	if (index == 1) {
		topCardsGenerator(productsArea, "pants", true);
		index++;
		indexVer(index);
	} else if (index == 2) {
		topCardsGenerator(productsArea, "technology", true);
		index++;
		indexVer(index);
	}
});

// Previous pagination
previousPagination.addEventListener("click", () => {
	if (index == 2) {
		topCardsGenerator(productsArea, "shirts", true);
		index -= 1;
		indexVer(index);
	} else if (index == 3) {
		topCardsGenerator(productsArea, "pants", true);
		index -= 1;
		indexVer(index);
	}
});

// Removing margin
removingMargin(cards);
