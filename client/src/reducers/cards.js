export function cards(state = [], action) {
  switch (action.type) {
    case 'GET_SPECIFIC_BOARD_SUCCESS':
      return action.board.lists.map((list) => list.cards).flat();
    case 'CREATE_CARD_SUCCESS':
      return state.concat(action.card);
    case 'GET_CARD_SUCCESS':
      if (state.find((card) => card._id === action.card._id)) {
        return state.slice();
      }
      const filteredState = state.filter((c) => c._id !== action.card._id);
      return filteredState.concat(action.card);
    case 'EDIT_CARD_SUCCESS':
      return state.map((card) => {
        if (card._id === action.card._id) {
          return action.card;
        }
        return card;
      });
    default:
      return state;
  }
}

export default cards;
