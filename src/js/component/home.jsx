//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "/workspace/react-hello/src/styles/index.css";

//import your own components

import Header from "/workspace/react-hello/src/js/component/header.jsx";
import Jumbotron from "/workspace/react-hello/src/js/component/jumbotron.jsx";
import Footer from "/workspace/react-hello/src/js/component/footer.jsx";
import Card from "/workspace/react-hello/src/js/component/card.jsx";
import WrapperGallery from "/workspace/react-hello/src/js/component/wrappergallery.jsx";

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
