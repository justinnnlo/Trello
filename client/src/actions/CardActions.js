import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function getCardSuccess(card) {
  return { type: types.GET_CARD_SUCCESS, card };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function createCard(card) {
  return function (dispatch) {
    apiClient.createCard(card, () => {
      dispatch(createCardSuccess(card));
    });
  };
}

export function getCard(id, callback) {
  return function (dispatch) {
    apiClient.getCard(id, (data) => {
      dispatch(getCardSuccess(data.card));
      if (callback) callback();
    });
  };
}
