import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";
import Card from "./component/card.jsx"

const WrapperGallery = () => {

	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				<div className="col">
					<Card
						title="Test 1"
						imageUrl="https://unsplash.it/500"
						buttonLabel="Test Link 1"
						buttonUrl="#"
						description="Integer ipsum odio, accumsan nec ullamcorper sed, ullamcorper eu lectus. Pellentesque laoreet finibus dui ac vestibulum. Praesent dictum enim non placerat malesuada. Maecenas convallis nibh nec tincidunt congue. Phasellus in est quam. Phasellus condimentum felis a molestie convallis. Duis ut eleifend nisi, ut venenatis lorem. Sed in eros mi. Integer vestibulum purus felis, et venenatis sem faucibus eu. Vivamus eget ante ac neque gravida vulputate. Proin auctor orci in lacus vestibulum faucibus. Aliquam tincidunt placerat ligula malesuada molestie. Praesent vehicula dolor metus, vel cursus enim laoreet egestas. Etiam eu pulvinar dolor, vitae condimentum ipsum. Aenean ut dui sed felis porta aliquam id id sapien."
					/>
				</div>
				<div className="col">
					<Card
						title="Test 2"
						imageUrl="https://unsplash.it/500"
						buttonLabel="Test Link 2"
						buttonUrl="#"
						description="Integer ipsum odio, accumsan nec ullamcorper sed, ullamcorper eu lectus. Pellentesque laoreet finibus dui ac vestibulum. Praesent dictum enim non placerat malesuada. Maecenas convallis nibh nec tincidunt congue. Phasellus in est quam. Phasellus condimentum felis a molestie convallis. Duis ut eleifend nisi, ut venenatis lorem. Sed in eros mi. Integer vestibulum purus felis, et venenatis sem faucibus eu. Vivamus eget ante ac neque gravida vulputate. Proin auctor orci in lacus vestibulum faucibus. Aliquam tincidunt placerat ligula malesuada molestie. Praesent vehicula dolor metus, vel cursus enim laoreet egestas. Etiam eu pulvinar dolor, vitae condimentum ipsum. Aenean ut dui sed felis porta aliquam id id sapien."
					/>
				</div>
				<div className="col">
					<Card
						title="Test 3"
						imageUrl="https://unsplash.it/500"
						buttonLabel="Test Link 3"
						buttonUrl="#"
						description="Integer ipsum odio, accumsan nec ullamcorper sed, ullamcorper eu lectus. Pellentesque laoreet finibus dui ac vestibulum. Praesent dictum enim non placerat malesuada. Maecenas convallis nibh nec tincidunt congue. Phasellus in est quam. Phasellus condimentum felis a molestie convallis. Duis ut eleifend nisi, ut venenatis lorem. Sed in eros mi. Integer vestibulum purus felis, et venenatis sem faucibus eu. Vivamus eget ante ac neque gravida vulputate. Proin auctor orci in lacus vestibulum faucibus. Aliquam tincidunt placerat ligula malesuada molestie. Praesent vehicula dolor metus, vel cursus enim laoreet egestas. Etiam eu pulvinar dolor, vitae condimentum ipsum. Aenean ut dui sed felis porta aliquam id id sapien."
					/>
				</div>
				<div className="col">
					<Card
						title="Test 4"
						imageUrl="https://unsplash.it/500"
						buttonLabel="Test Link 4"
						buttonUrl="#"
						description="Integer ipsum odio, accumsan nec ullamcorper sed, ullamcorper eu lectus. Pellentesque laoreet finibus dui ac vestibulum. Praesent dictum enim non placerat malesuada. Maecenas convallis nibh nec tincidunt congue. Phasellus in est quam. Phasellus condimentum felis a molestie convallis. Duis ut eleifend nisi, ut venenatis lorem. Sed in eros mi. Integer vestibulum purus felis, et venenatis sem faucibus eu. Vivamus eget ante ac neque gravida vulputate. Proin auctor orci in lacus vestibulum faucibus. Aliquam tincidunt placerat ligula malesuada molestie. Praesent vehicula dolor metus, vel cursus enim laoreet egestas. Etiam eu pulvinar dolor, vitae condimentum ipsum. Aenean ut dui sed felis porta aliquam id id sapien."
					/>
				</div>
				<div className="col">
					<Card
						title="Test 5"
						imageUrl="https://unsplash.it/500"
						buttonLabel="Test Link 5"
						buttonUrl="#"
						description="Integer ipsum odio, accumsan nec ullamcorper sed, ullamcorper eu lectus. Pellentesque laoreet finibus dui ac vestibulum. Praesent dictum enim non placerat malesuada. Maecenas convallis nibh nec tincidunt congue. Phasellus in est quam. Phasellus condimentum felis a molestie convallis. Duis ut eleifend nisi, ut venenatis lorem. Sed in eros mi. Integer vestibulum purus felis, et venenatis sem faucibus eu. Vivamus eget ante ac neque gravida vulputate. Proin auctor orci in lacus vestibulum faucibus. Aliquam tincidunt placerat ligula malesuada molestie. Praesent vehicula dolor metus, vel cursus enim laoreet egestas. Etiam eu pulvinar dolor, vitae condimentum ipsum. Aenean ut dui sed felis porta aliquam id id sapien."
					/>
				</div>
				<div className="col">
					<Card
						title="Test 6"
						imageUrl="https://unsplash.it/500"
						buttonLabel="Test Link 6"
						buttonUrl="#"
						description="Integer ipsum odio, accumsan nec ullamcorper sed, ullamcorper eu lectus. Pellentesque laoreet finibus dui ac vestibulum. Praesent dictum enim non placerat malesuada. Maecenas convallis nibh nec tincidunt congue. Phasellus in est quam. Phasellus condimentum felis a molestie convallis. Duis ut eleifend nisi, ut venenatis lorem. Sed in eros mi. Integer vestibulum purus felis, et venenatis sem faucibus eu. Vivamus eget ante ac neque gravida vulputate. Proin auctor orci in lacus vestibulum faucibus. Aliquam tincidunt placerat ligula malesuada molestie. Praesent vehicula dolor metus, vel cursus enim laoreet egestas. Etiam eu pulvinar dolor, vitae condimentum ipsum. Aenean ut dui sed felis porta aliquam id id sapien."
					/>
				</div>
				<div className="col">
					<Card
						title="Test 7"
						imageUrl="https://unsplash.it/500"
						buttonLabel="Test Link 7"
						buttonUrl="#"
						description="Integer ipsum odio, accumsan nec ullamcorper sed, ullamcorper eu lectus. Pellentesque laoreet finibus dui ac vestibulum. Praesent dictum enim non placerat malesuada. Maecenas convallis nibh nec tincidunt congue. Phasellus in est quam. Phasellus condimentum felis a molestie convallis. Duis ut eleifend nisi, ut venenatis lorem. Sed in eros mi. Integer vestibulum purus felis, et venenatis sem faucibus eu. Vivamus eget ante ac neque gravida vulputate. Proin auctor orci in lacus vestibulum faucibus. Aliquam tincidunt placerat ligula malesuada molestie. Praesent vehicula dolor metus, vel cursus enim laoreet egestas. Etiam eu pulvinar dolor, vitae condimentum ipsum. Aenean ut dui sed felis porta aliquam id id sapien."
					/>
				</div>
				<div className="col">
					<Card
						title="Test 8"
						imageUrl="https://unsplash.it/500"
						buttonLabel="Test Link 8"
						buttonUrl="#"
						description="Integer ipsum odio, accumsan nec ullamcorper sed, ullamcorper eu lectus. Pellentesque laoreet finibus dui ac vestibulum. Praesent dictum enim non placerat malesuada. Maecenas convallis nibh nec tincidunt congue. Phasellus in est quam. Phasellus condimentum felis a molestie convallis. Duis ut eleifend nisi, ut venenatis lorem. Sed in eros mi. Integer vestibulum purus felis, et venenatis sem faucibus eu. Vivamus eget ante ac neque gravida vulputate. Proin auctor orci in lacus vestibulum faucibus. Aliquam tincidunt placerat ligula malesuada molestie. Praesent vehicula dolor metus, vel cursus enim laoreet egestas. Etiam eu pulvinar dolor, vitae condimentum ipsum. Aenean ut dui sed felis porta aliquam id id sapien."
					/>
				</div>
				<div className="col">
					<Card
						title="Test 9"
						imageUrl="https://unsplash.it/500"
						buttonLabel="Test Link 9"
						buttonUrl="#"
						description="Integer ipsum odio, accumsan nec ullamcorper sed, ullamcorper eu lectus. Pellentesque laoreet finibus dui ac vestibulum. Praesent dictum enim non placerat malesuada. Maecenas convallis nibh nec tincidunt congue. Phasellus in est quam. Phasellus condimentum felis a molestie convallis. Duis ut eleifend nisi, ut venenatis lorem. Sed in eros mi. Integer vestibulum purus felis, et venenatis sem faucibus eu. Vivamus eget ante ac neque gravida vulputate. Proin auctor orci in lacus vestibulum faucibus. Aliquam tincidunt placerat ligula malesuada molestie. Praesent vehicula dolor metus, vel cursus enim laoreet egestas. Etiam eu pulvinar dolor, vitae condimentum ipsum. Aenean ut dui sed felis porta aliquam id id sapien."
					/>
				</div>
			</div>
		</div>
	)
};
export default WrapperGallery