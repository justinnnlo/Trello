export function lists(state = [], action) {
  switch (action.type) {
    case 'GET_SPECIFIC_BOARD_SUCCESS':
      return action.board.lists.map((list) => {
        const { cards, ...listOnly } = list;
        return listOnly;
      });
    default:
      return state;
  }
}

export default lists;
