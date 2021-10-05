import React from 'react';
import { Link } from 'react-router-dom';
import { getSpecificBoard } from '../../actions/BoardActions';

const BoardTile = (props) => {
  return (
    <li className="board-tile">
      <Link to={`/api/boards/${props.id}`}>
        <span className="board-title">{props.title}</span>
      </Link>
    </li>
  );
};

export default BoardTile;
