import { useState } from 'react';
import ExistingCards from './ExistingCards';

const List = ({ list }) => {
  const [title, setTitle] = useState(list.title);
  const [edit, setEdit] = useState(false);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      //edit list title with current value of title
      setEdit(false)
    }
  }

  const handleBlur = (e) => {

    setEdit(false)
  }
  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list" onClick={(e) => setEdit(true)}>
          <a className="more-icon sm-icon" href=""></a>
          <div>
            {edit ? <input
              type="text"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={handleBlur}
              onKeyUp={handleKeyUp}
              className="list-title"
            /> : <p>{title}</p>}
          </div>
          <ExistingCards listId={list._id} />
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options"></div>
            <span>...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
<div className="add-card-toggle" data-position="bottom">
  Add a card...
</div>
*/
export default List;
