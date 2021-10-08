import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function getCardSuccess(card) {
  return { type: types.GET_CARD_SUCCESS, card };
}

export function getCard(id) {
  return function (dispatch) {
    apiClient.getCard(id, (data) => {
      dispatch(getCardSuccess(data.card));
      if (callback) callback();
    });
  };
}
