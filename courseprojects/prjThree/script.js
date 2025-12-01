document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Hair pin", price: 4.99 },
    { id: 2, name: "pen", price: 12.99 },
    { id: 3, name: "book", price: 59.99 },
  ];
  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  // rendring the products
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span> 
    <button data-id = "${product.id}"> Add to cart </button>`;

    productList.appendChild(productDiv);
  });
  // even delegation
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      // targetting the excat btn and extracting the id and matching it with product id
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });
  cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeBtn")) {
      const index = e.target.getAttribute("data-index");
      removeCart(index);
    }
  });

  function addToCart(product) {
    cart.push(product);
    cartRender(cart);
  }
  function cartRender() {
    // cartItems.classList.add('hidden')
    cartItems.textContent = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const shopCart = document.createElement("div");
        shopCart.classList.add("removeProduct"); // add css to the cart items
        shopCart.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button class="removeBtn" data-index="${index}">Remove</button>`;
        cartItems.appendChild(shopCart);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCart.classList.remove("hidden");
    }
    totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
  }

  function removeCart(index) {
    cart.splice(index, 1); // remove item
    cartRender();
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    totalPriceDisplay.textContent = "";
    alert("CheckOut Successfull");
    cartRender();
    cartTotal.classList.add("hidden");
  });
});

// add local storage
// add remove btn in shopping cart section
