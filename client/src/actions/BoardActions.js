import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function fetchListsSuccess(lists) {
  return { type: types.FETCH_LISTS_SUCCESS, lists };
}

export function fetchCardsSuccess(cards) {
  return { type: types.FETCH_CARDS_SUCCESS, cards };
}

export function getSpecificBoardSuccess(board) {
  return { type: types.GET_SPECIFIC_BOARD_SUCCESS, board };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board: board };
}

export function fetchBoards() {
  return function (dispatch) {
    apiClient.getBoards((data) => dispatch(fetchBoardsSuccess(data.boards)));
  };
}

export function fetchLists() {
  return function (dispatch) {
    apiClient.getLists((data) => dispatch(fetchListsSuccess(data.lists)));
  };
}

export function createBoard(board, callback) {
  return function (dispatch) {
    apiClient.createBoard(board, (data) => {
      dispatch(createBoardSuccess(data.board));

      if (callback) {
        callback(data.board);
      }
    });
  };
}

export function getSpecificBoard(id, callback) {
  return function (dispatch) {
    apiClient.getSpecificBoard(id, (data) => {
      dispatch(getSpecificBoardSuccess(data));

      if (callback) {
        callback(data);
      }
    });
  };
}
