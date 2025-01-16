const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

function handleSuccess(resolvedValue) {
  console.log(resolvedValue);
}
function handleFailure(rejectionReason) {
  console.log(rejectionReason);
}

// const prom = checkInventory(order);
// prom.then(handleSuccess, handleFailure);

// Chaining then:

// checkInventory(order)
// .then(handleSuccess, handleFailure);

// With catch:

checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure)