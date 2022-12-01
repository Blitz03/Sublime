//Header lists
let myHome = document.querySelector(".home");
let myCategories = document.querySelector(".categories");
let myHomeLists = document.querySelector(".home-ul");
let myCategoriesLists = document.querySelector(".categories-ul");
let myHtml = document.getElementsByTagName("html")[0];

myHtml.addEventListener("mouseover", (e) => {
  if (e.target === myHome || e.target === myHomeLists) {
    myHomeLists.style.display = "block";
  } else {
    myHomeLists.style.display = "none";
  };
});

myHtml.addEventListener("mouseover", (e) => {
  if (e.target === myCategories || e.target === myCategoriesLists) {
    myCategoriesLists.style.display = "block";
  } else {
    myCategoriesLists.style.display = "none";
  };
});
//Header lists

//Header Scroll
let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.cssText = "height: 65px; transition: .3s;"
  } else {
    header.style.cssText = "height: 130px; transition: .2s;"
  };
});
//Header Scroll

//Cart Open
const cartIcon = document.querySelector(".header-cart-content");
const cart = document.querySelector(".cart");
cartIcon.addEventListener("click", () => {
  cart.style.cssText = "display: block;";
});
//Cart Open

//Cart Close
const closeIcon = document.querySelector(".close");
closeIcon.addEventListener("click", () => {
  cart.style.cssText = "display: none;";
});
//Cart Close

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
};

function ready() {
  let removeCartButtons = document.querySelectorAll(".remove");
  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  };

  let quantityInputs = document.querySelectorAll(".cart-details input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged)
  };

  let addToCartButtons = document.querySelectorAll(".add-cart");
  for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked)
  };
};

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateCartTotal();
};

function quantityChanged() { 
  updateCartTotal();
};

function addToCartClicked(event) {
  cart.style.cssText = "display: block;";
  let button = event.target;
  let product = button.parentElement.parentElement;
  let title = product.querySelector("h3").innerText;
  let price = product.querySelector("span").innerText;
  let imgSrc = product.querySelector("img").src;
  addItemToCart(title, price, imgSrc);
  updateCartTotal();
};

function addItemToCart(title, price, imgSrc) {
  let newBox = document.createElement("div");
  let cartContent = document.querySelector(".cart-content");
  let cartProductsNames = document.querySelectorAll(".cart-box h2");
  let input = document.querySelectorAll(".cart-details input");
  for (let i = 0; i < cartProductsNames.length; i++) {
    if (cartProductsNames[i].innerText === title) {
      input[i].value++;
      return;
    };
  };
  let newBoxContent = `
  <div class="cart-box">
    <img src="${imgSrc}" alt="">
    <div class="cart-details">
      <h2>${title}</h2>
      <span>${price}</span>
      <input type="number" value ="1" min="1">
    </div>
    <i class="fa-solid fa-minus remove"></i>
  </div>`;
  newBox.innerHTML = newBoxContent;
  cartContent.prepend(newBox);
  newBox.querySelector(".remove").addEventListener("click", removeCartItem);
  newBox.querySelector(".cart-details input").addEventListener("change", quantityChanged);
};


function updateCartTotal() {
  let cartContent = document.querySelector(".cart-content");
  let cartBoxes = cartContent.querySelectorAll(".cart-box");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.querySelector("span");
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantityElement = cartBox.querySelector("input");
    let quantity = quantityElement.value;
    total = total + (quantity * price);
  };
  document.querySelector(".total-number").innerText = "$" + total;
};

const menuIcon = document.querySelector(".menu i");
const menuContent = document.querySelector(".menu .content");
const menuCloseIcon = document.querySelector(".menu-close");

menuIcon.addEventListener("click", () => {
  menuContent.style.cssText = "visibility: visible; opacity: 1;";
});

menuCloseIcon.addEventListener("click", () => {
  menuContent.style.cssText = "visibility: hidden; opacity: 0;";
});