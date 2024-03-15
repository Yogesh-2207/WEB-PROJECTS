document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let totalAmount = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const foodName = button.dataset.food;
        const foodPrice = parseInt(button.previousElementSibling.textContent.replace('$', ''));
        const rupeePrice = foodPrice * 74.5; // Assuming 1 USD = 74.5 INR
        const cartItem = document.createElement('li');
        cartItem.textContent = `${foodName} - ₹${rupeePrice.toFixed(2)}`; // Display up to 2 decimal places
        cartItemsList.appendChild(cartItem);
  
        totalAmount += rupeePrice;
        cartTotal.textContent = `₹${totalAmount.toFixed(2)}`; // Display up to 2 decimal places
      });
    });
  
    document.getElementById('checkout').addEventListener('click', function() {
      alert(`Total amount: ₹${totalAmount.toFixed(2)}`); // Display up to 2 decimal places
      cartItemsList.innerHTML = '';
      cartTotal.textContent = '₹0.00';
      totalAmount = 0;
    });
  });
  