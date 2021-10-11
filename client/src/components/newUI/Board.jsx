import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as boardActions from '../../actions/BoardActions';
import ExistingLists from './ExistingLists';

const Board = () => {
  const dispatch = useDispatch();
  //if current id in path is card id,
  // then we need to get the board id from the card in the state
  const boardId = useParams().id;
  const board = useSelector((state) =>
    state.boards.filter((board) => board._id === boardId)
  );

  useEffect(() => {
    dispatch(boardActions.getSpecificBoard(boardId));
  }, [dispatch, boardId]);

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
        <ExistingLists />
      </main>
    </div>
  );
};

export default Board;
