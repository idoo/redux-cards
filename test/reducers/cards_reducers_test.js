import chai from 'chai';
let expect = chai.expect;
import reducer from '../../js/reducers/cards_reducer';
import * as types from '../../js/constants/action_types';

describe('cards reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).not.to.be.null;
  });

  it('should handle CARD_ADD', () => {
    const length = reducer.length;
    const card = {id: 0};
    let state = {results: [card], saved: []};

    expect(reducer(state, {
      type: types.CARD_ADD,
      payload: card
    })).to.eql({
      results: [],
      saved:[card]
    });
  });

  it('should handle CARD_REMOVE', () => {
    const length = reducer.length;
    const card = {id: 0};
    let state = {results: [], saved: [card]};

    expect(reducer(state, {
      type: types.CARD_REMOVE,
      payload: card
    })).to.eql({
      results: [card],
      saved:[]
    });
  })
});
