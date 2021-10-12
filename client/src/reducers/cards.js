export function cards(state = [], action) {
  switch (action.type) {
    case 'GET_SPECIFIC_BOARD_SUCCESS':
      return action.board.lists.map((list) => list.cards).flat();
    case 'CREATE_CARD_SUCCESS':
      return state.concat(action.card);
    case 'GET_CARD_SUCCESS':
      return [action.card];
    default:
      return state;
  }
}

export default cards;
