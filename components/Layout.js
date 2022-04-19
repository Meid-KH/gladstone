import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="min-h-[85vh]">{children}</div>
			<Footer />
		</>
	);
};

export default Layout;
