function petya (a, b) {
    return a + b;
}



function predicate (element, index, array) {
    return element > 3;
}

let array = [1, 2, 3];

let invertedPredicate = function (element, index) {
    return !predicate(element, index, array);
  };

console.log(invertedPredicate (5, 3))
