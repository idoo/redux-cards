import 'ignore-styles';
import chai from 'chai';
let expect = chai.expect;

import {Cards} from '../../js/containers/cards_container';
import React from 'react';
import TestUtils from 'react-addons-test-utils'

function setup(props) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Cards {...props} />);
  const output = renderer.getRenderOutput();
  return {props, output, renderer};
}

describe('cards container', () => {
  describe('should render correctly without data', () => {
    const { output } = setup({});
    const [ results, saved ] = output.props.children;
    expect(results.type).to.eql('div');
    expect(saved.type).to.eql('div');

    const [resTitle, resCards] = results.props.children;
    expect(resTitle.type).to.eql('h2');
    expect(resCards.type).to.eql('p');
    expect(resCards.props.children).to.eql('Empty List');

    const [savedTitle, savedCards] = results.props.children;
    expect(savedTitle.type).to.eql('h2');
    expect(savedCards.type).to.eql('p');
    expect(savedCards.props.children).to.eql('Empty List');
  });

  it('should render correctly with data', () => {
    const card = {
      id: 1,
      agency: {logo: '', brandingColors: {primary: ''}},
      mainImage: '',
      price: ''
    };

    const { output } = setup({results: [card], saved: [card]});
    let [ results, saved ] = output.props.children;

    expect(results.props.children[1]).not.to.null;
    expect(saved.props.children[1]).not.to.null;
  })
});
