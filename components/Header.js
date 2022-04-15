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

	React.useEffect(() => {
		let scrollPos = 0;
		window.addEventListener("scroll", () => {
			if (document.body.getBoundingClientRect().top > scrollPos) {
				setSticky(true);
				console.log("Scrol is up");
			} else {
				setSticky(false);
				console.log("Scrol is down");
			}
			scrollPos = document.body.getBoundingClientRect().top;
		});
	}, []);

	return (
		<header
			className={`grid place-items-center h-28 py-8 px-8 ${
				sticky && "sticky z-50 top-0 backdrop-blur"
			}`}
		>
			<div className="container">
				<div
					className={`flex-1 flex gap-8 items-center  ${
						sticky ? "justify-center" : "justify-between"
					}`}
				>
					<Gladstone />
					<Menu />
				</div>
			</div>
		</header>
	);
};

const Gladstone = () => (
	<Link href={"/"}>
		<a className="block w-36 flex-shrink-0">
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
			top: "-500px",
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
	<nav className="flex gap-3 justify-between items-center w-full max-w-4xl">
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
