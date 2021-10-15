import { useState } from 'react';

const Label = ({ color, colorblindable, card }) => {
  const isSelected = (label) => {
    const colorsOnly = card.labels.map((color) => color.split(' ')[0]);
    return colorsOnly.includes(label);
  };
  const [selected, setSelected] = useState(isSelected(color));

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <li onClick={toggleSelected}>
      <div
        className={`${color} ${colorblindable ? 'colorblindable' : ''}`}
        data-id="1"
      >
        <i className={selected ? 'check-icon sm-icon' : ''}></i>
      </div>
      <div className={`label-background ${color}`}></div>
      <div className="label-background-overlay"></div>
      <i className="edit-icon icon not-implemented"></i>
    </li>
  );
};

export default Label;
