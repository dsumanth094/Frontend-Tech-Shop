function renderCart() {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  let cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = "";

  let originalPrice = 0;
  let discount = 0;
  let totalItems = 0;

  cartItems.forEach((item, index) => {
    let itemTotal = item.price * item.quantity;
    originalPrice += itemTotal;
    discount += itemTotal * 0.20; // 10% discount
    totalItems += item.quantity;
cartContainer.innerHTML = "";

// Create wrapper div for all items
let itemsWrapper = document.createElement("div");
itemsWrapper.className = "cart-items-wrapper"; // new wrapper class

cartItems.forEach((item, index) => {
  let div = document.createElement("div");
  div.className = "carts";
  div.innerHTML = `
    <div class="cart-item-box">
      <img class="c" src="${item.image}" alt="">
      <h3 class="n">${item.name}</h3>
      <h5 class="p">₹${item.price}.00</h5>
      <p class="b"><a href="#" onclick="increaseQuantity(${index})"><b>+</b></a></p>
      <p class="b1"><a href="#" onclick="decreaseQuantity(${index})">-</a></p>
      <p class="q">${item.quantity}</p>
      <h6 class="x"><a href="#" onclick="removeItem(${index})"><i class="fa-solid fa-trash delete-icon"></i></a></h6>
    </div>
  `;
  itemsWrapper.appendChild(div);
});

cartContainer.appendChild(itemsWrapper);

  });

  if (cartItems.length > 0) {
    let finalTotal = originalPrice - discount;

    let summary = document.createElement("div");
    summary.className = "cart";
    summary.innerHTML = `
      <p class="d"><b>Order Summary (${totalItems} items)<hr></b></p>
      <p class="s"><span>Original Price</span> <span>₹${originalPrice.toFixed(2)}</span></p>
      <p class="d"><span>Discount</span> <span>-₹${discount.toFixed(2)}</span></p>
      <p class="d"><span>Delivery</span> <span>Free</span></p>
      <p class="t"><span>Total</span> <span>₹${finalTotal.toFixed(2)}</span></p>
      <button class="checkout-btn" onclick="checkout()">Checkout</button>
    `;
    cartContainer.appendChild(summary);
  }
}

// Increase quantity
function increaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Decrease quantity
function decreaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Remove item
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Checkout function
function checkout() {
  alert("Proceeding to checkout...");
}

// Run when page loads
window.onload = renderCart;



