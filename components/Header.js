import Link from "next/link";
import { Router } from "next/router";
import React from "react";
import Logo from "./Logo";

const MENU_ITEMS = [
	{
		url: "/",
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
	console.log(Router.pathname);
	return (
		<header className="h-28 py-8 px-8">
			<div className="container">
				<div className="flex-1 flex gap-8 items-center justify-between">
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
const MenuItem = ({ link, label }) => (
	<Link href={link}>
		<a
			className={`font-light tracking-wide leading-none underline-offset-4 py-2.5 px-4 rounded-lg hover:bg-accent/20 focus:ring-2 ${
				Router.pathname == "/" && "font-medium"
			}`}
		>
			{label}
		</a>
	</Link>
);
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
