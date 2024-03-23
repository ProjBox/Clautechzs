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





