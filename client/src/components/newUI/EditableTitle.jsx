import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as cardActions from '../../actions/CardActions';

const EditableTitle = ({ card }) => {
  const dispatch = useDispatch();
  const [cardTitle, setCardTitle] = useState(card.title);

  const handleTitleChange = ({ target }) => {
    setCardTitle(target.value);
  };

  const handleTitleSubmit = () => {
    dispatch(cardActions.editCard({ ...card, title: cardTitle }));
  };

  return (
    <textarea
      className="list-title"
      style={{ height: '45px' }}
      value={cardTitle}
      onChange={handleTitleChange}
      onBlur={handleTitleSubmit}
    >
      {cardTitle}
    </textarea>
  );
};

export default EditableTitle;
