import React from 'react';
import { Avatar } from 'rsuite';
import './index.css';

const GridCardView = (props) => {
  const { item: { id, title } } = props;
  return (
    <div className="caroCard">
      <div className="container">

        <div className="titleCard">{title}</div>
        <div className="avatarCard">
            <Avatar circle>{id.charAt(0).toUpperCase()}</Avatar>
        </div>
        <div className="idCard">{id}</div>
      </div>
    </div>
  );
};

export default GridCardView;
