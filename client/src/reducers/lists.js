export function lists(state = [], action) {
  switch (action.type) {
    case 'FETCH_LISTS_SUCCESS':
      return action.lists;
    default:
      return state;
  }
}

export default lists;
