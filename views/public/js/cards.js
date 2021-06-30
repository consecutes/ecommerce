let badge, html, productName, addToCartButton, precioFinal, price, procentajeDescuento;

export const cardGenerator = (productsArea, productCategory) => {
	
	fetch("api/products")
		.then((res) => res.json())
		.then((res) => {
			html = "";

			res[`${productCategory}`].forEach((element) => {
				// New release or type badge
				if (element.newRelease) {
					badge = `
						<a href="#productsArea" class="mx-auto py-0 badge badge-info text-center">
							<p class="shadow-sm my-1 mx-1">New Release</p>
						</a>
					`;
				} else {
					badge = `
						<a href="#productsArea" class="mx-auto py-0 badge badge-dark text-center">
							<p class="shadow-sm my-1 mx-1">${element.type}</p>
						</a>
					`;
				}

				// Product name
				if (element.stock == 0) {
					productName = `
						<strong class="my-3 text-center">
							<a class="text-body text-muted text-decoration-none">${element.name}</a>
						</strong>	
					`;
				}else{
					productName = `
						<strong class="my-3 text-center">
							<a class="text-body text-info" href="#">${element.name}</a>
						</strong>
					`;
				}
				// Price
				precioFinal = (parseFloat(element.price) * parseFloat(element.discount)) / 100
				procentajeDescuento = "-"+ (100-element.discount) +"%"
				if(element.discount){
					price = `
						<p class="d-inline text-info mr-2">
							<i class="fas fa-dollar-sign dollarPrice"></i>
							<strong class="price">
								${precioFinal}
							</strong>
						</p>

						<p 
							class="d-inline text-muted noPrice"
							data-toggle="tooltip"
							title=${procentajeDescuento}
						>
							<s>
								<strong>
									<span>$</span>
									<span>${element.price}</span>
								</strong>
							</s>
						</p>
					`
				}else{
					price = `
						<p class="d-inline float-left mb-0">
							<i class="fas fa-dollar-sign dollarPrice"></i>
							<strong class="price">${element.price}</strong>
						</p>
					`
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
							class="btn rounded-circle btn-outline-info disabled nonStockButton"
							type="button"
							aria-label="addToCardButton"
							href="#productsArea"
						>

							<i class="fas fa-cart-plus"></i>

						</button>
					</span>`;
				} else {
					addToCartButton = `
					<a
						class="btn rounded-circle btn-info float-right"
						href="#productsArea"
					>
						<i class="fas fa-cart-plus"></i>
					</a>`;
				}

				html += `
\n 
<!-- COLUMN -->
<div class="col mb-5 mx-0">
	
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
				class="card-img-top px-3 pt-3"
				src="${element.image}" 
				alt="${element.name} photo"
				style="height:11em; width:12em;"
			>

			<!-- PRODUCT NAME-->

			${productName}

		</a>

		<!-- CARD FOOTER -->
		<div class="container card-footer px-4">

			<!-- DISCOUNT AND PRICE -->
			${price}
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
