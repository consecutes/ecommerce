const paginationDiv = document.getElementById("pagination");

export const addPagination = () => {
	paginationDiv.classList.remove("d-none");
};

export const removePagination = () => {
	paginationDiv.classList.add("d-none");
};