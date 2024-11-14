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
        // console.log(commonDna);
        let percentageRounded = (commonDna.length / this.dna.length * 100).toFixed();
        return percentageRounded;
        // console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentageRounded}% DNA in common`)
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
    },
    complementStrand() {
        let complementStrand = [];
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'A') {
            complementStrand.push('T');
          } else if (this.dna[i] === 'T') {
            complementStrand.push('A');
          } else if (this.dna[i] === 'C') {
            complementStrand.push('G');
          } else if (this.dna[i] === 'G') {
            complementStrand.push('C');
          }
        }
        return complementStrand;
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
console.log(pAequor1.complementStrand());

const dna2 = mockUpStrand();
const pAequor2 = pAequorFactory(5, dna2);
console.log('   pAequor 2', pAequor2.dna);
console.log(pAequor2.complementStrand());

pAequor1.compareDNA(pAequor2);

console.log(pAequor1.willLikelySurvive());
console.log(pAequor2.willLikelySurvive());

// create 30 instances of pAequor that can survive in their natural environment:
function createSpecies (batchSize) {
  const pAequorThatCanSurvive = [];
  let num = 1;
  while (pAequorThatCanSurvive.length < batchSize) {
    
    let element = pAequorFactory(num++, mockUpStrand());
    if (element.willLikelySurvive() === true) {
      pAequorThatCanSurvive.push(element);
    }
    // works (but pushes both true and false):
    // pAequorThatCanSurvive.push(pAequorFactory(num++, mockUpStrand()));
  }
  return pAequorThatCanSurvive;
}
const pAequorThatCanSurvive = createSpecies(5);
console.log(pAequorThatCanSurvive);
// console.log(pAequorThatCanSurvive[4].willLikelySurvive())
// console.log(pAequorThatCanSurvive.filter(element => element.willLikelySurvive() === true))
// const pAequorThatCanSurvive2 = createSpecies(3);
// console.log(pAequorThatCanSurvive2);

// pAequorThatCanSurvive[3].compareDNA(pAequorThatCanSurvive[4]);

function twoRelatedSpecies (speciesArray) {
  let dnaChains = [];
  let percentage;
  for (let i = 0; i < speciesArray.length; i++) {
    for (let j = 0; j < speciesArray.length; j++) {
      if (i !== j) {
        let percentage = speciesArray[i].compareDNA(speciesArray[j]);
        dnaChains.push({specie: i, comparedSpecie: j, percentage: percentage});
      }

    }
  }
  console.log(dnaChains);
}
twoRelatedSpecies(pAequorThatCanSurvive);
















