import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import Logo from "./Logo";

const MENU_ITEMS = [
	{
		url: "#activity",
		label: "Activité",
	},
	{
		url: "#our-approach",
		label: "Notre Approche",
	},
	{
		url: "#team",
		label: "Équipe",
	},
	{
		url: "#contact",
		label: "Contact",
	},
];

const Header = () => {
	// console.log(Router.pathname);
	const [sticky, setSticky] = React.useState(false);
	// const [hideLogo, setHideLogo] = React.useState(false);

	React.useEffect(() => {
		let scrollPos = 0;
		window.addEventListener("scroll", () => {
			if (document.body.getBoundingClientRect().top > scrollPos) {
				setSticky(true);
				scrollPos < -200 ? setSticky(true) : setSticky(false);
			} else {
				setSticky(false);
			}
			scrollPos = document.body.getBoundingClientRect().top;
		});
	}, []);

	return (
		<header
			className={`grid place-items-center px-8 transition-all__ ${
				sticky ? "sticky z-50 top-0 backdrop-blur py-10" : "py-8"
			}`}
		>
			<div className="container">
				<div
					className={`flex-1 flex gap-8 items-center transition-all ${
						sticky ? "justify-center" : "justify-between"
					}`}
				>
					<Gladstone hide={sticky} />
					<Menu />
				</div>
			</div>
		</header>
	);
};

const Gladstone = ({ hide }) => (
	<Link href={"/"}>
		<a className={`flex-shrink-0 block w-48 ${hide && "hidden"}`}>
			<Logo />
		</a>
	</Link>
);
const MenuItem = ({ link, label }) => {
	const NavigateToContent = async (e) => {
		let elem = document.querySelector(e.target.hash);
		e.preventDefault();
		// console.log(e.target.hash)

		// 1. Use some state to update header aswell
		elem.scrollIntoView({
			behavior: "smooth",
			block: "start",
			// top: "-500px",
		});
	};

	return (
		<Link href={link}>
			<a
				className={`font-light tracking-wide leading-none underline-offset-4 py-2.5 px-4 rounded-lg hover:bg-accent/20 focus:ring-2 ${
					Router.pathname == "/" && "font-medium"
				}`}
				onClick={NavigateToContent}
			>
				{label}
			</a>
		</Link>
	);
};

const Menu = () => (
	<nav className="flex items-center justify-between w-full max-w-4xl gap-3">
		{MENU_ITEMS?.map((item, index) => (
			<MenuItem key={index} link={item?.url} label={item?.label} />
		))}
		<div className="flex items-center">
			<MenuItem link={"/"} label={"FR"} />
			&nbsp; | &nbsp;
			<MenuItem link={"#en"} label={"EN"} />
		</div>
	</nav>
);
export default Header;
