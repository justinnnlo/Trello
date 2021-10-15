import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LABELS } from '../../constants/Labels';
import * as cardActions from '../../actions/CardActions';
import Label from '../newUI/Label';

const LabelsPopover = () => {
  const dispatch = useDispatch();
  const cardId = useParams().id;
  const card = useSelector((state) =>
    state.cards.find((card) => card._id === cardId)
  );

  const [selectedLabels, setSelectedLabels] = useState(card ? card.labels : []);
  const [colorblindable, setColorblindable] = useState(false);

  useEffect(() => {
    dispatch(cardActions.getCard(cardId));
  }, [dispatch, cardId]);

  if (!card) return null;

  const handleSelect = ({ target }) => {
    const selected = target.classList.value;
    let newSelectedLabels;
    if (selectedLabels.includes(selected)) {
      newSelectedLabels = selectedLabels.filter((label) => label !== selected);
    } else {
      newSelectedLabels = selectedLabels.concat(selected);
    }
    setSelectedLabels(newSelectedLabels);
    dispatch(cardActions.editCard({ ...card, labels: newSelectedLabels }));
  };

  const toggleColorblind = () => {
    setColorblindable(!colorblindable);
  };

  return (
    <div className="popover labels">
      <div id="add-options-labels-dropdown">
        <header>
          <span>Labels</span>
          <Link to={`/cards/${cardId}`} className="icon-sm icon-close"></Link>
        </header>
        <div className="content">
          <input
            className="dropdown-input"
            placeholder="Search labels..."
            type="text"
          />
          <div className="labels-search-results">
            <ul className="label-list" onClick={handleSelect}>
              {LABELS.map((label) => {
                return (
                  <Label
                    key={label}
                    color={label}
                    colorblindable={colorblindable}
                    card={card}
                  />
                );
              })}
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Create a new label</li>
              <hr />
              <li className="toggleColorblind" onClick={toggleColorblind}>
                {colorblindable ? 'Disable' : 'Enable'} color blind friendly
                mode.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelsPopover;
