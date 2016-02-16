import {CARD_ADD, CARD_REMOVE} from '../constants/action_types';

export function cardAction(card, action) {
  switch (action) {
    case 'CARD_ADD':
      return {
        type: 'CARD_ADD',
        payload: card
      };
    case 'CARD_REMOVE':
      return {
        type: 'CARD_REMOVE',
        payload: card
      };
  }

  return state;
}
