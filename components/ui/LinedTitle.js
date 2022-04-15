import React from "react";

const LinedTitle = ({ children, className = "" }) => {
	return (
		<div
			className={`relative text-xl font-light uppercase tracking-widest mb-10 before:content-[''] before:absolute before:left-0 before:-bottom-4 before:w-12 before:h-[1px] before:bg-current ${className}`}
		>
			{children}
		</div>
	);
};

export default LinedTitle;
