import { useSelector } from 'react-redux';
import List from './List';

const ExistingLists = () => {
  const lists = useSelector((state) => state.lists);
  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

/*
<div id="new-list" className="new-list">
  <span>Add a list...</span>
  <input type="text" placeholder="Add a list..." />
  <div>
    <input type="submit" className="button" value="Save" />
    <i className="x-icon icon"></i>
  </div>
</div>
*/

export default ExistingLists;
