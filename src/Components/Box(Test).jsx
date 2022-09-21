import React from "react";
import '../styles/Box.css';

function Box (props) {

    return (
        <div className="box-container">
            <div className="img-container">
                <img src={require(`../Images/photo-${props.image}.png`)} alt={props.alt} />
                <p>{props.role}</p>
            </div>
            <h2>{props.name}</h2> {/* I can't use this because have a problem with i use it and design in css
            for this reason i think is better do this just in the team section */}
        </div>
    )
}

export default Box;