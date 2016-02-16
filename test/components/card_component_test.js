import 'ignore-styles';

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Card from '../../js/components/card_component';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

let expect = chai.expect;
chai.use(sinonChai);

function setup() {
  const props = {ctaText: 'foo', action: sinon.spy()};

  const renderer = TestUtils.createRenderer();
  renderer.render(<Card {...props} />);
  const output = renderer.getRenderOutput();
  return {props, output, renderer};
}

describe('card component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    const [ header, ctaContainer, image, price ] = output.props.children;
    expect(output.type).to.equal('div');

    expect(header.type).to.equal('div');
    expect(ctaContainer.type).to.equal('div');

    expect(image.type).to.equal('div');
    expect(price.type).to.equal('h2');
  });

  it('should render cta button', () => {
    const { output } = setup();
    const ctaContainer = output.props.children[1];
    const ctaButton = ctaContainer.props.children;
    expect(ctaButton.type).to.equal('a');
    expect(ctaButton.props.children).to.equal('foo');
  });

  it('should call action on click to cta button', () => {
    const { output, props } = setup();
    const ctaContainer = output.props.children[1];
    const cta = ctaContainer.props.children;

    expect(cta.type).to.equal('a');
    expect(props.action.called).to.be.false;

    props.action();
    expect(props.action.called).to.be.true;
  })
});
