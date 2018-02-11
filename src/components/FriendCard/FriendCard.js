import React from "react";
import "./FriendCard.css";

// Function to handle card click event
const FriendCard = props => (
    <div
        className="card"
        value={props.id}
        onClick={() => props.handleClick(props.id)}>

        <div className="img-container">

            <img alt={props.name} src={props.image} />
            
        </div>
    </div>
);

export default FriendCard;