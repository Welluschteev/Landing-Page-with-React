import React from "react";
import propTypes from "prop-types";
import { render } from "react-dom";

const Card = (props) => {
	Card.propTypes = {
		Title: propTypes.string,
		Text: propTypes.string,
		ImageURL: propTypes.string,
		ButtonURL: propTypes.string,
		ButtonText: propTypes.string,
	};

	return (
		<div
			className="card shadow"
			style={{ maxWidth: "vh-20", borderRadius: "1.5rem" }}>
			<img
				src={props.ImageURL}
				className="card-img-top border border-5 border-white shadow"
				alt="..."
				style={{ maxWidth: "vh50", borderRadius: "1.5rem" }}></img>
			<div className="card-body text-center container-fluid">
				<h3 className="card-title text-justify">{props.Title}</h3>
				<div className="text vh-80 text-start">
					<p className="card-text m-1 border-bottom pb-4">
						{props.Text}
					</p>
				</div>
			</div>
			<div
				className="cardbtm text-center"
				style={{ borderRadius: "1.5rem" }}>
				<p
					href={props.ButtonURL}
					className="btn btn-primary mx-auto"
					style={{ borderRadius: "1.5rem" }}>
					{props.ButtonText}
				</p>
			</div>
		</div>
	);
};
export default Card;
