export function cards(state = [], action) {
  switch (action.type) {
    case 'GET_SPECIFIC_BOARD_SUCCESS':
      return action.board.lists.map((list) => list.cards).flat();
    default:
      return state;
  }
}

export default cards;
