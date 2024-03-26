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