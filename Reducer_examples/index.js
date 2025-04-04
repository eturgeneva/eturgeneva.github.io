const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
}

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
              ...state,
              supplies: state.supplies + 15,
              distance: state.distance,
              days: state.days + 1
            }
    }
    case 'travel': {
      let newSupplies = state.supplies - (action.payload * 20);
      if (newSupplies < 0) {
        return state;
        // return 'Not enough supplies';
      }
      return {
        ...state,
        supplies: state.supplies - (action.payload * 20),
        distance: state.distance + (action.payload * 10),
        days: state.days + action.payload
      }
    }
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1
      }
    }
    case 'sell': {
      let newSupplies = state.supplies - 20;
      if (newSupplies <= 0) {
        return state;
        // return 'Not enough supplies to sell'
      }
      return {
        ...state,
        supplies: state.supplies - 20,
        distance: state.distance,
        days: state.days,
        cash: state.cash + 5
      }
    }

    case 'buy': {
      let newCash = state.cash - 15;
      if (newCash <= 0) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies + 25,
        cash: state.cash - 15
      }
    }

    case 'theft': {
      return {
        ...state,
        cash: state.cash / 2
      }
    }

    default: {
      return state;
    }
  }
}

let wagon = reducer(undefined, {});
console.log(wagon);

wagon = reducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

wagon = reducer(wagon, {type: 'gather'});
console.log(wagon);

wagon = reducer(wagon, {type: 'tippedWagon'});
console.log(wagon);

wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);
// Not enough supplies to travel case:
wagon = reducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

//Sell case:
wagon = reducer(wagon, {type: 'sell'});
console.log(wagon);
// Buy case:
wagon = reducer(wagon, {type: 'buy'});
console.log(wagon);
// Theft case:
wagon = reducer(wagon, {type: 'theft'});
console.log(wagon);





