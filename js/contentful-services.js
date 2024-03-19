// const contentful = require('contentful')

var client = contentful.createClient({
  space: '1ktjd8goaqzp',
  accessToken: '5pFTo6OedVnD8jk9CBTZLY5MSRJgWv_bWKk5UDUGzxY'
});


// RES ASSISTANCE (MAIN)

// Fetch products from Contentful
client.getEntries()
  .then((response) => {
    const products = response.items;
    //  dynamic model population
    products.forEach((product) => {
      const productId = product.fields.productIdtxtpd; 
      const productName = product.fields.namepd;
      const productDescription = product.fields.descriptionpd;
      const productPrice = product.fields.pricepd;
      const productImage = 'https:' + product.fields.imagepd.fields.file.url;
      // Markup append to the DOM
      const productElement = document.createElement('div');
      productElement.classList.add('products');
      productElement.setAttribute('id', productId);
      productElement.innerHTML = `
        <img class="product-image" src="${productImage}">
        <h4 class="product-name">${productName}</h4>
        <p class="product-description">${productDescription}</p>
        <p class="product-price">${productPrice}</p>
        <button class="add-to-cart">BUY</button>
      `;
      document.getElementById('shop').appendChild(productElement);
    });
  })
  .catch((error) => {
    console.log("Error fetching products: ", error);
  });

 