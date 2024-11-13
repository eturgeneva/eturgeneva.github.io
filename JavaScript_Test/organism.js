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
        returnRandBase();
        if (this.dna === 'A') {
  
        }
        return this.dna;
      }
    }
  }
  console.log(returnRandBase());
  console.log(mockUpStrand());
  console.log(pAequorFactory(3, returnRandBase()))
  
  
  
  
  
  
  
  
  
  