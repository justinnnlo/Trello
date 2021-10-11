import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editList } from '../../actions/ListActions';
import ExistingCards from './ExistingCards';

const List = ({ list }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(list.title);
  const [edit, setEdit] = useState(false);

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

  return (
    <div className="list-wrapper">
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
          <ExistingCards listId={list._id} />
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options"></div>
            <span>...</span>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
