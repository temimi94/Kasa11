import React from "react";
import { Link } from "react-router-dom";

export default function LocationCard(props) {
  return (
    <>
      <div>
        <Link className="linklocation" to={"/locations/" + props.location.id}>
          <div
            className="card"
            style={{ backgroundImage: `url(${props.location.pictures[0]})` }} 
          >
            <h5 className="titre">{props.location.title}</h5>
          </div>
        </Link>
      </div>
    </>
  );
}
