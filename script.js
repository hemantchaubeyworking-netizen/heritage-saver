let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " added to cart");
}

window.onload = function () {
  let list = document.getElementById("cartList");
  if (list) {
    cart.forEach(item => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.innerText = item;
      list.appendChild(li);
    });
  }
};
const shops = [
  {
    name: "Kachori Gali",
    desc: "Famous Kachori Sabzi",
    image: "https://source.unsplash.com/300x200/?kachori",
    rating: 4.5
  },
  {
    name: "Blue Lassi",
    desc: "Best Lassi in Varanasi",
    image: "https://source.unsplash.com/300x200/?lassi",
    rating: 4.7
  },
  {
    name: "Shri Rajbandhu Sweets",
    desc: "Traditional Banarasi Sweets",
    image: "https://source.unsplash.com/300x200/?sweets",
    rating: 4.6
  },
  {
    name: "Kashi Chaat Bhandar",
    desc: "Famous Banarasi Chaat",
    image: "https://source.unsplash.com/300x200/?chaat",
    rating: 4.4
  }
];

const shopList = document.getElementById("shopList");

if (shopList) {
  shops.forEach(shop => {
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
            <a href="shop.html" class="btn btn-primary w-100">View Shop</a>
          </div>
        </div>
      </div>
    `;
  });
}


