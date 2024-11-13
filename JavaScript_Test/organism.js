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
          // console.log(dnaElementToReplace);
          // console.log(this.dna.indexOf(dnaElementToReplace));
          const indexOfReplace = this.dna.indexOf(dnaElementToReplace);
          // console.log(indexOfReplace);
          // console.log(this.dna[indexOfReplace]);
          while (this.dna[indexOfReplace] === dnaElementToReplace) {
            this.dna[indexOfReplace] = returnRandBase();
          }
            return this.dna;
        },
      compareDNA(pAequor) {
          let commonDna = [];
            for (let j = 0; j < pAequor.dna.length; j++) {
              commonDna.map(element => element === pAequor.dna[j])
                // console.log(this.dna[i]);
                // console.log(pAequor.dna[j]);
                // commonDna.push(this.dna[i]);
            }
    
          console.log(commonDna.join(' '));
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
  
  
  
  
  
  
  
  
  
  
  