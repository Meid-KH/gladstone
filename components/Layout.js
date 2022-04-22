import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const MainContext = React.createContext({
	menuOpen: false,
});
const Layout = ({ children }) => {
	console.log(MainContext.menuOpen);
	return (
		<>
			<MainContext.Provider value={MainContext}>
				<Header />
				<div className="min-h-[85vh] ">{children}</div>
				<Footer />
				<ScrollTop />
			</MainContext.Provider>
		</>
	);
};

const ScrollTop = () => {
	const [scrollPos, setScrollPos] = React.useState(0);
	const [showScrollTop, setShowScrollTop] = React.useState(false);

	React.useEffect(() => {
		function handleScroll() {
			if (document.body.getBoundingClientRect().top > scrollPos) {
				scrollPos < -300
					? setShowScrollTop(true)
					: setShowScrollTop(false);
			} else {
				setShowScrollTop(false);
			}
			setScrollPos(document.body.getBoundingClientRect().top);
		}
		window.addEventListener("scroll", handleScroll, false);

		return () => window.removeEventListener("scroll", handleScroll, false);
	}, [scrollPos]);

	return (
		<button
			className={`${
				!showScrollTop && "hidden"
			} fixed w-12 h-12 p-2 transition-transform border rounded-full border-secondary bg-primary text-secondary right-8 bottom-8 hover:scale-95`}
			onClick={() => {
				document.body.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}}
		>
			<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
				<path d="m32 56c1.104 0 2-.896 2-2v-39.899l14.552 15.278c.393.413.92.621 1.448.621.495 0 .992-.183 1.379-.552.8-.762.831-2.028.069-2.828l-16.619-17.448c-.756-.755-1.76-1.172-2.829-1.172s-2.073.417-2.862 1.207l-16.586 17.414c-.762.8-.731 2.066.069 2.828s2.067.731 2.828-.069l14.551-15.342v39.962c0 1.104.896 2 2 2z"></path>
			</svg>
		</button>
	);
};

export default Layout;
