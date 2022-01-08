import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
			<div className="container-fluid py-5 mx-auto">
				<h1 className="display-1">A Warm Welcome!</h1>
				<p className="col-md-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Alias fuga vel eaque repellendus id exercitationem suscipit
					voluptas. Distinctio reprehenderit aliquid minima, at
					mollitia, accusamus ratione repellat autem, minus inventore
					atque.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Example button
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
