import React from "react";

import "../styles/TopicListItem.scss";

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
