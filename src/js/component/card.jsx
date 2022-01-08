import React from "react";
import propTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card" style="width: 18rem;">
            <img src={props.Imageurl} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.Title}</h5>
                    <p className="card-text">{props.Text}</p>
                    <a href={props.ButtonURL} className="btn btn-primary">{props.ButtonText}</a>
                </div>
        </div>
    );
}


Card.propTypes = {
    Title: propTypes.string,
    Text: propTypes.string,
    Imageurl: propTypes.string,
    ButtonURL: propTypes.string,
    ButtonText: propTypes.string,
}

export default Card;
