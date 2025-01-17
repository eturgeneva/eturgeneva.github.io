// const shopForBeans = require('./library.js');
// const cookBeanSouffle = require('./library.js');
let {cookBeanSouffle, shopForBeans} = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

// Write your code below:
async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle()
    console.log(`${dinner} is served!`)
  } catch (error) {
    console.log(error);
    console.log('Ordering a pizza!')
  }
}

hostDinnerParty()