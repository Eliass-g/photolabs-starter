import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, dispatch}) => {
  const topiclist = topics.map((data) => {
    return (
      <TopicListItem key={data.id} id={data.id} title={data.title} dispatch={dispatch}/>
    )
  })
  return (
    <div className="top-nav-bar__topic-list">
      {topiclist}
    </div>
  );
};

export default TopicList;
