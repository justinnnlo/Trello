import { useState } from 'react';
import ExistingCards from './ExistingCards';

const List = ({ list }) => {
  const [title, setTitle] = useState(list.title);

  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="list-title"
            />
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
