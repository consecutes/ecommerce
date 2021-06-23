const paginationDiv = document.getElementById("pagination")
let html;
export const addPagination = () => {

	html = `
<div class="row">

	<div class="col-12">

		<nav class="mt-4">

			<ul class="pagination justify-content-center">

				<!-- PREVIOUS BUTTON-->
				<li class="page-item" id="previousLi">

					<a class="page-link text-body" id="previousPages" href="#productsArea">

						<span>
							<i class="fas fa-arrow-left"></i>
						</span>
						<span class="sr-only">Previous</span>
					</a>

				</li>

				<!-- PAGES -->

				<li class="page-item">
					<a class="page-link text-body" id="firstPage" href="#productsArea">
						<strong>1</strong>
					</a>	
				</li>

				<li class="page-item">
					<a class="page-link text-body" id="secondPage" href="#productsArea">
						<strong>2</strong>
					</a>	
				</li>

				<li class="page-item">
					<a class="page-link text-body" id="thirdPage" href="#productsArea">
						<strong>3</strong>
					</a>	
				</li>

				<!-- PAGES END -->

				<!-- PREVIOUS BUTTON-->
				<li class="page-item" id="nextLi">

					<a class="page-link text-body" id="nextPage" href="#productsArea">

						<span>
							<i class="fas fa-arrow-right"></i>
						</span>
						<span class="sr-only">Next</span>
					</a>

				</li>

			</ul>

		</nav>

	</div>

</div>
	`;

	paginationDiv.innerHTML=html;
};

export const removePagination = () => {
	paginationDiv.innerHTML="";
}