import React, { useEffect } from 'react';
import { useRouteMatch, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import * as boardActions from '../../actions/BoardActions';

const Board = (props) => {
  const { url } = useRouteMatch();
  const boardId = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardActions.getSpecificBoard(boardId));
  }, [dispatch]);

  return (
    <>
      <header>
        <ul>
          <li id="title">{props.title}</li>
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
    </>
  );
};

export default Board;
