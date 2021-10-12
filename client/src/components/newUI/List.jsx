import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editList } from '../../actions/ListActions';
import ExistingCards from './ExistingCards';
import { createCard } from '../../actions/CardActions';

const List = ({ list }) => {
  const dispatch = useDispatch();
  const { _id, boardId } = list;
  const [title, setTitle] = useState(list.title);
  const [edit, setEdit] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const [cardTitle, setCardTitle] = useState('');

  // console.log(_id);

  const handleClick = () => {
    setEdit(true);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleEdit = () => {
    if (list.title === title) {
      setEdit(false);
      return;
    }

    dispatch(
      editList({ ...list, title }, () => {
        setEdit(false);
      })
    );
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  const handleBlur = () => {
    handleEdit();
  };

  const handleAddCardClick = () => {
    setAddCard(true);
  };

  const handleAddCardTextAreaChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleAddCardSubmit = (e) => {
    e.preventDefault();
    dispatch(createCard({ title: cardTitle, listId: _id, boardId }));
    setCardTitle('');
    setAddCard(false);
  };

  return (
    <div className={`list-wrapper ${addCard ? 'add-dropdown-active' : ''}`}>
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div onClick={handleClick}>
            {edit ? (
              <input
                type="text"
                autoFocus
                value={title}
                onClick={handleEdit}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyUp={handleKeyUp}
                className="list-title"
              />
            ) : (
              <p className="list-title">{title}</p>
            )}
          </div>
          <ExistingCards listId={_id} />
          <div
            className={`add-dropdown ${
              addCard ? 'add-bottom active-card' : 'add-top'
            }`}
          >
            <div className="card">
              <div className="card-info"></div>
              <textarea
                name="add-card"
                value={cardTitle}
                onChange={handleAddCardTextAreaChange}
              ></textarea>
              <div className="members"></div>
            </div>
            <a className="button" type="submit" onClick={handleAddCardSubmit}>
              Add
            </a>
            <i className="x-icon icon"></i>
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div
            className="add-card-toggle"
            data-position="bottom"
            onClick={handleAddCardClick}
          >
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
