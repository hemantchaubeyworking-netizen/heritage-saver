
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function showMessage(text) {
  const msgBox = document.getElementById("msgBox");

  if (!msgBox) return;

  msgBox.innerText = text;
  msgBox.style.display = "block";

  setTimeout(() => {
    msgBox.style.display = "none";
  }, 1500);
}


function addToCart(itemName, price) {
  let existingItem = cart.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: itemName,
      price: price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));



  showMessage(itemName + " added to cart");
}


window.onload = function () {
  let list = document.getElementById("cartList");

  if (list) {
    list.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      let li = document.createElement("li");
      li.className = "list-group-item";

      let itemTotal = item.price * item.quantity;
      total += itemTotal;

      li.innerText = `${item.name} | Qty: ${item.quantity} | ₹${itemTotal}`;
      list.appendChild(li);
    });

    let totalDiv = document.createElement("h4");
    totalDiv.innerText = "Total: ₹" + total;
    list.appendChild(totalDiv);
  }
};


const shops = [
  {
    name: "Kachori Gali",
    desc: "Famous Kachori Sabzi",
    image: "https://source.unsplash.com/300x200/?kachori",
    rating: 4.5,
    items: [
      { name: "Kachori Sabzi", price: 30 },
      { name: "Jalebi", price: 20 }
    ]
  },
  {
    name: "Blue Lassi",
    desc: "Best Lassi in Varanasi",
    image: "https://source.unsplash.com/300x200/?lassi",
    rating: 4.7,
    items: [
      { name: "Mango Lassi", price: 60 },
      { name: "Chocolate Lassi", price: 80 }
    ]
  },
  {
    name: "Shri Rajbandhu Sweets",
    desc: "Traditional Banarasi Sweets",
    image: "https://source.unsplash.com/300x200/?sweets",
    rating: 4.6,
    items: [
      { name: "Rasbhari", price: 60 },
      { name: "Rasmalai", price: 80 }
    ]
  },
  {
    name: "Kashi Chaat Bhandar",
    desc: "Famous Banarasi Chaat",
    image: "https://source.unsplash.com/300x200/?chaat",
    rating: 4.4,
    items: [
      { name: "Aloo tikki", price: 60 },
      { name: "Tamatar chaat", price: 80 }
    ]
  }
];


const shopList = document.getElementById("shopList");

if (shopList) {
  shopList.innerHTML = "";

  shops.forEach((shop, index) => {
    shopList.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card h-100 shadow">
          <img src="${shop.image}" class="card-img-top">
          
          <div class="card-body">
            <h5 class="card-title">${shop.name}</h5>
            <p class="card-text">${shop.desc}</p>
            <span class="badge bg-success">⭐ ${shop.rating}</span>
          </div>

          <div class="card-footer bg-white">
            <button onclick="viewMenu(${index})" class="btn btn-primary w-100">
              View Menu
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function viewMenu(index) {
  const menuList = document.getElementById("menuList");

  if (!menuList) return;

  const shop = shops[index];

  menuList.innerHTML = `<h4>${shop.name} Menu</h4>`;

  shop.items.forEach(item => {
    menuList.innerHTML += `
      <div class="card p-2 mb-2">
        <strong>${item.name}</strong> - ₹${item.price}
        
        <button onclick="addToCart('${item.name}', ${item.price})" 
                class="btn btn-success btn-sm float-end">
          Add
        </button>
      </div>
    `;
  });
}


function placeOrder() {
  if (cart.length === 0) {
    showMessage("Cart is empty!");
    return;
  }

  showMessage("Order placed successfully! 🎉");

  cart = [];
  localStorage.removeItem("cart");

  setTimeout(() => {
    location.reload();
  }, 1000);
}


