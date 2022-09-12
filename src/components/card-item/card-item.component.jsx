import React from 'react';
import './card-item.styles.css';

class CardItem extends React.Component {
  render() {
    const roboImagesURL = (index) =>
      `https://robohash.org/${index}?set=set2&size=180x180`;

    const { index, name, email } = this.props;

    return (
      <div className="card-item">
        <img src={roboImagesURL(index)} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardItem;
