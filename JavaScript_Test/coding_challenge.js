const army = {
    units: [{type: 'Spearmen'}, 
            {type: 'Swordsmen'}, 
            {type: 'Archer'}],

    // buildAnArmy(totalNumberOfUnits) {
    //     if (typeof totalNumberOfUnits === 'number' && totalNumberOfUnits > 0) {
    //         return `Your army consists of ${totalNumberOfUnits}`;
    //     } else {
    //         return 'Invalid input';
    //     }
    // },

    get troopsTest() {
        return this.units;
    },
};

const buildAnArmy = function(totalNumberOfUnits) {
    if (typeof totalNumberOfUnits === 'number' && totalNumberOfUnits > 0) {
        return `Your army consists of ${totalNumberOfUnits}`;
    } else {
        return 'Invalid input';
    }
}

console.log(army.troopsTest);
console.log(buildAnArmy(6));