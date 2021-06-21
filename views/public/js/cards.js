let badge, html, discountBadge, addToCartButton;

export const cardGenerator = (productsArea, productCategory) => {
	
	fetch("api/products")
		.then((res) => res.json())
		.then((res) => {
			html = "";

			res[`${productCategory}`].forEach((element) => {
				// New release or type badge
				if (element.newRelease) {
					badge = `<p class="badge badge-success mx-auto shadow-sm">New Release</p>`;
				} else {
					badge = `<p class="badge badge-dark mx-auto shadow-sm">${element.type}</p>`;
				}

				// Discount badge
				if (element.discount != "-0%") {
					discountBadge = `<span class="badge badge-pill badge-danger align-bottom mt-2 ml-1">${element.discount}</span>`;
				} else {
					discountBadge = ``;
				}

				// Add to cart button
				if (element.stock == 0) {
					addToCartButton = `
					<span
						tabindex="0"
						data-toggle="tooltip"
						title="Actualmente no contamos con este producto"
						class="d-inline-block float-right"
					>

						<button
							style="pointer-events:none;"
							class="btn btn-outline-dark disabled"
							type="button"
						>

							<i class="fas fa-cart-plus"></i>

						</button>
					</span>`;
				} else {
					addToCartButton = `<a class="btn btn-outline-dark float-right">
						<i class="fas fa-cart-plus"></i>
					</a>`;
				}

				html += `
\n 
<!-- COLUMN -->
<div class="col mb-4 mx-0">
	
	<!-- CARD CLASS -->
	<div class="card pt-2 shadow-sm border-0 rounded-lg" style="width:18em">

		<!-- BADGE -->
		<div 
			class="card-header text-center mt-2 mb-0 py-0 border-0"
			style="background-color:white;"
		>
			${badge}
		</div>

		
		<a class="text-center" href="#">

			<!-- PRODUCT PICTURE -->
			<img
				class="card-img-top px-3 pt-2"
				src="${element.image}" 
				alt="${element.name} photo"
				style="height:11em; width:12em;"
			>

			<!-- PRODUCT NAME-->

			<strong class="my-3 text-center">
				<a class="text-body" href="#">
					${element.name}
				</a>
			</strong>

		</a>

		<!-- CARD FOOTER -->
		<div class="container card-footer pb-0">

			<!-- DISCOUNT AND PRICE -->
			<p class="d-inline float-left">
				<i class="fas fa-dollar-sign" style="font-size:120%;"></i>
				<strong style="font-size:135%;">${element.price}</strong>
			</p>
			${discountBadge}
			${addToCartButton}
		</div>

	</div>

</div>
\n
`;
			});

			productsArea.innerHTML = html;
		});
}
