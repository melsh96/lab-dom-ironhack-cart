// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const subTotalPrice = price.textContent * quantity.value;
  //console.log(price.textContent);
  //console.log(typeof subTotalPrice);
  const subTotal = product.querySelector('.subtotal span');
  subTotal.textContent = subTotalPrice;

  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let totalPrice = 0; // as the final pice

  // for (let i = 0; i < allProducts.length; i++) {
  //   updateSubtotal(allProducts[i]);
  // }

  allProducts.forEach((product, i) => {
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  //console.log(typeof totalValue);

  totalValue.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');

  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
