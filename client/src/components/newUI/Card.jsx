const Card = ({ title }) => {
  console.log(`what is this props: ${title}`);
  return (
    <div className="card ">
      <i className="edit-toggle edit-icon sm-icon"></i>
      <div className="card-info">
        <div className="card-label green colorblindable"></div>
        <div className="card-label yellow colorblindable"></div>
        <div className="card-label red colorblindable"></div>
        <div className="card-label orange colorblindable"></div>
        <div className="card-label blue colorblindable"></div>
        <div className="card-label purple colorblindable"></div>
        <p>{title}</p>
      </div>
      <div className="card-icons">
        <i className="clock-icon sm-icon overdue-recent completed">Aug 4</i>
        <i className="description-icon sm-icon"></i>
        <i className="comment-icon sm-icon"></i>
      </div>
    </div>
  );
};

export default Card;
