import {isEmpty} from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CardsActions from '../actions/cards_actions';
import Card from '../components/card_component';
import {CARD_ADD, CARD_REMOVE} from '../constants/action_types';
import styles from '../../css/app.css';

export class Cards extends Component {
  renderCardsList(actions) {
    if (!this.props.results || isEmpty(this.props.results)) {
      return <p className={styles.emptyList}>Empty List</p>;
    }

    return this.props.results.map((card) => {
      return (
        <Card key={card.id}
              logo={card.agency.logo}
              color={card.agency.brandingColors.primary}
              image={card.mainImage}
              price={card.price}
              ctaText="Add Property"
              action={() => actions.cardAction(card, CARD_ADD)}
        />
      )
    });
  }

  renderSavedList(actions) {
    if (!this.props.saved || isEmpty(this.props.saved)) {
      return <p className={styles.emptyList}>Empty List</p>;
    }

    return this.props.saved.map((card) => {
      return (
        <Card key={card.id}
              logo={card.agency.logo}
              color={card.agency.brandingColors.primary}
              image={card.mainImage}
              price={card.price}
              ctaText="Remove Property"
              action={() => actions.cardAction(card, CARD_REMOVE)}
        />
      )
    });
  }

  render() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(CardsActions, dispatch);
    return (
      <div className={styles.flexboxContainer}>
        <div className={styles.flexboxItem}>
          <h2 className={styles.title}>Results</h2>
          {this.renderCardsList(actions)}
        </div>
        <div className={styles.flexboxItem}>
          <h2 className={styles.title}>Saved Properties</h2>
          {this.renderSavedList(actions)}
        </div>
      </div>
    );
  }
}

export default connect((state) => state.cards)(Cards)
