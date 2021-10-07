const List = ({ list }) => {
  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <p className="list-title">{list.title}</p>
          </div>
          <div className="add-dropdown add-top">
            <div className="card"></div>
            <a className="button">Add</a>
            <i className="x-icon icon"></i>
            <div className="add-options"></div>
            <span>...</span>
          </div>
        </div>
        <div className="add-card-toggle" data-position="bottom">
          Add a card...
        </div>
      </div>
    </div>
  );
};

/*
<div className="add-card-toggle" data-position="bottom">
  Add a card...
</div>
*/
export default List;