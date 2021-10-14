import { useState } from 'react';
import { dueClass, formatDueDate } from '../../lib/dateUtil';
import DueDatePopover from '../ui/DueDatePopover';

const EditableDate = ({ card }) => {
  const [edit, setEdit] = useState(false);

  const toggleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  let formattedDueDate, pastDue;

  if (card.dueDate) {
    formattedDueDate = formatDueDate(card.dueDate);
    pastDue = dueClass(card);
  }

  return edit ? (
    <DueDatePopover toggleEdit={toggleEdit} card={card} />
  ) : (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div
        id="dueDateDisplay"
        className="overdue completed"
        onClick={toggleEdit}
      >
        <input
          id="dueDateCheckbox"
          type="checkbox"
          className="checkbox"
          checked=""
        />
        {formattedDueDate ? formattedDueDate : 'none'}
        <span>{pastDue ? ` (${pastDue})` : ''}</span>
      </div>
    </li>
  );
};

export default EditableDate;
