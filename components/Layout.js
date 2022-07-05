import React from "react";
import { useRouter } from "next/router";

import Header from "./Header";
import Footer from "./Footer";
import Button from "../components/ui/Button";
import { MenuContext, MenuContextProvider } from "../context/MenuContext";
import Link from "next/link";
import LinedTitle from "./ui/LinedTitle";
import Icon from "./ui/Icon";

export const MainContext = React.createContext({
	menuOpen: null,
	OpenMenu: () => {
		menuOpen: true;
	},
	CloseMenu: () => {
		menuOpen: false;
	},
	testMenu: () => {
		console.log("text Menu");
	},
});

const Layout = ({ children }) => {
	const router = useRouter();
	const [cookies, setCookies] = React.useState(false);
	const [cookiePreferences, setCookiePreferences] = React.useState(false);

	React.useEffect(() => {
		// const cookieClosed = localStorage.getItem("cookie-closed");
		// cookieClosed ? setCookies(false) : setCookies(true);
	}, []);

	const HideCookieBanner = () => {
		setCookies(false);
		localStorage.setItem("cookie-closed", true);
	};

	return (
		<div className="overflow-x-hidden__">
			<MenuContextProvider>
				<Header
					basic={
						router.pathname == "/" || router.pathname == "/en"
							? false
							: true
					}
				/>
				<div className="min-h-[85vh] overflow-hidden pb-6 lg:pb-24">
					{children}
				</div>
				<Footer />
				<ScrollTop />
				{cookies && (
					<CookieBanner
						hide={HideCookieBanner}
						showPreference={setCookiePreferences}
					/>
				)}
				{cookiePreferences && (
					<CookiePreferences show={setCookiePreferences} />
				)}
			</MenuContextProvider>
		</div>
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
			} fixed w-12 h-12 p-2 transition-transform border rounded-full border-secondary bg-primary/30 backdrop-blur-sm text-secondary right-4 lg:right-8  bottom-4 lg:bottom-8 hover:scale-95`}
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

const CookieBanner = ({ hide, showPreference }) => {
	return (
		<div className="fixed bottom-0 left-0 z-50 w-full border-t py-7 rounded-tl-xl__ rounded-tr-xl__ bg-primary border-secondary/20">
			<div className="container-sm">
				<div className="mb-3 text-xl font-medium tracking-wider uppercase">
					Avis
				</div>
				<p className="tracking-wide text-justify">
					Nous ainsi que des tiers sélectionnés utilisons des cookies
					ou des technologies similaires à des fins techniques et,
					avec votre consentement, à d'autres fins (« les interactions
					et les fonctionnalités de base », « l'amélioration de
					l'expérience », « la mesure » et « le ciblage et la
					publicité »), comme décrit dans{" "}
					<Link href="/politique-de-confidentialite">
						<a className="underline underline-offset-4 hover:decoration-dashed visited:text-yellow-100__">
							la politique relative aux cookies
						</a>
					</Link>
					.
					<br /> Vous pouvez librement donner, refuser ou retirer
					votre consentement à tout moment.
				</p>
				<div className="flex flex-wrap justify-between gap-6 mt-4">
					<Button
						onClick={() => showPreference(true)}
						className="text-sm !py-3 !px-8 !tracking-wider"
					>
						En savoir plus et personnaliser
					</Button>
					<div className="flex gap-4">
						<Button
							onClick={() => hide()}
							className="text-sm !py-3 !px-8 !tracking-wider"
						>
							Accepter
						</Button>
						<Button
							onClick={() => hide()}
							className="text-sm !py-3 !px-8 !tracking-wider"
						>
							Refuser
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

const CookiePreferences = ({ show }) => {
	return (
		// wrapper
		<div className="fixed inset-0 z-50 grid place-items-center backdrop-blur bg-primary/10">
			{/* inner */}
			<div className="relative w-full max-w-3xl p-8 border rounded-lg border-secondary/20 bg-primary">
				{/* close button */}
				<button
					onClick={() => show(false)}
					className="absolute top-0 right-0 grid w-10 h-10 p-1 translate-x-1/2 -translate-y-1/2 border rounded-full border-secondary/20 place-items-center bg-primary hover:text-white hover:border-secondary"
				>
					<Icon name="close" />
				</button>
				<LinedTitle className="">
					Vos préférences en matière de consentement
				</LinedTitle>
				<p className="tracking-wide text-justify">
					Le panneau suivant vous permet de personnaliser vos
					préférences en matière de consentement pour toute
					technologie de suivi utilisée pour nous permettre de
					réaliser les fonctionnalités et de mener à bien les
					activités décrites ci-dessous. Vous pouvez revoir et
					modifier vos choix à tout moment.
				</p>
				<div className="mt-8 space-y-9">
					<section>
						<LinedTitle className="text-sm font-normal !mb-6 before:!-bottom-3">
							Strictement nécessaires
						</LinedTitle>
						<label className="flex gap-3 align-baseline">
							<input type="checkbox" checked className="mt-1" />
							<p className="text-sm tracking-wide text-justify">
								Ces traqueurs sont utilisés pour des activités
								strictement nécessaires au fonctionnement ou à
								la prestation des services que vous nous avez
								demandée et, par conséquent, n'exigent pas votre
								consentement.
							</p>
						</label>
					</section>
					<section>
						<LinedTitle className="text-sm font-normal !mb-6 before:!-bottom-3">
							Amélioration de l'expérience
						</LinedTitle>
						<label className="flex gap-3 align-baseline">
							<input type="checkbox" checked className="mt-1" />
							<p className="text-sm tracking-wide text-justify">
								Ces traqueurs nous permettent d'offrir une
								expérience utilisateur personnalisée en
								améliorant la qualité de vos options de gestion
								des préférences et en interagissant avec les
								réseaux et les plateformes externes.
							</p>
						</label>
					</section>
					<section>
						<LinedTitle className="text-sm font-normal !mb-6 before:!-bottom-3">
							Mesures
						</LinedTitle>
						<label className="flex gap-3 align-baseline">
							<input type="checkbox" checked className="mt-1" />
							<p className="text-sm tracking-wide text-justify">
								Ces traqueurs nous permettent de mesurer le
								trafic et d'analyser votre comportement dans le
								but d'améliorer notre service.
							</p>
						</label>
					</section>
					<section>
						<LinedTitle className="text-sm font-normal !mb-6 before:!-bottom-3">
							Ciblage et publicité
						</LinedTitle>
						<label className="flex gap-3 align-baseline">
							<input type="checkbox" checked className="mt-1" />
							<p className="text-sm tracking-wide text-justify">
								Ces cookies ou autres identifiants nous
								permettent de vous fournir un contenu de
								marketing personnalisé en fonction de votre
								comportement et d'exploiter, de diffuser et de
								suivre des publicités.
							</p>
						</label>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Layout;
