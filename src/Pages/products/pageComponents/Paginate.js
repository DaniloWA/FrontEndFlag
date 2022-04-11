/* eslint-disable react/prop-types */
import React from "react";

const Paginate =({productsPerPage, totalProducts, paginate}) => {
	const pageNumbers = [];

	for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}

	if (pageNumbers.length > 1) {
		return(
			<div className="wrapper">
				<div className="sectionWrapper topPadding center">
					<ul className="pagination">
						{pageNumbers.map(number => (
							<li key={number} className="pageItem">
								<a onClick={() => paginate(number)} href="!#" className="pageLink">
									{number}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}

	return(
		null
	);
};

export default Paginate;