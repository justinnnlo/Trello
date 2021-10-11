import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error('Error: ', errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  getBoards: function (callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function (board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getSpecificBoard: function (id, callback) {
    return axios
      .get(routes.GET_SPECIFIC_BOARD_URL + `/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function (title, boardId, callback) {
    return axios
      .post(routes.CREATE_LIST_URL, { boardId, list: { title } })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  editList: function (list, callback) {
    return axios
      .put(routes.EDIT_LIST_URL + `/${list._id}`, list)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getCard: function (id, callback) {
    return axios
      .get(routes.GET_CARD_URL + `/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createCard: function (card, callback) {
    // console.log('card in create card:', card);
    return axios
      .post(routes.CREATE_CARD_URL, card)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
