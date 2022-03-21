import {getLocal} from "../Middleware/localStorage";
import React, { useState, createContext } from "react";

export const PageContext = createContext();

const pageContextProvider = (props) => {
	// eslint-disable-next-line no-unused-vars
	const [data, setData] = useState({
		data: getLocal("data")
	});
	return (
		<PageContext.Provider value={{ 
			data: data,
		}}>
			{props.children}
		</PageContext.Provider>
	);
};
export default pageContextProvider;


