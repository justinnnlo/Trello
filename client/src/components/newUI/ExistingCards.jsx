import { useSelector } from 'react-redux';
import Card from './Card';

const ExistingCards = ({ listId }) => {
  const listCards = useSelector((state) => {
    // console.log(state.cards);
    return state.cards.filter((card) => card.listId === listId);
  });

  return (
    <div id="cards-container">
      <div className="card-background">
        {listCards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ExistingCards;
