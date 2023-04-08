


function clearCart(memoryType) {
    if (memoryType === "session") {
      cart = [];
      sessionStorage.removeItem('shoppingCart');
    } else if (memoryType === "local") {
      cart = [];
      localStorage.removeItem('shoppingCart');
    }
  }
  // Clear items and update cart
  $('.clear-cart').click(function() {
    shoppingCart.clearCart("session"); // or "local" to clear from localStorage
    displayCart();
  });
