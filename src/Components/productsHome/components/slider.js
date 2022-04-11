/* eslint-disable react/jsx-key */
import React, {useState} from "react";
import "./Slider.css";

function Slider(){
	let sliderArray = [1,2,3,4];
	const [x, setX] = useState(0);
	const goLeft=()=>{
		x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
	};
	const goRight=()=>{
		x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
	};

	return(
		<div className="slider">
			{sliderArray.map((item, index) => {
				return(
					<div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
						{item}
					</div>
				);
			})}
            
			<button id="goLeft"  onClick={goLeft}>left</button>
			<button id="goRight" onClick={goRight}>right</button>
		</div>
	);
}

export default Slider;