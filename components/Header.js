import React from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { Router } from "next/router";
import Logo from "./Logo";

const MENU_ITEMS = [
	{
		url: "#activity",
		label: "Activité",
	},
	{
		url: "#our-approach",
		label: "Notre approche",
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

const AnimParent = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.15,
			staggerChildren: 0.15,
		},
	},
};

const AnimChild = {
	hidden: { opacity: 0, x: 25 },
	show: { opacity: 1, x: 0 },
};

const Header = () => {
	// console.log(Router.pathname);
	const [sticky, setSticky] = React.useState(false);
	const [scrollPos, setScrollPos] = React.useState(0);

	React.useEffect(() => {
		function handleScroll() {
			if (document.body.getBoundingClientRect().top > scrollPos) {
				// setSticky(true);
				scrollPos < -200 ? setSticky(true) : setSticky(false);
			} else {
				setSticky(false);
			}
			setScrollPos(document.body.getBoundingClientRect().top);
		}
		window.addEventListener("scroll", handleScroll, false);

		return () => window.removeEventListener("scroll", handleScroll, false);
	}, [scrollPos]);

	return (
		<header
			className={`grid place-items-center px-8 transition-all__ ${
				sticky
					? "sticky z-50 top-0 bg-gradient-to-b from-primary/40 to-transparent backdrop-blur py-10"
					: "py-8"
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
		<motion.a
			className={`flex-shrink-0 block w-48 ${hide && "hidden"}`}
			initial={{ y: -10, scale: 0.95, opacity: 0 }}
			animate={{ y: 0, scale: 1, opacity: 1 }}
			transition={{ duration: 0.25 }}
		>
			<Logo />
		</motion.a>
	</Link>
);

const MenuItem = ({ link, label, ...rest }) => {
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
				className={`font-light tracking-wide leading-none underline-offset-4 py-2.5 px-4 rounded-lg hover:bg-accent/20 focus:bg-accent/20 ${
					Router.pathname == "/" && "font-medium"
				}`}
				onClick={NavigateToContent}
				{...rest}
			>
				{label}
			</a>
		</Link>
	);
};

const Menu = () => {
	return (
		<motion.nav
			className="flex items-center justify-between w-full max-w-4xl gap-3"
			variants={AnimParent}
			initial="hidden"
			animate="show"
		>
			{MENU_ITEMS?.map((item, index) => (
				<motion.div key={index} variants={AnimChild}>
					<MenuItem link={item?.url} label={item?.label} />
				</motion.div>
			))}
			<div className="flex items-center">
				<motion.div variants={AnimChild}>
					<MenuItem link={"/"} label={"FR"} />
				</motion.div>
				&nbsp; | &nbsp;
				<motion.div variants={AnimChild}>
					<MenuItem link={"#en"} label={"EN"} />
				</motion.div>
			</div>
		</motion.nav>
	);
};

export default Header;
