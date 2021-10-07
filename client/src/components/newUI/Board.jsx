import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as boardActions from '../../actions/BoardActions';
import ExistingLists from './ExistingLists';

const Board = () => {
  // const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const boardId = useParams().id;
  const board = useSelector((state) => state.boards[0]);

  useEffect(() => {
    dispatch(boardActions.getSpecificBoard(boardId));
  }, [dispatch]);

  return (
    <div>
      <header>
        <ul>
          <li id="title">{board.title}</li>
          <li className="star-icon icon"></li>
          <li className="private private-icon icon">Private</li>
        </ul>
        <div className="menu">
          <i className="more-icon sm-icon"></i>Show Menu
        </div>
        <div className="subscribed">
          <i className="sub-icon sm-icon"></i>Subscribed
        </div>
      </header>
      <main>
        <ExistingLists boardId={boardId} />
      </main>
    </div>
  );
};

export default Board;
