//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import Header from "./component/header.jsx";
import Home from "./component/home.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Footer from "./component/footer.jsx";
import WrapperGallery from "./component/wrappergallery.jsx";
import Card from "./component/card.jsx";

//render your react application
ReactDOM.render(
	<>
		<Header />
		<Jumbotron />
		<WrapperGallery />
		<Footer />
	</>,
	document.querySelector("#app")
);

export default Home;
