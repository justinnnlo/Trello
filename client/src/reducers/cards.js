export function cards(state = [], action) {
  switch (action.type) {
    case 'GET_SPECIFIC_BOARD_SUCCESS':
      return action.board.lists.map((list) => list.cards).flat();
    case 'CREATE_CARD_SUCCESS':
      return state.concat(action.card);
    case 'GET_CARD_SUCCESS':
      const card = state.find(c => c._id === action.card._id);
      if (card) {
        return state.map(c => {
          if (c._id === action.card._id) {
            return {...action.card}
          }else {
            return card
          }
        })
      }
      return [action.card]
      // const filteredState = state.filter(c => c._id !== action.card._id);
      // return filteredState.concat(action.card)
    default:
      return state;
  }
}

export default cards;
