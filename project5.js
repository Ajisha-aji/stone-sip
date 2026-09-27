 
const aboutBtn = document.getElementById('aboutBtn');
if (aboutBtn) {
  aboutBtn.addEventListener('click', () => {
    window.location.href = "aboutus.html";
  });
}

 const cartitem = document.querySelector('.cart_item');
    const cartcancel = document.querySelector('.cart_cancel');
    const carticon = document.querySelector('.navcup');
    cartcancel.addEventListener('click', () => {
      cartitem.classList.remove('cart_active')
    })
    carticon.addEventListener('click', () => {
      cartitem.classList.add('cart_active')
    })
    {
const viewBtn=document.querySelectorAll('.viewBtn');
viewBtn.forEach(function(card) {
card.addEventListener('click', () => {
     window.location.href = "product-details.html";
   
});
});}

const products = [
    {
        name: "VANNILA BEAN",
        price: 33,
        image: "coldbrew1.png",
        description: "Smooth vanilla cold brew coffee."
    },

    {
        name: "CARAMEL DRIZ",
        price: 33,
        image: "coldbrew2.png",
        description: "Rich caramel flavored cold brew."
    },

    {
        name: "MOCHA SWIRL",
        price: 33,
        image: "coldbrew3.png",
        description: "Delicious mocha flavored cold brew."
    },

    {
        name: "COCONUT FRESH",
        price: 33,
        image: "coldbrew6.png",
        description: "Fresh and creamy coconut cold brew."
    },

    {
        name: "MARSH MELLOW",
        price: 33,
        image: "coldbrew8.png",
        description: "Sweet marshmallow flavored cold brew."
    },

    {
        name: "MAPLE OAT",
        price: 33,
        image: "coldbrew7.png",
        description: "Smooth maple oat cold brew."
    }
];
function showproduct(index){
  document.getElementById('productimg').src=products[index].image; 
    document.getElementById('productName').innerText=  products[index].name; 
    document.getElementById('productPrice').innerText=   "$" + products[index].price +".00 USD";
    document.getElementById('productDescription').innerText=   products[index].description;
    
}
console.log(showproduct(0));

let product0=document.getElementById('product0');
product0.addEventListener('click',()=>{
  showproduct(0);
});
let product1=document.getElementById('product1');
product1.addEventListener('click',()=>{
  showproduct(1);
});
let product2=document.getElementById('product2');
product2.addEventListener('click',()=>{
  showproduct(2);
});
let product3=document.getElementById('product3');
product3.addEventListener('click',()=>{
  showproduct(3);
});
let product4=document.getElementById('product4');
product4.addEventListener('click',()=>{
  showproduct(4);
});
let product5=document.getElementById('product5');
product5.addEventListener('click',()=>{
  showproduct(5);
});

let cart = [];

let currentProduct;
function showproduct1(index) {

    currentProduct = products[index];

    document.getElementById('productimg').src = currentProduct.image;
    document.getElementById('productName').innerText = currentProduct.name;
    document.getElementById('productPrice').innerText =
        "$" + currentProduct.price + ".00 USD";
    document.getElementById('productDescription').innerText =
        currentProduct.description;
}

showproduct1(0);
product0.addEventListener('click', () => {
    
    showproduct1(0);
});
product1.addEventListener('click', () => {
   
    showproduct1(1);
});
product2.addEventListener('click', () => {
    
    showproduct1(2);
});
product3.addEventListener('click', () => {
    
    showproduct1(3);
});
product4.addEventListener('click', () => {
    
    showproduct1(4);
});
product5.addEventListener('click', () => {
   
    showproduct1(5);
});


let addcart = document.getElementById("addcart");


addcart.addEventListener("click", function(){

    cart.push({currentProduct,
        quantity: 1});

    console.log(cart);

    displayCart();

});


function displayCart(){
    let total=0;
    let cartProducts =
        document.getElementById("cartProducts");

    cartProducts.innerHTML = "";

    cart.forEach(function(product, index){

        let div = document.createElement("div");

         div.innerHTML = `
        <img src="${product.currentProduct.image}" width="100">

            <h4>${product.currentProduct.name}</h4>

            <p>$${product.currentProduct.price}.00 USD</p>

        <button class="minus">-</button>

        <span class="quantity">${product.quantity}</span>

        <button class="plus">+</button>

        <button class="delete">Delete</button>
    `;

    cartProducts.append(div);

   let plus = div.querySelector(".plus");

        plus.addEventListener("click", function() {

            product.quantity++;

            displayCart();

        });


        // MINUS
        let minus = div.querySelector(".minus");

        minus.addEventListener("click", function() {

            if (product.quantity > 1) {
                product.quantity--;
            }

            displayCart();

        });
         total = total + (product.currentProduct.price * product.quantity);

        // DELETE
        let deleteBtn = div.querySelector(".delete");

        deleteBtn.addEventListener("click", function() {

            cart.splice(index, 1);

            displayCart();

        });

    });

  cartProducts.innerHTML += `
    <h3>Total: $${total}.00 USD</h3>
  `;
}
