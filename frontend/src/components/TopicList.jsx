import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {
  const topiclist = topics.map((data) => {
    return (
      <TopicListItem key={data.id} {...data}/>
    )
  })
  return (
    <div className="top-nav-bar__topic-list">
      {topiclist}
    </div>
  );
};

export default TopicList;
