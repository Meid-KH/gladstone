import React from "react";

const ArticleRow = ({ children, className = "" }) => {
	return (
		<div
			className={`grid md:grid-cols-2 gap-8 lg:gap-14 xl:gap-20 ${className}`}
		>
			{children}
		</div>
	);
};

export default ArticleRow;
