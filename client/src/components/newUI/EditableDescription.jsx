import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as cardActions from '../../actions/CardActions';

const EditableDescription = ({ description, card }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [desc, setDesc] = useState(description);

  const handleDescriptionChange = (e) => {
    setDesc(e.target.value);
  };

  const handleClick = () => {
    setEdit(true);
  }

  const handleEdit = () => {
    dispatch(cardActions.editCard({ ...card, description: desc }));
    setEdit(false);
  };

  return edit ? (
    <form className="description">
      <p>Description</p>
      <textarea className="textarea-toggle" rows="1" autoFocus value={desc} onChange={handleDescriptionChange}>
        {desc}
      </textarea>
      <div>
        <div className="button" value="Save" onClick={handleEdit}>
          Save
        </div>
        <i className="x-icon icon"></i>
      </div>
    </form>
  ) : (
    <form className="description">
      <p>Description</p>
      <span id="description-edit" className="link" onClick={handleClick}>
        Edit
      </span>
      <p className="textarea-overlay" >
        {desc}
      </p>
      <p id="description-edit-options" className="hidden">
        You have unsaved edits on this field.{' '}
        <span className="link">View edits</span> -{' '}
        <span className="link">Discard</span>
      </p>
    </form>
  );
};

export default EditableDescription;
