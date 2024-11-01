const army = {
    units: [{type: 'Spearmen'}, 
            {type: 'Swordsmen'}, 
            {type: 'Archer'}],
    get troops() {
      return this.units;
    }
  
};

console.log(army.troops);