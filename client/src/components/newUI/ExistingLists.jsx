import { useSelector } from 'react-redux';
import List from './List';
import AddNewList from './AddNewList';

const ExistingLists = () => {
  // grab all the lists from state
  const lists = useSelector((state) => state.lists);
  console.log('lists in existing lists:', lists);

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
      </div>
      <AddNewList />
    </div>
  );
};

/*
  listId: {
    type: Schema.Types.ObjectId,
    ref: 'List',
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
  }, 
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
