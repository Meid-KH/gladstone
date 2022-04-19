import React from "react";

const LinedTitle = ({ children, className = "", ...rest }) => {
	return (
		<button
			className={`flex px-10 py-5 font-medium text-lg tracking-wide transition-all border-2 border-current rounded-full ring-offset-2 ring-offset-primary hover:bg-secondary hover:text-primary hover:ring-1 hover:ring-secondary active:scale-95 ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default LinedTitle;
