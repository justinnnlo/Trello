import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

// list action creators
// export function createListRequest() {
//   return {
//     type: types.CREATE_LIST_REQUEST,
//   };
// }

export function createListSuccess(list) {
  return {
    type: types.CREATE_LIST_SUCCESS,
    list,
  };
}

export function editListSuccess(list) {
  return {
    type: types.EDIT_LIST_SUCCESS,
    list,
  };
}

export function createList(title, boardId, callback) {
  // thunk
  return function (dispatch) {
    // dispatch(createListRequest());

    apiClient.createList(title, boardId, (data) => {
      dispatch(createListSuccess(data.list));
      if (callback) callback();
    });
  };
}

export function editList(list, callback) {
  return function (dispatch) {
    apiClient.editList(list, (data) => {
      dispatch(editListSuccess(data.list));
      if (callback) callback();
    });
  };
}
