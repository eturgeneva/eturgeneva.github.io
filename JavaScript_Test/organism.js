// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
// factory function returning an object
function pAequorFactory (number, dnaArray) {
  return {
    specimenNum: number,
    dna: dnaArray,
    mutate() {
        let dnaElementToReplace = this.dna[Math.floor(Math.random() * this.dna.length)];
        const indexOfReplace = this.dna.indexOf(dnaElementToReplace);
        while (this.dna[indexOfReplace] === dnaElementToReplace) {
          this.dna[indexOfReplace] = returnRandBase();
        }
          return this.dna;
      },
    compareDNA(pAequor) {
        let commonDna = [];
          for (let j = 0; j < pAequor.dna.length; j++) {
            if (pAequor.dna[j] === this.dna[j]) {
              commonDna.push(pAequor.dna[j]);
            }
          }
        console.log(commonDna);
        let percentageRounded = (commonDna.length / this.dna.length * 100).toFixed();
        console.log(`specimen #1 and specimen #2 have ${percentageRounded}% DNA in common`)
    },
    willLikelySurvive() {
        let survivalBase = this.dna.filter(element => element === 'C' || element === 'G')
        // console.log(survivalBase);
        // console.log(survivalBase.length / this.dna.length * 100);
        if ((survivalBase.length / this.dna.length * 100) >= 60) {
          return true;
        } else {
          return false;
        }
    }
  }
}
// console.log(returnRandBase());
// console.log(mockUpStrand());
const dna1 = mockUpStrand();
const pAequor1 = pAequorFactory(3, dna1);
// console.log('before mutate', pAequor1.dna);
// console.log(dna1);
pAequor1.mutate();
console.log('after mutate', pAequor1.dna);

const dna2 = mockUpStrand();
const pAequor2 = pAequorFactory(5, dna2);
console.log('   pAequor 2', pAequor2.dna);

pAequor1.compareDNA(pAequor2);

console.log(pAequor1.willLikelySurvive());
console.log(pAequor2.willLikelySurvive());

// create 30 instances of pAequor that can survive in their natural environment:
function createSpecies () {
  const pAequorThatCanSurvive = [];
  let num = 1;
  while (pAequorThatCanSurvive.length < 5) {
    
    let element = pAequorFactory(num++, mockUpStrand());
    if (element.willLikelySurvive() === true) {
      pAequorThatCanSurvive.push(element);
    }
    // works (but pushes both true and false):
    // pAequorThatCanSurvive.push(pAequorFactory(num++, mockUpStrand()));
  }
  return pAequorThatCanSurvive;
}
const pAequorThatCanSurvive = createSpecies();
console.log(pAequorThatCanSurvive);
console.log(pAequorThatCanSurvive[4].willLikelySurvive())
// console.log(pAequorThatCanSurvive.filter(element => element.willLikelySurvive() === true))
const pAequorThatCanSurvive2 = createSpecies();
console.log(pAequorThatCanSurvive2);














