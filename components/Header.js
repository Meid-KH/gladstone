import React from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import { Router } from "next/router";
import Logo from "./Logo";
import { MainContext } from "./Layout";
import { ColorContext } from "../context/ColorContext";
import { MenuContext } from "../context/MenuContext";
import Icon from "./ui/Icon";

const MENU_ITEMS = [
	{
		url: "#activity",
		label: "Activité",
		labelEn: "What We Do",
	},
	{
		url: "#our-approach",
		label: "Notre Approche",
		labelEn: "Our Approach",
	},
	{
		url: "#team",
		label: "Équipe",
		labelEn: "Our Team",
	},
	{
		url: "#contact",
		label: "Contact",
		labelEn: "Contact",
	},
];

const AnimParent = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.05,
			staggerChildren: 0.25,
		},
	},
};

const AnimChild = {
	hidden: { opacity: 0, x: 25 },
	show: { opacity: 1, x: 0 },
};

const Header = ({ basic = false }) => {
	// console.log(Router.pathname);
	const [sticky, setSticky] = React.useState(false);
	const [scrollPos, setScrollPos] = React.useState(0);
	const [showLogo, setShowLogo] = React.useState(false);

	const { openMenu } = React.useContext(MenuContext);
	// console.log(openMenu);

	React.useEffect(() => {
		if (openMenu) {
			document.body.classList.add("overflow-y-hidden", "overlay");
		} else {
			document.body.classList.remove("overflow-y-hidden", "overlay");
		}

		return () =>
			document.body.classList.remove("overflow-y-hidden", "overlay");
	}, [openMenu]);

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
		return () => window.removeEventListener("scroll", handleScroll, false);
	}, [scrollPos]);

	if (basic) {
		return (
			<header className="sticky top-0 z-50 grid px-4 py-4 transition-transform duration-500 place-items-center md:px-8 md:py-6 bg-gradient-to-b from-primary/40 to-transparent backdrop-blur">
				<Gladstone show={true} />
			</header>
		);
	} else {
		return (
			<header
				className={`min-h-[112px] grid place-items-center px-4 md:px-8 py-4 md:py-6 transition-transform duration-500 
        ${
			sticky
				? "sticky z-50 top-0 bg-gradient-to-b from-primary/40 to-transparent backdrop-blur"
				: ""
		}
        ${showLogo ? "py-3" : "lg:min-h-[113px]"}
      `}
			>
				<div className="w-full h-full">
					<div
						className={`flex-1 flex gap-16 items-center transition-all ${
							!showLogo
								? "justify-center lg:justify-center"
								: "justify-center"
						}`}
					>
						<Gladstone show={showLogo} />
						<Menu open={openMenu} />
						<MenuHamburger stick={sticky} />
					</div>
				</div>
			</header>
		);
	}
};

const Gladstone = ({ show }) => {
	const router = useRouter();

	return (
		<Link href={router.pathname.startsWith("/en") ? "/en" : "/"}>
			<motion.a
				className={`cursor-pointer flex-shrink-0 block w-[151px] ${
					!show && "hidden"
				}`}
				initial={{ y: -10, scale: 0.95, opacity: 0 }}
				animate={{ y: 0, scale: 1, opacity: 1 }}
				transition={{ duration: 0.45 }}
			>
				<Logo />
			</motion.a>
		</Link>
	);
};

const MenuHamburger = ({ stick }) => {
	const { setOpenMenu } = React.useContext(MenuContext);

	const handleMobileMenu = () => {
		setOpenMenu(true);
		// console.log("Menu clicked");
	};
	return (
		<div
			className={`absolute z-20 flex gap-3 lg:hidden left-4 ${
				stick ? "top-4 top-1/2__ -translate-y-1/2__" : "top-4"
			}`}
		>
			<button
				onClick={handleMobileMenu}
				className="grid w-12 h-12 ml-auto rounded-lg place-items-center text-md text-secondary focus:ring-2 focus:ring-secondary/50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={1}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
	);
};

const MenuItem = ({
	link,
	label,
	className = "",
	navigate = false,
	...rest
}) => {
	const NavigateToContent = async (e) => {
		let elem = document.querySelector(e.target.hash);
		e.preventDefault();
		elem?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			// top: "-500px",
		});
		setOpenMenu();
	};
	const { setOpenMenu } = React.useContext(MenuContext);

	return (
		<Link href={link}>
			<a
				className={`block text-xl lg:text-base w-max relative font-light tracking-wider leading-none underline-offset-4 py-2.5 px-4__ rounded-lg 
        before:content-[''] before:h-[1px] before:w-full before:bg-current before:absolute before:bottom-0 before:duration-200 before:left-0 before:scale-x-0 before:origin-right before:transition-transform
        hover:before:scale-100 hover:before:origin-left
        ${className} ${Router.pathname == "/" && "font-medium"}`}
				onClick={navigate ? NavigateToContent : false}
				{...rest}
			>
				{label}
			</a>
		</Link>
	);
};

const Menu = ({ open }) => {
	const { setOpenMenu } = React.useContext(MenuContext);
	const router = useRouter();

	return (
		<motion.nav
			className={`fixed top-0 left-0 z-50 flex flex-col h-screen w-full gap-3 px-20 lg:px-20 py-10 pt-20 
      bg-nav-pattern bg-[#0f0b39] lg:bg-none bg-no-repeat bg-cover bg-bottom
      border-secondary/10 rounded-lg
      lg:border-0 lg:h-auto lg:items-center lg:justify-between lg:flex-row lg:static lg:p-0 lg:bg-transparent transition
      ${!open && "-translate-x-full lg:translate-x-0"}`}
			variants={AnimParent}
			initial="hidden"
			animate="show"
		>
			{/* Close button */}
			<button
				className="absolute left-4 top-4 lg:hidden !w-12 h-12 block opacity-70 focus:opacity-100"
				onClick={() => setOpenMenu(false)}
			>
				<Icon name="close" className="!w-full" />
			</button>
			{MENU_ITEMS?.map((item, index) => (
				<motion.div key={index} variants={AnimChild}>
					<MenuItem
						link={item?.url}
						label={
							router.pathname == "/en"
								? item?.labelEn
								: item?.label
						}
						navigate
					/>
				</motion.div>
			))}
			<div className="flex items-center divide-x__ divide-gray-400__">
				<motion.div variants={AnimChild}>
					<MenuItem
						link={"/"}
						label={"FR"}
						className={`mr-2 ${
							router.pathname == "/"
								? "font-semibold"
								: "!tracking-widest"
						} `}
					/>
				</motion.div>
				<span className="text-xl lg:text-base">l</span>
				<motion.div variants={AnimChild}>
					<MenuItem
						link={"/en"}
						label={"EN"}
						className={`ml-2 ${
							router.pathname == "/en"
								? "font-semibold"
								: "!tracking-widest"
						} `}
					/>
				</motion.div>
			</div>
		</motion.nav>
	);
};

export default Header;
