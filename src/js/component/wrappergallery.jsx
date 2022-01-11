import React from "react";
import Card from "/workspace/react-hello/src/js/component/card.jsx";

function WrapperGallery() {
	return (
		<div className="container mx-auto">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mx-auto">
				<div className="col">
					<Card
						Title="Test 1"
						ImageURL="https://unsplash.it/500?random=1"
						ButtonText="Test Link 1"
						ButtonURL="#"
						Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex bibendum, eleifend dui quis, fringilla risus. Integer tempus mollis odio quis scelerisque. Aliquam arcu augue, facilisis sit amet ultrices id, pellentesque vel magna. "
					/>
				</div>
				<div className="col">
					<Card
						Title="Test 2"
						ImageURL="https://unsplash.it/500?random=2"
						ButtonText="Test Link 2"
						ButtonURL="#"
						Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex bibendum, eleifend dui quis, fringilla risus. Integer tempus mollis odio quis scelerisque. Aliquam arcu augue, facilisis sit amet ultrices id, pellentesque vel magna. "
					/>
				</div>
				<div className="col">
					<Card
						Title="Test 3"
						ImageURL="https://unsplash.it/500?random=3"
						ButtonText="Test Link 3"
						ButtonURL="#"
						Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex bibendum, eleifend dui quis, fringilla risus. Integer tempus mollis odio quis scelerisque. Aliquam arcu augue, facilisis sit amet ultrices id, pellentesque vel magna. "
					/>
				</div>
				<div className="col">
					<Card
						Title="Test 4"
						ImageURL="https://unsplash.it/500?random=4"
						ButtonText="Test Link 4"
						ButtonURL="#"
						Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex bibendum, eleifend dui quis, fringilla risus. Integer tempus mollis odio quis scelerisque. Aliquam arcu augue, facilisis sit amet ultrices id, pellentesque vel magna. "
					/>
				</div>
				<div className="col">
					<Card
						Title="Test 5"
						ImageURL="https://unsplash.it/500?random=5"
						ButtonText="Test Link 5"
						ButtonURL="#"
						Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex bibendum, eleifend dui quis, fringilla risus. Integer tempus mollis odio quis scelerisque. Aliquam arcu augue, facilisis sit amet ultrices id, pellentesque vel magna. "
					/>
				</div>
				<div className="col">
					<Card
						Title="Test 6"
						ImageURL="https://unsplash.it/500?random=6"
						ButtonText="Test Link 6"
						ButtonURL="#"
						Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex bibendum, eleifend dui quis, fringilla risus. Integer tempus mollis odio quis scelerisque. Aliquam arcu augue, facilisis sit amet ultrices id, pellentesque vel magna. "
					/>
				</div>
				<div className="col">
					<Card
						Title="Test 7"
						ImageURL="https://unsplash.it/500?random=7"
						ButtonText="Test Link 7"
						ButtonURL="#"
						Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex bibendum, eleifend dui quis, fringilla risus. Integer tempus mollis odio quis scelerisque. Aliquam arcu augue, facilisis sit amet ultrices id, pellentesque vel magna. "
					/>
				</div>
				<div className="col">
					<Card
						Title="Test 8"
						ImageURL="https://unsplash.it/500?random=8"
						ButtonText="Test Link 8"
						ButtonURL="#"
						Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex bibendum, eleifend dui quis, fringilla risus. Integer tempus mollis odio quis scelerisque. Aliquam arcu augue, facilisis sit amet ultrices id, pellentesque vel magna. "
					/>
				</div>
				<div className="col">
					<Card
						Title="Test 9"
						ImageURL="https://unsplash.it/500?random=9"
						ButtonText="Test Link 9"
						ButtonURL="#"
						Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex bibendum, eleifend dui quis, fringilla risus. Integer tempus mollis odio quis scelerisque. Aliquam arcu augue, facilisis sit amet ultrices id, pellentesque vel magna. "
					/>
				</div>
			</div>
		</div>
	);
}

export default WrapperGallery;
