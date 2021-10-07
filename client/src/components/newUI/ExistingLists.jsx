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

export default ExistingLists;
