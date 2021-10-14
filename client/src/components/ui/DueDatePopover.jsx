import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Pikaday from 'pikaday';
import moment from 'moment';
import * as cardActions from '../../actions/CardActions';
import * as dt from '../../constants/DateTime';

const DueDatePopover = ({ card, toggleEdit }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(
    card.dueDate
      ? moment(card.dueDate).format(dt.DATE_STRING)
      : moment().add(1, 'day').format(dt.DATE_STRING)
  );
  const [time, setTime] = useState(
    card.dueDate
      ? moment(card.dueDate).format(dt.TIME_STRING)
      : dt.DEFAULT_TIME_STRING
  );

  useEffect(() => {
    const picker = new Pikaday({
      field: document.querySelector('.datepicker-select-date input'),
      bound: false,
      container: document.getElementById('calendar-widget'),
      firstDay: 1,
      yearRange: 10,
      defaultDate: card.dueDate
        ? moment(card.dueDate).toDate()
        : moment().add(1, 'day').toDate(),
      setDefaultDate: true,
      format: dt.DATE_STRING,
      i18n: {
        previousMonth: 'Prev',
        nextMonth: 'Next',
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        weekdays: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      },
      toString(date, format) {
        return moment(date).format(format);
      },
    });
    picker.show();
    console.log(picker);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = e.target.querySelector('.datepicker-select-date input').value;
    const time = e.target.querySelector('.datepicker-select-time input').value;
    const dateTime = `${date} ${time}`;
    const formattedDate = moment(
      dateTime,
      `${dt.DATE_STRING} ${dt.TIME_STRING}`
    ).toISOString();
    dispatch(cardActions.editCard({ ...card, dueDate: formattedDate }));
    toggleEdit(e);
  };

  const handleReset = (e) => {
    dispatch(cardActions.editCard({ ...card, dueDate: null }));
    toggleEdit(e);
  };

  const handleDateChange = ({ target }) => {
    const newDate = target.value;
    setDate(target.value);
  };

  const handleTimeChange = ({ target }) => {
    const newTime = target.value;
    console.log(date);
    setTime(newTime);
  };

  return (
    <div className="popover due-date">
      <header>
        <span>Change due date</span>
        <a href="#" className="icon-sm icon-close" onClick={toggleEdit}></a>
      </header>
      <div className="content">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="datepicker-select">
            <div className="datepicker-select-date">
              <label>
                Date
                <input
                  type="text"
                  placeholder="Enter date"
                  autoFocus
                  value={date}
                  onChange={handleDateChange}
                />
              </label>
            </div>
            <div className="datepicker-select-time">
              <label>
                Time
                <input
                  type="text"
                  placeholder="Enter time"
                  value={time}
                  onChange={handleTimeChange}
                />
              </label>
            </div>
            <div id="calendar-widget"></div>
          </div>
          <button className="button" type="submit">
            Save
          </button>
          <button className="button red-button" type="reset">
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};

export default DueDatePopover;
