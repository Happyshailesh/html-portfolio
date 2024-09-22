// Add event listeners to add to cart buttons
const addToCartButtons = document.querySelectorAll('.products li button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add product to cart logic here
        console.log('Add to cart button clicked!');
    });
});

// Add event listener to checkout button
const checkoutButton = document.querySelector('.cart button');
checkoutButton.addEventListener('click', () => {
    // Checkout logic here
    console.log('Checkout button clicked!');
});