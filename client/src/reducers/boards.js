export default function boards(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARDS_SUCCESS': {
      return action.boards;
    }
    case 'CREATE_BOARD_SUCCESS': {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    case 'GET_SPECIFIC_BOARD_SUCCESS': {
      const { lists, ...boardOnly } = action.board;
      console.log(action.board);
      return [boardOnly];
    }

    default:
      return state;
  }
}
