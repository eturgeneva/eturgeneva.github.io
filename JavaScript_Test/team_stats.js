const team = {
    _players: [{firstName: 'Evgeny', lastName: 'Frost', age: 35}, 
               {firstName: 'Elena', lastName: 'Elenova', age: 35}, 
               {firstName: 'Kot', lastName: 'Tisha', age: 12}],
    get players() {
      return this._players;
    },
  
    _games: [{opponent: 'Pokemons', teamPoints: 27, opponentPoints: 44}, 
             {opponent: 'Bears', teamPoints: 18, opponentPoints: 31}, 
             {opponent: 'Desserts', teamPoints: 68, opponentPoints: 12}],
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
    this._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoint) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoint
      };
    this._games.push(game);
    }
  
}
  
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Titans', 100, 98);
console.log(team._games);