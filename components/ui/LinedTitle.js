import React from "react";

const LinedTitle = ({ children, className = "" }) => {
	return (
		<div
			className={`relative text-xl text-left font-light uppercase tracking-[0.125em] mb-10 before:content-[''] before:absolute before:left-0 before:-bottom-4 before:w-12 before:h-[1px] before:bg-current ${className}`}
		>
			{children}
		</div>
	);
};

export default LinedTitle;
