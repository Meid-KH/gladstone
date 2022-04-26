import React from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { Router } from "next/router";
import Logo from "./Logo";
import { MainContext } from "./Layout";
import { ColorContext } from "../context/ColorContext";
import { MenuContext } from "../context/MenuContext";

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
	const [showLogo, setShowLogo] = React.useState(false);

	const { openMenu } = React.useContext(MenuContext);
	// console.log(openMenu);

	React.useEffect(() => {
		function handleScroll() {
			if (document.body.getBoundingClientRect().top > scrollPos) {
				// setSticky(true);
				scrollPos < -10 ? setSticky(true) : setSticky(false);
			} else {
				setSticky(false);
			}

			// scrollPos < -window.innerHeight
			scrollPos < -window.innerHeight
				? setShowLogo(true)
				: setShowLogo(false);

			setScrollPos(document.body.getBoundingClientRect().top);
		}
		window.addEventListener("scroll", handleScroll, false);

		// console.log(scrollPos);

		return () => window.removeEventListener("scroll", handleScroll, false);
	}, [scrollPos]);

	return (
		<header
			className={`grid place-items-center px-8 transition-transform duration-500 
      ${
			sticky
				? "sticky z-50 top-0 bg-gradient-to-b from-primary/40 to-transparent backdrop-blur"
				: ""
		}
      ${showLogo ? "py-6 border-b border-secondary/20" : "py-6 min-h-[113px]"}
    `}
		>
			<div className="w-full">
				<div
					className={`flex-1 flex gap-8 items-center transition-all ${
						!showLogo
							? "justify-end lg:justify-center"
							: "justify-between"
					}`}
				>
					<Gladstone show={showLogo} />
					<Menu open={openMenu} />
					<MenuHamburger />
				</div>
			</div>
		</header>
	);
};

const Gladstone = ({ show }) => (
	<Link href={"/"}>
		<motion.a
			className={`flex-shrink-0 block w-[120px] ${!show && "hidden"}`}
			initial={{ y: -10, scale: 0.95, opacity: 0 }}
			animate={{ y: 0, scale: 1, opacity: 1 }}
			transition={{ duration: 0.25 }}
		>
			<Logo />
		</motion.a>
	</Link>
);

const MenuHamburger = () => {
	const { toggleMenu, setOpenMenu } = React.useContext(MenuContext);

	const handleMobileMenu = () => {
		toggleMenu();
		// console.log("Menu clicked");
	};
	return (
		<div className="flex gap-3 lg:hidden">
			<button
				onClick={handleMobileMenu}
				className="grid w-12 h-12 p-2 ml-auto rounded-lg place-items-center text-secondary bg-primary focus:ring-2 focus:ring-secondary/50"
			>
				<svg viewBox="0 0 40 15" fill="none">
					<path d="M38.75 0H1.24997C0.559941 0 0 0.560046 0 1.24997C0 1.9399 0.560045 2.49995 1.24997 2.49995H38.75C39.4401 2.49995 40 1.9399 40 1.24997C40 0.560046 39.4401 0 38.75 0Z"></path>
					<path d="M38.75 12.5H1.24997C0.559941 12.5 0 13.0601 0 13.75C0 14.4401 0.560045 15 1.24997 15H38.75C39.4401 15 40 14.4399 40 13.75C40.0001 13.06 39.4401 12.5 38.75 12.5Z"></path>
				</svg>
			</button>
		</div>
	);
};

const MenuItem = ({ link, label, className = "", ...rest }) => {
	const NavigateToContent = async (e) => {
		let elem = document.querySelector(e.target.hash);
		e.preventDefault();
		elem.scrollIntoView({
			behavior: "smooth",
			block: "start",
			// top: "-500px",
		});
	};

	return (
		<Link href={link}>
			<a
				className={`relative font-light tracking-wider leading-none underline-offset-4 py-2.5 px-4__ rounded-lg 
        before:content-[''] before:h-[1px] before:w-full before:bg-current before:absolute before:bottom-0 before:duration-200 before:left-0 before:scale-x-0 before:origin-right before:transition-transform
        hover:before:scale-100 hover:before:origin-left
        ${className} ${Router.pathname == "/" && "font-medium"}`}
				onClick={NavigateToContent}
				{...rest}
			>
				{label}
			</a>
		</Link>
	);
};

const Menu = ({ open }) => {
	return (
		<motion.nav
			className={`fixed top-0 left-0 z-50 flex flex-col h-screen max-w-full gap-3 px-8 py-10 bg-black 
      lg:h-auto lg:items-center lg:justify-between lg:w-full lg:max-w-4xl lg:flex-row lg:static w-80 lg:p-0 lg:bg-transparent transition
      ${!open && "-translate-x-full lg:translate-x-0"}`}
			variants={AnimParent}
			initial="hidden"
			animate="show"
		>
			{MENU_ITEMS?.map((item, index) => (
				<motion.div key={index} variants={AnimChild}>
					<MenuItem link={item?.url} label={item?.label} />
				</motion.div>
			))}
			<div className="flex items-center divide-x__ divide-gray-400__">
				<motion.div variants={AnimChild}>
					<MenuItem
						link={"/"}
						label={"FR"}
						className="mr-2 font-semibold"
					/>
				</motion.div>
				l
				<motion.div variants={AnimChild}>
					<MenuItem
						link={"#en"}
						label={"EN"}
						className="ml-2 !tracking-widest"
					/>
				</motion.div>
			</div>
		</motion.nav>
	);
};

export default Header;
