import chai from 'chai';
let expect = chai.expect;
import initialState from '../../js/store/cards_store';

describe('cards store', () => {
  it('should create a not empty store with result', () => {
    expect(initialState.results).not.to.be.empty;
  });

  it('should create a not empty store with saved', () => {
    expect(initialState.saved).not.to.be.empty;
  });
});

