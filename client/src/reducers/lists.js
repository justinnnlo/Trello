export function lists(state = [], action) {
  switch (action.type) {
    case 'GET_SPECIFIC_BOARD_SUCCESS': {
      return action.board.lists.map((list) => {
        const { cards, ...listOnly } = list;
        return listOnly;
      });
    }
    case 'CREATE_LIST_SUCCESS': {
      const newList = action.list;
      return state.concat(newList);
    }
    case 'EDIT_LIST_SUCCESS': {
      const newList = action.list;
      console.log(action);
      return state.map((list) => {
        if (list._id === newList._id) {
          return newList;
        }
        return list;
      });
    }
    default:
      return state;
  }
}

export default lists;
