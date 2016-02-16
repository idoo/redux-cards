import chai from 'chai';
let expect = chai.expect;
import * as actions from '../../js/actions/cards_actions';
import * as types from '../../js/constants/action_types';

describe('cards actions', () => {
  it('should create an action to add a card', () => {
    const card = {};
    const expectedAction = {
      type: types.CARD_ADD,
      payload: card
    };
    expect(actions.cardAction(card, types.CARD_ADD)).to.eql(expectedAction);
  });

  it('should create an action to remove a card', () => {
    const card = {};
    const expectedAction = {
      type: types.CARD_REMOVE,
      payload: card
    };
    expect(actions.cardAction(card, types.CARD_REMOVE)).to.eql(expectedAction);
  })
});
