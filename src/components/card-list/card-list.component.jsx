import React from 'react';
import './card-list.styles.css';
import CardItem from '../card-item/card-item.component';

class CardList extends React.Component {
  render() {
    console.log('CardList renders');
    const { filteredMonsters } = this.props;

    return (
      <>
        <div className="card-list">
          {filteredMonsters.map((monster, index) => {
            const { name, email } = monster;
            return <CardItem index={index} name={name} email={email} />;
          })}
        </div>
      </>
    );
  }
}

export default CardList;
