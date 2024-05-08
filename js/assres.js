
// TRYING TO MODIFY ADDTOCART TO FIX DYNAMIC MODEL CONTENTS
// Updated addToCart function
function addToCart(event) {
    const clickedButton = event.target;
    
    // Check if the clicked element is the "BUY" button
    if (!clickedButton.classList.contains('add-to-cart')) return;

    const product = clickedButton.closest('.products');
    if (!product) return; // If the product element is not found, exit

    const productId = product.id;

    // Check if the product is already in the cart
    if (added.includes(productId)) {
        // Handle duplicate product
        // Increment quantity or any other action you want to perform

        duplicateId = '#' + event.target.parentElement.id;
        const quantityInput = cartTableBody.querySelector(duplicateId).querySelector('.quantity-value');
        quantityInput.value++;

        // Update details after increasing quantity
        updateQuantity(quantityInput);
        updateSubtotal();
        updateTotal();
        populateProductDetailsInput();

        return;
    }

    // Capture product details
    const productName = product.querySelector('.product-name').textContent;
    const productImageSrc = product.querySelector('.product-image').src;
    const productPrice = parseFloat(product.querySelector('.product-price').getAttribute('value'));
    
    let productUpdatedPrice = productPrice;

    // Add product to the cart
    cart.items.push({
        'product': productId,
        'productName': productName,
        'productPrice': productPrice,
        // Add any additional product details here
        'productUpdatedPrice': productUpdatedPrice,
    });

    // Update UI or perform any other action as needed
    // For example, update the cart display, total price, etc.

    // Add a new row for image in image table
    let imageTableRow = document.createElement('tr');
    document.getElementById('cart-table-img-body').appendChild(imageTableRow);

    let imageCell = imageTableRow.insertCell(0);
    let productImage = document.createElement('img');
    productImage.src = productImageSrc;
    productImage.classList.add('thumbnail');
    imageCell.appendChild(productImage);

    // Add a new row for each product in main table
    let productRow = document.createElement('tr');
    productRow.setAttribute('id', productId);
    cartTableBody.appendChild(productRow);

    let nameCell = productRow.insertCell(0);
    nameCell.innerHTML = productName;

    let quantityCell = productRow.insertCell(1);
    quantityCell.innerHTML = cartProductQuantity;
    quantityCell.setAttribute('id', 'quantity');

    let priceCell = productRow.insertCell(2);
    priceCell.innerHTML = productPrice;
    priceCell.setAttribute('id', 'product-price');
    priceCell.setAttribute('class', 'cart-product-price');

    let updatedPriceCell = productRow.insertCell(3);
    updatedPriceCell.innerHTML = productPrice;
    updatedPriceCell.setAttribute('id', 'updated-product-price');
    updatedPriceCell.setAttribute('class', 'cart-updated-product-price');

    let updateBtnCell = productRow.insertCell(4);
    updateBtnCell.innerHTML = "<button type='button' id='update' onclick='updateTotal()'><i class='fa fa-refresh' aria-hidden='true'></i></button>";

    let removeBtnCell = productRow.insertCell(5);
    removeBtnCell.innerHTML = productRemove;

    updateSubtotal();
    updateTotal();
    updateButtonVisibility();
    populateProductDetailsInput();

    $('.slider').toggleClass('close');
    
    // Ensure the cart-table-img-body, subtotal and total are set to display
    document.getElementById('cart-table-img-body').style.display = 'table-row-group';
    document.getElementById('subtotal').style.display = 'block'; 
    document.getElementById('total').style.display = 'block'; 

    // Ensure the added product is marked to prevent duplicates
    added.unshift(productId);
}



// SOLUTION TO ADD TO CART FOR DYNAMIC CONTENT MODEL
// Descr: OLD EVENT LISTENER CHANGED
// document.querySelectorAll('.add-to-cart').forEach(button => {
        //     button.addEventListener('click', addToCart);
        // });

        // Event listener to handle click events on the parent element
            document.addEventListener('click', function(event) {
                // Check if the clicked element is the buy button
                if (event.target && event.target.classList.contains('add-to-cart')) {
                    // Call addToCart function passing the event
                    addToCart(event);
                }
            });



// RES ASSISTANCE (MAIN)
// ##SINLE ENTRY RQUEST##
// Initialize Contentful client
const client = contentful.createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN'
});

// Function to fetch and update a single entry
function fetchAndUpdateEntry(entryId) {
  // Fetch entry from Contentful
  client.getEntry(entryId)
    .then((entry) => {
      // Extract data from the entry
      const productName = entry.fields.name;
      const productDescription = entry.fields.description;
      const productPrice = entry.fields.price;
      const productImage = entry.fields.image.fields.file.url;
      // Update HTML elements with new data
      const productElement = document.getElementById(entryId); // Assuming entryId is the same as the HTML element ID
      productElement.querySelector('.product-image').src = productImage;
      productElement.querySelector('.product-name').textContent = productName;
      productElement.querySelector('.product-description').textContent = productDescription;
      productElement.querySelector('.product-price').textContent = productPrice;
    })
    .catch((error) => {
      console.log("Error fetching entry: ", error);
    });
}

// Call the function with the entry ID you want to update
fetchAndUpdateEntry('YOUR_ENTRY_ID');




// RES ASSISTANCE (MAIN)
// MULTIPLY ENTRIES REQUEST
// Fetch products from Contentful
client.getEntries()
  .then((response) => {
    const products = response.items;
    // Loop through products and dynamically populate HTML
    products.forEach((product) => {
      const productId = product.sys.id; // Unique entry ID from Contentful
      const productName = product.fields.name;
      const productDescription = product.fields.description;
      const productPrice = product.fields.price;
      const productImage = 'https:' + product.fields.image.fields.file.url;
      // Create HTML elements and append to the DOM
      const productElement = document.createElement('div');
      productElement.classList.add('products');
      productElement.setAttribute('id', productId); // Set unique ID for each product
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




// ASSISTANCE II RES
// MULTIPLE ENTRIES REQUEST
Function to generate markup for a single product item with a unique id
function createProductItem(product) {
  // Generate a unique id for the product based on the Contentful entry id
  var productId = 'product' + product.sys.id;

  var productItem = `
    <div class="products" id="${productId}">
        <img class="product-image" src="${'https:' + product.fields.image.fields.file.url}" alt="Clautechs Product">
        <h4 class="product-name">${product.fields.name}</h4>
        <p class="product-description">${product.fields.description}</p>
        <p class="product-price" value="">${product.fields.price}</p>
        <button class="add-to-cart">BUY</button>
    </div>
  `;
  return productItem;

   document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });

}


Fetch content from Contentful
client.getEntries()
  .then(function(entries) {
    entries.items.forEach(function(entry) {
      var productItemMarkup = createProductItem(entry);
      // Append the new product item to the "Shop" container
      var shopContainer = document.getElementById('shop');
      shopContainer.insertAdjacentHTML('beforeend', productItemMarkup);
    });
  })
  .catch(function(error) {
    console.error("Error fetching entries:", error);
  });



// ASSISTANCE II RES
// SINGLE ENTRY REQUEST (**worked no image**)
// Mapping of Contentful entry IDs to HTML element IDs
// Mapping of Contentful entry IDs to HTML element IDs
const entryIdToElementIdMap = {
    '3NaUigqC1R1MM3tl7F3mD0': 'InfinixCharger',
    '47IJE9DehCjnqi5ekCXeYW': 'OraimoCharger'
    // Add more mappings for other products as needed
};

// Function to fetch data from Contentful based on entry ID
function fetchProductData(entryId) {
    const spaceId = '1ktjd8goaqzp';
    const accessToken = '5pFTo6OedVnD8jk9CBTZLY5MSRJgWv_bWKk5UDUGzxY';
    
    return fetch(`https://cdn.contentful.com/spaces/${spaceId}/entries/${entryId}?access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => data.fields)
        .catch(error => console.error('Error fetching data from Contentful:', error));
}

// Function to update product information based on fetched data
function updateProductInformation(entryId) {
    fetchProductData(entryId).then(product => {
        const productElementId = entryIdToElementIdMap[entryId];
        const productElement = document.getElementById(productElementId);

        if (productElement) {
            productElement.querySelector('.product-name').textContent = product.name;
            productElement.querySelector('.product-description').textContent = product.description;
            productElement.querySelector('.product-category').textContent = product.productCategory;
            productElement.querySelector('.product-price').textContent = product.price;
            productElement.querySelector('.product-image').src = 'https:' + product.productImage.fields.file.url;
        } else {
            console.error('Error: Product element not found for entry ID ' + entryId);
        }
    });
}

// Update individual product information based on Contentful entries
updateProductInformation('3NaUigqC1R1MM3tl7F3mD0');
updateProductInformation('47IJE9DehCjnqi5ekCXeYW');
// Add similar calls for other products using their respective Contentful entry IDs


// RES MAIN
// single entry request
// Mapping of Contentful entry IDs to HTML element IDs
const entryIdToElementIdMap = {
    '3NaUigqC1R1MM3tl7F3mD0': 'InfinixCharger',
    '47IJE9DehCjnqi5ekCXeYW': 'OraimoCharger'
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



// FILTER AND CLOSE TOGGLE/DELAY
// <script type="text/javascript">
  

  // Function to filter products by category
  function filterProducts(category) {
      // Get all product elements
      var products = document.querySelectorAll('.products');
      
      // Loop through each product element
      products.forEach(function(product) {
          // Get the category of the current product
          var productCategory = product.querySelector('.product-category').textContent.toLowerCase();
          
          // Check if the product category matches the selected category
          if (productCategory.includes(category)) {
              // If it matches, display the product
              product.style.display = 'block';
          } else {
              // If it doesn't match, hide the product
              product.style.display = 'none';
          }
      });
  }

  // Function to handle click on "Accessories" button
  document.getElementById('accessories-btn').onclick = function() {
      filterProducts('accessories');
  };

  // Function to handle click on "Store" button
  document.getElementById('store-btn').onclick = function() {
      filterProducts('others');
  };
// </script>

// CLOSE NAV BAR VERS_1
// <script>
  // JavaScript code to close navbar menu on mobile when "Accessories" or "Store" link is clicked
  document.addEventListener('DOMContentLoaded', function () {
      var accessoriesBtn = document.getElementById('accessories-btn');
      var storeBtn = document.getElementById('store-btn');
      
      accessoriesBtn.addEventListener('click', function() {
          closeNavbarMenu();
      });
      
      storeBtn.addEventListener('click', function() {
          closeNavbarMenu();
      });
      
      function closeNavbarMenu() {
          var navbarToggle = document.querySelector('.navbar-toggle');
          if (navbarToggle.classList.contains('collapsed')) {
              return; // Navbar menu is already closed
          }
          var navbarCollapse = document.getElementById('myNavbar');
          navbarToggle.click(); // Simulate click to close navbar menu
      }
  });
// </script>

// CLOSE NAV BAR VERS_2 WITH TIMER
// <script>
document.addEventListener('DOMContentLoaded', function () {
    var accessoriesBtn = document.getElementById('accessories-btn');
    var storeBtn = document.getElementById('store-btn');
    
    accessoriesBtn.addEventListener('click', function() {
        closeNavbarMenuWithDelay();
    });
    
    storeBtn.addEventListener('click', function() {
        closeNavbarMenuWithDelay();
    });
    
    function closeNavbarMenuWithDelay() {
        setTimeout(function() {
            closeNavbarMenu();
        }, 3000); // Delay for 3 seconds (3000 milliseconds)
    }
    
    function closeNavbarMenu() {
        var navbarToggle = document.querySelector('.navbar-toggle');
        if (navbarToggle.classList.contains('collapsed')) {
            return; // Navbar menu is already closed
        }
        var navbarCollapse = document.getElementById('myNavbar');
        navbarToggle.click(); // Simulate click to close navbar menu
    }
});
// </script>


// RES MAIN
// BANK AND PAYMENT

// Get all radio buttons with the class 'bank-radio'
const bankRadios = document.querySelectorAll(".bank-radio");

bankRadios.forEach(function(radio) {
    radio.addEventListener("change", function() {
        // Hide all bank details initially
        const allBankDetails = document.querySelectorAll(".bank-details");
        const timerElements = document.querySelectorAll(".tmr");
        const noteElements = document.querySelectorAll(".note-msg");
        
        allBankDetails.forEach(function(bankDetail) {
            bankDetail.style.display = "none";
        });
        
        timerElements.forEach(function(timerElement) {
            timerElement.style.display = "none";
        });

        noteElements.forEach(function(noteElement) {
            noteElement.style.display = "none";
        });

        // Show the bank details
        const value = radio.value;
        const bankDetailToShow = document.querySelector(".bank-details." + value);
        
        if (bankDetailToShow) {
            bankDetailToShow.style.display = "block";
        }

        // Show the corresponding timer element
        const timerElementToShow = document.querySelector(".tmr." + value);
        
        if (timerElementToShow) {
            timerElementToShow.style.display = "block";
        }

        // Show the corresponding note message element
        const noteElementToShow = document.querySelector(".note-msg." + value);
        
        if (noteElementToShow) {
            noteElementToShow.style.display = "block";
        }

        // Start the timer
        startTimer();
    });
});





// Get all radio buttons with the class 'bank-radio'
const bankRadios = document.querySelectorAll(".bank-radio");

// Hide elements with classes 'tmr' and 'note-msg' initially
const timerElements = document.querySelectorAll(".tmr");
const noteElements = document.querySelectorAll(".note-msg");

timerElements.forEach(function(timerElement) {
    timerElement.style.display = "none";
});

noteElements.forEach(function(noteElement) {
    noteElement.style.display = "none";
});

bankRadios.forEach(function(radio) {
    radio.addEventListener("change", function() {
        // Hide all bank details initially
        const allBankDetails = document.querySelectorAll(".bank-details");
        
        allBankDetails.forEach(function(bankDetail) {
            bankDetail.style.display = "none";
        });

        // Show the bank details
        const value = radio.value;
        const bankDetailToShow = document.querySelector(".bank-details." + value);
        
        if (bankDetailToShow) {
            bankDetailToShow.style.display = "block";
            
            // Show the corresponding timer element
            const timerElementToShow = document.querySelector(".tmr");
            
            if (timerElementToShow) {
                timerElementToShow.style.display = "block";
            }

            // Show the corresponding note message element
            const noteElementToShow = document.querySelector(".note-msg");
            
            if (noteElementToShow) {
                noteElementToShow.style.display = "block";
            }
        }

        // Start the timer
        startTimer();
    });
});



// CART COUNT
// Add this function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.items.length; // Assuming 'cart' is your cart object
    }
}

// Call updateCartCount function after adding an item to the cart
function addToCart(event) {
    // Your existing addToCart function code...

    // Add the following line at the end of the function to update the cart count
    updateCartCount();
}

// Call updateCartCount function after removing an item from the cart
function removeFromCart(event) {
    // Your existing removeFromCart function code...

    // Add the following line at the end of the function to update the cart count
    updateCartCount();
}

// Call updateCartCount function initially to set the cart count
updateCartCount();


// function to update the cart count and visibility
function updateCartCount() {
    const cartCount = document.getElementById('addNo');
    const cartText = document.getElementById('cart-text');

    if (cartCount) {
        cartCount.textContent = cart.items.length; // Assuming 'cart' is your cart object
    }

    if (cart.items.length > 0) {
        // Show the "Cart" text and count
        cartText.style.display = 'inline'; 
        cartCount.style.display = 'inline'; 
    } else {
        // Hide the "Cart" text and count
        cartText.style.display = 'none'; 
        cartCount.style.display = 'none'; 
    }
}


// #addNo {
//     padding: 2px 4px;
//     border-radius: 5px;
//     font-weight: 600;
//     /* Apply the color only when there is content */
// }

// #addNo:not(:empty) {
//     color: #ffffff;
//     /* Add any additional styles specific to the count element when it's not empty */
// }
