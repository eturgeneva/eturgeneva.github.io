const army = {
    units: [{type: 'Spearmen', _amount: 0}, 
            {type: 'Swordsmen', _amount: 0}, 
            {type: 'Archer', _amount: 0}],

    buildAnArmy(totalNumberOfUnits) {
        if (typeof totalNumberOfUnits === 'number' && totalNumberOfUnits > 0) {
            for (let i = 0; i < this.units.length; i++) {
                this.units[i]._amount = Math.random();
                console.log(this.units);
            }

            return `Your army consists of ${totalNumberOfUnits}`;
        } else {
            return 'Invalid input';
        }
    },

    armySetup() {
        return this.units.length;
    },

    get troopsTest() {
        return this.units;
    },
};

// const buildAnArmy = function(totalNumberOfUnits) {
//     if (typeof totalNumberOfUnits === 'number' && totalNumberOfUnits > 0) {
//         return `Your army consists of ${totalNumberOfUnits}`;
//     } else {
//         return 'Invalid input';
//     }
// }

console.log(army.troopsTest);
console.log(army.buildAnArmy(90));
console.log(army.armySetup());