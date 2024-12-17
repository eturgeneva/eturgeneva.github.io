function formatNumber (number) {
    // let numberAsString = number.toString();
    let numberAsString = String(Math.floor(number));
    // let slices = [];
    let step = 3;
    for (let i = numberAsString.length - step; i > 0; i -= step) {
        numberAsString = numberAsString.slice(0, i) + ',' + numberAsString.slice(i);
        console.log(i);
        console.log(numberAsString);
    }
    // for (let i = 0; i < numberAsString.length; i += step) {

    //     slices.push(numberAsString.slice(i, i + step));
    //     console.log(i);
    // }
    // return slices.join();
    return numberAsString;
}
  
console.log(formatNumber(355));
console.log(formatNumber(355278540));
console.log(formatNumber(35527854088812));

export { formatNumber };