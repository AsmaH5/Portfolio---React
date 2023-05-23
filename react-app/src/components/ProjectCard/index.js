import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>GitHub Repo:</strong> {props.repo}
          </li>
          <li>
            <strong>Deployed Link:</strong> {props.link}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
