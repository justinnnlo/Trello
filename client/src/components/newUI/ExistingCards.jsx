import { useSelector } from 'react-redux';
import Card from './Card';

const ExistingCards = ({ listId }) => {
  const cards = useSelector((state) => {
    return state.cards.filter((card) => card.listId === listId);
  });

  return (
    <div id="cards-container" data-id="list-1-cards">
      <div className="card-background">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

/*
{cards.map((card) => (
  <Card key={card._id} card={card} />
))}
*/

export default ExistingCards;
