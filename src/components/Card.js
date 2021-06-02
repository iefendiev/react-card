import React from 'react';
import './Card.css';
import heartFill from '../assets/heart-fill.png';
import heartOutline from '../assets/heart-outline.png';

const Card = ({ content }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-leftSide">
          <div className="card-avatar">
            <p>İ</p>
          </div>
        </div>
        <div className="card-caption">
          <h1>{content.title}</h1>
          <h2>{content.date}</h2>
        </div>
      </div>
      <img className="card-image" src={content.image} />
      <h4 className="card-description">{content.desc}</h4>
      <div className="card-footer">
        {content.liked ? <img src={heartFill} /> : <img src={heartOutline} />}
        <h3>
          <span className="count">{content.likeCount}</span> kişi bunu beğendi.
        </h3>
      </div>
    </div>
  );
};

export default Card;
