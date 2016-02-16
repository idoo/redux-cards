import React, {Component} from 'react';
import styles from '../../css/card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.cardAction = this.cardAction.bind(this);
  }

  cardAction(event) {
    event.preventDefault();
    this.props.action();
  }

  render() {
    const {ctaText, color, logo, image, price} = this.props;

    const cardImageStyle = {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center -150%'
    };

    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}
             style={{backgroundColor: color}}>
          <img className={styles.cardHeaderLogo} src={logo}/>
        </div>

        <div className={styles.ctaContainer}>
          <a href="#"
             onClick={this.cardAction}
             className={styles.cta}>
            {ctaText}
          </a>
        </div>
        <div className={styles.cardImage}
             style={cardImageStyle}>
        </div>

        <h2 className={styles.price}>{price}</h2>

      </div>
    );
  }
}
