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
  cart.style.cssText = "right: 0; transition: .3s;";
});
//Cart Open

//Cart Close
const closeIcon = document.querySelector(".close");
closeIcon.addEventListener("click", () => {
  cart.style.cssText = "right: -100%; transition: 1s;";
});
//Cart Close
//Add to cart
// const addCart = document.querySelectorAll(".add-cart");
// addCart.forEach((event) => {
//   event.addEventListener("click", () => {
//     cart.style.cssText = "right: 0; transition: .3s;";
//     const elementsParent = event.parentElement.parentElement;
//     const boxImg = elementsParent.querySelector("img");
//     const boxTitle = elementsParent.querySelector("h3").innerText;
//     const boxPrice = elementsParent.querySelector("span").innerText;
//     const newBox = document.createElement("div");
//     const newImg = document.createElement("img");
//     const cartContent = document.querySelector(".cart-content");
//     newImg.src = boxImg.src;
//     newImg.classList.add("imgs")
//     const newDetails = document.createElement("div");
//     const newPrice = document.createElement("span");
//     const newTitle = document.createElement("h4");
//     newDetails.appendChild(newTitle)
//     newDetails.appendChild(newPrice)
//     const input = document.createElement("input");
//     input.value = 1;
//     input.min = 1;
//     input.type = "number";
//     newDetails.appendChild(input);
//     newBox.classList.add("cart-box");
//     cartContent.prepend(newBox);
//     newDetails.classList.add("cart-details");
//     newBox.appendChild(newImg);
//     newBox.appendChild(newDetails);
//     const imageArray = document.getElementsByClassName("imgs");
//     console.log(imageArray)
//     newPrice.innerText = boxPrice;
//     newTitle.innerText = boxTitle;
//     let remove = document.createElement("i");
//     remove.classList.add("fa-solid");
//     remove.classList.add("fa-minus");
//     newBox.appendChild(remove);
//     remove.addEventListener("click", () => {
//       newBox.remove();
//     })
//   });
// });
// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready()
// };

// function ready() {
//   let addToCartButtons = document.getElementsByClassName("add-cart");
//   for (let i = 0; i < addToCartButtons.length; i++) {
//     const button = addToCartButtons[i];
//     button.addEventListener("click", addToCartClicked);
//   };
// };

// function addToCartClicked(event) {
//   cart.style.cssText = "right: 0; transition: .3s;";
//   let button = event.target;
//   let productBox = button.parentElement.parentElement;
//   let title = productBox.querySelectorAll(".box-details h3")[0].innerText;
//   let price = productBox.querySelectorAll(".box span")[0].innerText;
//   let imgSrc = productBox.querySelectorAll(".box img")[0].src;
//   addItemToCart(title, price, imgSrc);
// };

// function addItemToCart(title, price, imgSrc){
//   //total

//   function updateCartTotal() {
//     let boxes = document.querySelectorAll(".cart-box");
//     let total = 0;
//     for (let i = 0; i < boxes.length; i++) {
//       let box = boxes[i];
//       const priceElement = box.querySelector("span");
//       const quantity = input.value;
//       const totalPrice = parseFloat(priceElement.innerText.replace("$", ""));
//       total = total + (quantity * totalPrice);
//     };
//     document.querySelector(".total-number").innerText = "$" + total;
//   };
  
//   //total
  
//   updateCartTotal()
//   let newBox = document.createElement("div");
//   let cartContent = document.querySelector(".cart-content");
//   let cartProductsNames = cartContent.querySelectorAll(".cart-box h2");
//   for (let i = 0; i < cartProductsNames.length; i++) {
//     if (cartProductsNames[i].innerText === title) {
//       input[i].addEventListener("change", () => {
//         updateCartTotal();
//       });
//       updateCartTotal();
//       input[i].value++;
//       return;
//     };
//   };

//   let newBoxContent = `
//   <div class="cart-box">
//     <img src="${imgSrc}" alt="">
//     <div class="cart-details">
//       <h2>${title}</h2>
//       <span>${price}</span>
//       <input type="number" value ="1" min="1">
//     </div>
//     <i class="fa-solid fa-minus remove"></i>
//   </div>`;
//   newBox.innerHTML = newBoxContent;
//   cartContent.prepend(newBox);
//   input = newBox.querySelectorAll(".cart-details input");
//   input.value = 1;
//   //remove
//   let removeIcons = document.querySelectorAll(".remove");
//   for (let i = 0; i < removeIcons.length; i++) {
//     removeIcons[i].addEventListener("click", () => {
//       removeIcons[i].parentElement.remove();
//       updateCartTotal();
//     });
//   };
//   //remove
// };
// //Add to cart





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
  cart.style.cssText = "right: 0; transition: .3s;";
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
