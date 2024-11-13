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
          console.log(dnaElementToReplace);
          // console.log(this.dna.indexOf(dnaElementToReplace));
          const indexOfReplace = this.dna.indexOf(dnaElementToReplace);
          console.log(indexOfReplace);
          console.log(this.dna[indexOfReplace]);
        
  
        }
    }
  }
  // console.log(returnRandBase());
  // console.log(mockUpStrand());
  const dna = mockUpStrand();
  const pAequor = pAequorFactory(3, dna);
  console.log(dna);
  console.log(pAequor);
  console.log(pAequor.mutate());
  
  
  
  
  
  
  
  
  
  
  