import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

// list action creators
export function createListRequest() {
  return {
    type: types.CREATE_LIST_REQUEST,
  };
}

export function createListSuccess(list) {
  return {
    type: types.CREATE_LIST_SUCCESS,
    payload: list,
  };
}

export function createList(title, boardId, callback) {
  // thunk
  return function (dispatch) {
    dispatch(createListRequest());

    apiClient.createList(title, boardId, (data) => {
      dispatch(createListSuccess(data.payload));
      if (callback) callback(data.payload);
    });
  };
}
