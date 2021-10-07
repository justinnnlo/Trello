import { useState } from 'react';

const AddNewList = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div id="new-list" className={`new-list ${selected ? 'selected' : ''}`}>
      <span onClick={() => setSelected(true)}>Add a list...</span>
      <input type="text" placeholder="Add a list..." />
      <div>
        <input type="submit" className="button" value="Save" />
        <i className="x-icon icon" onClick={() => setSelected(false)}></i>
      </div>
    </div>
  );
};

export default AddNewList;
