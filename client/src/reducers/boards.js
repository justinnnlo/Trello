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
      // console.log('board in reducer:', action.board);
      let boardCopy = { ...action.board };
      delete boardCopy['lists'];
      // console.log(boardCopy);
      return boardCopy;
    }
    default:
      return state;
  }
}
