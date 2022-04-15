import React from "react";

const LinedTitle = ({ children, className = "" }) => {
	return (
		<h2
			className={`text-4xl font-light tracking-widest uppercase mb-8 ${className}`}
		>
			{children}
		</h2>
	);
};

export default LinedTitle;
