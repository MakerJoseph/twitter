import React from 'react';
//import './App.css';


function Tweet(props){
    return (
      <div className="tweet">
        <i className="fa fa-user fa-3x"></i>
        <h3>{props.name}</h3>
        <p>{props.message}</p>
        <h3>
          <i className="fa fa-thumbs-up"></i> Likes
        </h3>
      </div>
    );
}

export default Tweet;

