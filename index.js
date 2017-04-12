const app = "I don't do much."

function getTotalAmountForProducts(products, callback, initialValue){
  let totalPrice = initialValue;

  products.forEach(product => {
    totalPrice = callback(totalPrice, product);
  });

  return totalPrice;
}

function callback(totalPrice, product){
  if(product.discount >= .5){
    return totalPrice + product.price;
  }
  return totalPrice;
}

function reduce(collection, callback, initialValue){
  let result = initialValue;

  collection.forEach(product => {
    result = callback(result, product);
  });
  return result;
}


function reduce(collection, callback, initialValue){
  let result = initialValue;

  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  });
  return result;
}
