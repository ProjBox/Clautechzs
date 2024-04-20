// FLOATING FILTERS
// default implementation
// <script type="text/javascript">
    // Function to toggle action container
    function actionToggle() {
        const action = document.querySelector('.action');
        action.classList.toggle('active');
    }

    // Filter products by category
    function filterProducts(category) {
        var products = document.querySelectorAll('.products');
        
        products.forEach(function(product) {
            var productCategory = product.querySelector('.product-category').textContent.toLowerCase();
            
            if (productCategory.includes(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Handle click on "Accessories" button
    document.getElementById('accessoriesFf-btn').onclick = function() {
        filterProducts('accessories');
        toggleCheckIcon('accessories-check-icon');
        actionToggle(); // Toggle action container immediately
    };

    // Handle click on "Others" button
    document.getElementById('storeFf-btn').onclick = function() {
        filterProducts('others');
        toggleCheckIcon('store-check-icon');
        actionToggle(); // Toggle action container immediately
    };

    // Function to toggle check icon visibility
    function toggleCheckIcon(checkIconId) {
        var checkIcons = document.querySelectorAll('.checkFf-icon');
        checkIcons.forEach(function(icon) {
            icon.classList.remove('visible');
        });
        var checkIcon = document.getElementById(checkIconId);
        checkIcon.classList.add('visible');
    }

// </script>



// default implementation

// <script type="text/javascript">
    // Function to toggle action container
    function actionToggle() {
        const action = document.querySelector('.action');
        action.classList.toggle('active');
    }

    // Filter products by category
    function filterProducts(category) {
        var products = document.querySelectorAll('.products');
        
        products.forEach(function(product) {
            var productCategory = product.querySelector('.product-category').textContent.toLowerCase();
            
            if (productCategory.includes(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Handle click on "Accessories" button
    document.getElementById('accessoriesFf-btn').onclick = function() {
        filterProducts('accessories');
        toggleCheckIcon('accessories-check-icon');
        actionToggle(); // Toggle action container immediately
    };

    // Handle click on "Others" button
    document.getElementById('storeFf-btn').onclick = function() {
        filterProducts('others');
        toggleCheckIcon('store-check-icon');
        actionToggle(); // Toggle action container immediately
    };

    // Function to toggle check icon visibility
    function toggleCheckIcon(checkIconId) {
        var checkIcons = document.querySelectorAll('.checkFf-icon');
        checkIcons.forEach(function(icon) {
            icon.classList.remove('visible');
        });
        var checkIcon = document.getElementById(checkIconId);
        checkIcon.classList.add('visible');
    }

// </script>







// // product
// background-color: rgb(245 245 245 / var(--tw-bg-opacity));
// backgroung: rgb(245 245 245);

// // body
// background-color: rgb(248 248 248);




// RECAPTCHER SETTINGS..

// Function to handle reCAPTCHA validation
function handleRecaptchaValidation() {
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse === '') {
        // If reCAPTCHA response is empty, display an error message
        document.getElementById('error-captcha').innerText = 'Please complete the reCAPTCHA.';
        return false;
    } else {
        // If reCAPTCHA response is present, clear any previous error messages
        document.getElementById('error-captcha').innerText = '';
        return true;
    }
}

// Event listener for the "Next" button
document.getElementById('next').addEventListener('click', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Perform reCAPTCHA validation
    const isRecaptchaValid = handleRecaptchaValidation();

    if (isRecaptchaValid) {
        // Proceed with the next step logic
        // Check phone and email validity before proceeding
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        // Validate email and phone
        const isPhoneValid = validatePhone(phoneInput.value);
        const isEmailValid = validateEmail(emailInput.value);
        const invalidMsg = document.getElementById('invalidMsg');

        if (!validatePhone(phoneInput.value) && !validateEmail(emailInput.value)) {
            // Display error message if phone or email is invalid
            emailInput.classList.add('invalid-input');
            invalidMsg.style.display = 'block';
            currentStep = 2;
            updateStep();
        } else {
            // Proceed to the next step if phone and email are valid
            invalidMsg.style.display = 'none';
            emailInput.classList.remove('invalid-input');
            currentStep = 3;
            updateStep();
            populateSecondForm();
            updateSubtotal();
            updateTotal();
            populateProductDetailsInput();
        }
    }
});

// Event listener for the "Notify" button
document.getElementById('notifyButton').addEventListener('click', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Perform reCAPTCHA validation
    const isRecaptchaValid = handleRecaptchaValidation();

    if (isRecaptchaValid) {
        // Proceed with form submission if reCAPTCHA is valid
        const selectedBank = document.querySelector('.bank-radio:checked');
        const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');

        const initPayMsg = document.getElementById('initPayMsg');
        let initPayChar = document.getElementById('payment-options');

        if (!selectedBank && !selectedPaymentMethod) {
            // Display error message if bank or payment method is not selected
            initPayMsg.style.display = 'block';
            initPayMsg.style.opacity = 1;
            initPayChar.style.background = '#d66e0057';
            initPayChar.style.opacity = 0.4;
        } else {
            // Proceed to the final step if bank or payment method is selected
            currentStep = 4;
            updateStep();
        }
    }
});


if (userConfirmed) {

        // If the user confirms, submit the form
        document.getElementById('cartForm').submit();
        currentStep = 4; // Moves to the next step to display order details
        updateStep();
        break; // Exit the loop if the user confirms
    } else {
        // break the loop or continue prompting
    }


    // NEW SETTINGS RECAPTCHER

    // Event listener for the "Next" button
document.getElementById('next').addEventListener('click', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Proceed with the next step logic
    // Check phone and email validity before proceeding
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    // Validate email and phone
    const isPhoneValid = validatePhone(phoneInput.value);
    const isEmailValid = validateEmail(emailInput.value);
    const invalidMsg = document.getElementById('invalidMsg');

    if (!validatePhone(phoneInput.value) && !validateEmail(emailInput.value)) {
        // Display error message if phone or email is invalid
        emailInput.classList.add('invalid-input');
        invalidMsg.style.display = 'block';
        currentStep = 2;
        updateStep();
    } else {
        // Proceed to the next step if phone and email are valid
        invalidMsg.style.display = 'none';
        emailInput.classList.remove('invalid-input');
        currentStep = 3;
        updateStep();
        populateSecondForm();
        updateSubtotal();
        updateTotal();
        populateProductDetailsInput();
        
        // Perform reCAPTCHA validation
        const isRecaptchaValid = handleRecaptchaValidation();

        // If reCAPTCHA is not valid, do not proceed
        if (!isRecaptchaValid) {
            return;
        }
    }
});



// Event listener for the "Notify" button
document.getElementById('notifyButton').addEventListener('click', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Proceed with form submission if reCAPTCHA is valid
    const selectedBank = document.querySelector('.bank-radio:checked');
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');

    const initPayMsg = document.getElementById('initPayMsg');
    let initPayChar = document.getElementById('payment-options');

    if (!selectedBank && !selectedPaymentMethod) {
        // Display error message if bank or payment method is not selected
        initPayMsg.style.display = 'block';
        initPayMsg.style.opacity = 1;
        initPayChar.style.background = '#d66e0057';
        initPayChar.style.opacity = 0.4;
    } else {
        // Perform reCAPTCHA validation
        const isRecaptchaValid = handleRecaptchaValidation();

        // If reCAPTCHA is valid, submit the form
        if (isRecaptchaValid) {
            document.getElementById('cartForm').submit();
        }
    }
});





// validat recapture on step 2, but has alart bypass issue.. still okay sha
  // Event listener for the "Next" button
document.getElementById('next').addEventListener('click', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Proceed with the next step logic
    // Check phone and email validity before proceeding
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    // Validate email
    const isEmailValid = validateEmail(emailInput.value);
    const invalidMsg = document.getElementById('invalidMsg');

    if (!isEmailValid) {
        // Display error message if email is invalid
        emailInput.classList.add('invalid-input');
        invalidMsg.textContent = 'Invalid email';
        invalidMsg.style.display = 'block';
        currentStep = 2;
        updateStep();
    } else {
        // Proceed to the next step if email is valid
        invalidMsg.style.display = 'none';
        emailInput.classList.remove('invalid-input');

        // Perform reCAPTCHA validation
        const isRecaptchaValid = handleRecaptchaValidation();

        // If reCAPTCHA is not valid, display appropriate error message and return
        if (!isRecaptchaValid) {
            alert('Please complete the reCAPTCHA.');
            return;
        }

        // Proceed to the next step if both email and reCAPTCHA are valid
        currentStep = 3;
        updateStep();
        populateSecondForm();
        updateSubtotal();
        updateTotal();
        populateProductDetailsInput();
    }
});



function payWithPaystack(formData) {
    // Verify reCAPTCHA completion
    const isRecaptchaValid = handleRecaptchaValidation();

    // Proceed only if reCAPTCHA is valid
    if (isRecaptchaValid) {
        let handler = PaystackPop.setup({
            key: 'pk_test_bad57d50b13cdfa9057402b543afa2892866350e', // PK
            email: formData.email,
            amount: formData.amount * 100,
            currency: 'NGN', // Naira
            ref: formData.orderNumberRef,
            channel: 'card',
            onClose: function () {
                alert('Click Okay to Cancel.');
            },
            callback: function (response) {
                let message = 'Payment Successful! Order No: ' + response.reference;
                while (true) {
                    let userConfirmed = confirm(message + '\n\n Click Okay to proceed ');

                    if (userConfirmed) {
                        // If the user confirms, submit the form
                        document.getElementById('cartForm').submit();
                        currentStep = 4; // Moves to the next step to display order details
                        updateStep();
                        break; // Exit the loop if the user confirms
                    } else {
                        // Continue prompting until the user confirms
                    }
                }
            }
        });

        handler.openIframe();
    } else {
        // Display error message or take appropriate action if reCAPTCHA validation fails
        // For example, show an error message to the user
        alert('Please complete the reCAPTCHA.');
    }
}

// Event listener to Paystack button
const paystackButton = document.getElementById('paystackButton'); // Paystack button
paystackButton.addEventListener("click", function (e) {
    e.preventDefault();
    payWithPaystack(formData); // Call payWithPaystack function to initiate payment
}, false);


// Target Reload..

// Function to save current step to sessionStorage
function saveCurrentStep(step) {
    sessionStorage.setItem('currentStep', step);
}

// Function to retrieve current step from sessionStorage
function getCurrentStep() {
    return sessionStorage.getItem('currentStep');
}

// Function to save cart items to sessionStorage
function saveCartItems(cartItems) {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to retrieve cart items from sessionStorage
function getCartItems() {
    const cartItems = sessionStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
}

// Update the current step and cart items whenever they change
function updateStepAndCart(step, cartItems) {
    saveCurrentStep(step);
    saveCartItems(cartItems);
}

// Function to initialize form and cart with saved data
function initializeFormAndCart() {
    const currentStep = getCurrentStep();
    // Show the form section corresponding to the current step
    // Update the cart with the retrieved cart items
}

// Add event listeners to form elements to update step and cart
// Handle form submission to prevent default behavior and submit data via AJAX

// Call initializeFormAndCart() when the page loads
initializeFormAndCart();




// =============
// Function to save current step to sessionStorage
// Function to save current step to sessionStorage
function saveCurrentStep(step) {
    sessionStorage.setItem('currentStep', step);
}

// Function to retrieve current step from sessionStorage
function getCurrentStep() {
    return sessionStorage.getItem('currentStep');
}

// Function to save cart items to sessionStorage
function saveCartItems(cartItems) {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to retrieve cart items from sessionStorage
function getCartItems() {
    const cartItems = sessionStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
}

// Sample usage
const currentStep = 2;
saveCurrentStep(currentStep);
console.log('Current step:', getCurrentStep());

const sampleCartItems = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 }
];
saveCartItems(sampleCartItems);
console.log('Cart items:', getCartItems());




// =============
document.addEventListener("DOMContentLoaded", function() {
    /*__==Global Variables==__*/
    // Existing global variables...

    /*__==Session Storage Functions==__*/
    // Function to save current step to sessionStorage
    function saveCurrentStep(step) {
        sessionStorage.setItem('currentStep', step);
    }

    // Function to retrieve current step from sessionStorage
    function getCurrentStep() {
        return sessionStorage.getItem('currentStep');
    }

    // Function to save cart items to sessionStorage
    function saveCartItems(cartItems) {
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // Function to retrieve cart items from sessionStorage
    function getCartItems() {
        const cartItems = sessionStorage.getItem('cartItems');
        return cartItems ? JSON.parse(cartItems) : [];
    }

    /*__==Event Listeners==__*/
    // Event listeners for adding to cart, removing from cart, etc.
    // Ensure that whenever cart items are modified, you call saveCartItems() to update session storage.

    /*__==Other Functions==__*/
    // Existing functions like addToCart, removeFromCart, updateSubtotal, updateTotal, etc.

    // Retrieve current step and cart items on page load
    const currentStep = getCurrentStep();
    const cartItems = getCartItems();

    // Optionally, update UI based on retrieved data
    // For example:
    // if (currentStep) {
    //     // Update UI based on the current step
    // }
    // if (cartItems.length > 0) {
    //     // Update cart UI based on retrieved cart items
    // }
});




/*__==Global Variables==__*/
// Existing global variables...

/*__==Session Storage Functions==__*/
// Function to save current step to sessionStorage
function saveCurrentStep(step) {
    sessionStorage.setItem('currentStep', step);
}

// Function to retrieve current step from sessionStorage
function getCurrentStep() {
    return sessionStorage.getItem('currentStep');
}

// Function to save cart items to sessionStorage
function saveCartItems(cartItems) {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to retrieve cart items from sessionStorage
function getCartItems() {
    const cartItems = sessionStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
}

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve current step and cart items on page load
    const currentStep = getCurrentStep();
    const cartItems = getCartItems();
    
    // Now you can use the retrieved current step and cart items here
    // For example:
    console.log('Current step:', currentStep);
    console.log('Cart items:', cartItems);
    
    // Any further functionality that depends on currentStep or cartItems
    // should be placed inside this event listener
});


/* Place this code at the top level of your script */
// Define the current step variable
let currentStep = 1;

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the cart items from localStorage on page load
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        // Update the UI with the retrieved cart data
        updateButtonVisibility();
        updateSubtotal();
        updateTotal();
        populateProductDetailsInput();
        // Add any additional UI updates as needed
        updateStep();
    }

    // Retrieve the current step from localStorage on page load
    const storedStep = localStorage.getItem('currentStep');
    if (storedStep) {
        currentStep = parseInt(storedStep, 10);
        updateStep(); // Update the UI to reflect the retrieved step
    }

    // Add any other necessary initialization or setup code here
});




document.addEventListener("DOMContentLoaded", function() {
    // Retrieve current step on page load
    const currentStep = 2; // Assuming step 2 is the checkout step

    // Check if the current step is 2 (checkout form)
    if (currentStep === 2) {
        // Listen for beforeunload event
        window.addEventListener("beforeunload", function(event) {
            // Cancel the event to prevent page reload
            event.preventDefault();
            // Prompt the user to confirm leaving the page
            event.returnValue = ''; // Some browsers require a return value
        });
    }
    // ... (rest of your existing code)
});







// Image clicked with event delegation for fetched items
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the body to handle clicks on product images
    document.body.addEventListener("click", function(event) {
        const clickedElement = event.target;
        // Check if the clicked element is a product image
        if (clickedElement.classList.contains("product-image")) {
            // Remove the 'clicked' class from all images
            const productImages = document.querySelectorAll(".product-image");
            productImages.forEach(function(img) {
                img.classList.remove("clicked");
            });
            // Add the 'clicked' class to the clicked image
            clickedElement.classList.add("clicked");
        } else {
            // If the clicked element is not a product image, remove the 'clicked' class from all images
            const productImages = document.querySelectorAll(".product-image");
            productImages.forEach(function(img) {
                img.classList.remove("clicked");
            });
        }
    });
});



// 2nd
ddocument.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the body to handle clicks on product images
    document.body.addEventListener("click", function(event) {
        const clickedElement = event.target;
        // Check if the clicked element is a product image
        if (clickedElement.classList.contains("product-image")) {
            // Remove the 'clicked' class from all images
            const productImages = document.querySelectorAll(".product-image");
            productImages.forEach(function(img) {
                img.classList.remove("clicked");
                // Remove the overlay text
                img.textContent = '';
            });
            // Add the 'clicked' class to the clicked image
            clickedElement.classList.add("clicked");
            // Add the overlay text to the clicked image
            clickedElement.textContent = "BUY NOW!";
        } else {
            // If the clicked element is not a product image, remove the 'clicked' class from all images
            const productImages = document.querySelectorAll(".product-image");
            productImages.forEach(function(img) {
                img.classList.remove("clicked");
                // Remove the overlay text
                img.textContent = '';
            });
        }
    });
});

