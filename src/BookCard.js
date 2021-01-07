import React from "react";


const BookCard = (props) => {
    return(
      <div className="card-container">
      <img scr={props.image} alt=""/>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.publishedD}</p>
      </div>
    )
}

export default BookCard;