import {CARD_ADD, CARD_REMOVE} from '../constants/action_types';
import initialState from '../store/cards_store';

function removeCardById(cards, id) {
  return cards.filter((card) => {
    return card.id != id;
  })
}

export default function (state = initialState, action) {
  const card = action.payload;

  switch (action.type) {
    case CARD_ADD:
      return Object.assign({}, state, {
        results: removeCardById(state.results, card.id),
        saved: [...state.saved, card]
      });
    case CARD_REMOVE:
      return Object.assign({}, state, {
        results: [...state.results, card],
        saved: removeCardById(state.saved, card.id)
      });
    default:
      return state
  }
}
