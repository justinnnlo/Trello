import React from 'react';
const CreateBoard = () => {
  return (
    <div className="popover new-board">
      <header>
        <span>Create Board</span>
        <a href="#" className="icon-sm icon-close"></a>
      </header>
      <div className="content">
        <form>
          <dl>
            <dt>Title</dt>
            <dd>
              <input type="text" placeholder='Like "Publishing Calendar"...' />
            </dd>
          </dl>
          <button className="button" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBoard;
