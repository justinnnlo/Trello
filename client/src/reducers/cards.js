export function cards(state = [], action) {
  switch (action.type) {
    case 'FETCH_CARDS_SUCCESS':
      return action.cards;
    default:
      return state;
  }
}

export default cards;
