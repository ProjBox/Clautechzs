// const contentful = require('contentful')

var client = contentful.createClient({
  space: '1ktjd8goaqzp',
  accessToken: '5pFTo6OedVnD8jk9CBTZLY5MSRJgWv_bWKk5UDUGzxY'
});


// RES ASSISTANCE (MAIN)

// Fetch products from Contentful
// client.getEntries()
//   .then((response) => {
//     const products = response.items;
//     //  dynamic model population
//     products.forEach((product) => {
//       const productId = product.sys.id; 
//       const productName = product.fields.name;
//       const productDescription = product.fields.description;
//       const productCatg = product.fields.productCategory;
//       const productPrice = product.fields.price;
//       const productImage = 'https:' + product.fields.image.fields.file.url;
//       // Markup append to the DOM
//       const productElement = document.createElement('div');
//       productElement.classList.add('products');
//       productElement.setAttribute('id', productId);
//       productElement.innerHTML = `
//         <img class="product-image" src="${productImage}">
//         <h4 class="product-name">${productName}</h4>
//         <p class="product-description">${productDescription}</p>
//         <p class="product-category">${productCatg}</p>
//         <p class="product-price">${productPrice}</p>
//         <button class="add-to-cart">BUY</button>
//       `;
//       document.getElementById('shop').appendChild(productElement);
//     });
//   })
//   .catch((error) => {
//     console.log("Error fetching products: ", error);
//   });

// Core**
client.getEntries()
  .then((response) => {
    const products = response.items;
    //  dynamic model population
    products.forEach((product) => {
      const productId = product.sys.productIdcore; 
      const productName = product.fields.namecore;
      const productDescription = product.fields.descriptioncore;
      const productCatg = product.fields.productCategorycore;
      const productPrice = product.fields.pricecore;
      const productImage = 'https:' + product.fields.imagecore.fields.file.url;
      // Markup append to the DOM
      const productElement = document.createElement('div');
      productElement.classList.add('products');
      productElement.setAttribute('id', productId);
      productElement.innerHTML = `
        <img class="product-image" src="${productImage}">
        <h4 class="product-name">${productName}</h4>
        <p class="product-description">${productDescription}</p>
        <p class="product-category">${productCatg}</p>
        <p class="product-price">${productPrice}</p>
        <button class="add-to-cart">BUY</button>
      `;
      document.getElementById('shop').appendChild(productElement);
    });
  })
  .catch((error) => {
    console.log("Error fetching products: ", error);
  });

  

// Core**
const entryIdToElementIdMap = {
    '7e3WdPW6D70r3kQmGFJ7xb': 'InfinixCharger',
    '1oQWcileLrxC6m10wgr8nX': 'OraimoCharger',
    'amnFTwQk5WfBZTpCGaoaN': 'sevenstarusbcord'
    // Add more mappings for other products as needed
};

// Function to fetch product data from Contentful
function fetchProductData(entryId) {
    const spaceId = '1ktjd8goaqzp';
    const accessToken = '5pFTo6OedVnD8jk9CBTZLY5MSRJgWv_bWKk5UDUGzxY';

    const client = contentful.createClient({
        space: spaceId,
        accessToken: accessToken
    });

    return client.getEntry(entryId)
        .then(entry => {
            return {
                name: entry.fields.name,
                description: entry.fields.description,
                productCategory: entry.fields.productCategory,
                price: entry.fields.price,
                imageUrl: 'https:' + entry.fields.image.fields.file.url // Assuming 'image' is a reference to an asset
            };
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
            return null;
        });
}

// Function to update product information on the webpage
function updateProductInformation(entryId) {
    const productElementId = entryIdToElementIdMap[entryId];
    const productElement = document.getElementById(productElementId);

    if (productElement) {
        fetchProductData(entryId).then(product => {
            
            if (product) {
                productElement.querySelector('.product-name').textContent = product.name || '';
                productElement.querySelector('.product-description').textContent = product.description || '';
                productElement.querySelector('.product-category').textContent = product.productCategory || '';
                productElement.querySelector('.product-price').textContent = product.price || '';
                
                const productImageElement = productElement.querySelector('.product-image');
                productImageElement.src = product.imageUrl;
                productImageElement.classList.remove('hidden');
            } else {
                console.error('Error: Product data not found for entry ID ' + entryId);
            }
        });
    } else {
        console.error('Error: Product element not found for entry ID ' + entryId);
    }
}

// Update individual product information based on Contentful entries
Object.keys(entryIdToElementIdMap).forEach(entryId => {
    updateProductInformation(entryId);
});
