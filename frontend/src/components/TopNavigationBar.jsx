import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

//displays naviation bar with title, topics and fav icon
const TopNavigation = ({topics, isFavPhotoExist, dispatch}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} dispatch={dispatch}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} dispatch={dispatch}/>
    </div>
  )
}

export default TopNavigation;