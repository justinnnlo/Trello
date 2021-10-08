import { useSelector } from 'react-redux';
import Card from './Card';

const ExistingCards = ({ listId }) => {
  const listCards = useSelector((state) => {
    return state.cards.filter((card) => card.listId === listId);
  });

  return (
    <div id="cards-container" data-id="list-1-cards">
      <div className="card-background">
        {listCards.map((card) => (
          <Card key={card._id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ExistingCards;
