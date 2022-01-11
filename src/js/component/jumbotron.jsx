import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div
				style={{ borderRadius: "1.5rem" }}
				className="container my-4 w-75 shadow">
				<div
					className="container-fluid d-flex flex-column justify-content-evenly text-center py-5 mx-auto px-auto bg-light"
					style={{ borderRadius: "1.5rem" }}>
					<h1 className="display-1">A Warm Welcome!</h1>
					<p className="w-75 mx-auto">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Alias fuga vel eaque repellendus id exercitationem
						suscipit voluptas. Distinctio reprehenderit aliquid
						minima, at mollitia, accusamus ratione repellat autem,
						minus inventore atque.
					</p>
					<button
						className="btn btn-primary btn-lg w-50 mx-auto"
						type="button"
						style={{ borderRadius: "1.5rem" }}>
						Example button
					</button>
				</div>
			</div>
			<div id="background-video">
				<video
					playsinline="playsinline"
					autoplay="autoplay"
					muted="muted"
					loop="loop"
					src="https://storage.coverr.co/videos/ATJ4XD4KymHlH00eg01724qTyOSI5p9XxL?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjM4NjkyOTcxfQ.C2HelYFgZCY6JOZlyG1q7poefCWjI7XlqebKHSgSADg"
					type="video/mp4"></video>
			</div>
		</div>
	);
};

export default Jumbotron;
