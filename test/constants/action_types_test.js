import chai from 'chai';
let expect = chai.expect;
import * as types from '../../js/constants/action_types';

describe('constants', () => {
  it('should create an action types', () => {
    expect(types).not.to.be.null;
  });
});
