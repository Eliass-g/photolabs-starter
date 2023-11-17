import React from "react";

import "../styles/TopicListItem.scss";

//each individual topic along with functionality to view them
const TopicListItem = ({ id, title, dispatch }) => {
  return (
    <div
      className="topic-list__item"
      onClick={() => dispatch({ type: "SET_TOPIC_ID", value: id })}
    >
      {title}
    </div>
  );
};

export default TopicListItem;
