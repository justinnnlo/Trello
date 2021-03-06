import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as boardActions from '../../actions/BoardActions';
import ExistingLists from './ExistingLists';

const Board = () => {
  const dispatch = useDispatch();
  const idType = useParams()[0];
  const urlId = useParams().id;
  let boardId;
  let card;
  const cards = useSelector((state) => state.cards);

  if (idType === 'boards') {
    
    boardId = urlId;
  } else {
    card = cards.find((c) => c._id === urlId);
    if (card) {
      boardId = card.boardId;
    }
  }

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
