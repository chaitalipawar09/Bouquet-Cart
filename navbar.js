
// ------------modalSigninBtn
   document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("LoginEmail").value;
    let password = document.getElementById("LoginPassword").value;
    alert("Welcome Back!\n\nEmail: " + email + "\nPassword: " + password);
  });
});


//cart product handling

 let cart = [];

function addToCart(button) {
  let name = button.getAttribute("data-name");
  let price = parseInt(button.getAttribute("data-price"));
  let image = button.getAttribute("data-image");

  // check if item already in cart
  let existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, image, qty: 1 });
  }

  renderCart();
}

function changeQty(name, change) {
  let item = cart.find(p => p.name === name);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      cart = cart.filter(p => p.name !== name);
    }
  }
  renderCart();
}

function renderCart() {
  let cartTable = document.getElementById("cart-items");
  let total = 0;
  let count = 0;
  cartTable.innerHTML = "";

  cart.forEach(item => {
    let itemTotal = item.price * item.qty;
    total += itemTotal;
    count += item.qty;

    cartTable.innerHTML += `
      <tr>
        <td><img src="${item.image}" width="50"></td>
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td>
          <div class="qty-buttons">
            <button class="qty-btn minus" onclick="changeQty('${item.name}', -1)">-</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn plus" onclick="changeQty('${item.name}', 1)">+</button>
          </div>
        </td>
        <td>₹${itemTotal}</td>
      </tr>
    `;
  });

  document.getElementById("cart-total").textContent = total;
  document.getElementById("cart-count").textContent = count;
}

  //Small JS for  tract order form handling 
 document.getElementById("trackOrderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let orderId = document.getElementById("orderId").value;
    let email = document.getElementById("emailId").value;

    alert("Tracking Order...\nOrder ID: " + orderId + "\nEmail: " + email);
    // Here you can add backend call to fetch real status
  });

//payament js
 function placeOrder() {
    let selected = document.querySelector('input[name="payment"]:checked').value;

    // Show payment method inside modal
    document.getElementById("paymentMethod").textContent = "Paid via: " + selected;

    // Trigger Bootstrap modal
    var myModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    myModal.show();
  }