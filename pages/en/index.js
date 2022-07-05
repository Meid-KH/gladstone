import React from "react";
import Head from "next/head";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import Logo from "../../components/Logo";
import LinedTitle from "../../components/ui/LinedTitle";
import ArticleRow from "../../components/ui/ArticleRow";
import Title from "../../components/ui/Title";
import Button from "../../components/ui/Button";
import Icon from "../../components/ui/Icon";
import Cubes from "../../assets/img/cube-bg.png";
import CubeLeft from "../../assets/img/cube-left.png";
import CubeRight from "../../assets/img/cube-right.png";
import ApproachImg from "../../assets/img/appreach-img.png";
import Yasmine from "../../assets/img/yasmine-khouri.png";
import Hanna from "../../assets/img/hanna-ehrlich.png";

export default function Home() {
	// console.log(Cubes.src);
	return (
		<div>
			<Head>
				<title>Conseil en recrutement Juridique | Gladstone</title>
				<meta
					name="description"
					content="Nous accompagnons les cabinets d'avocats, les directions juridiques, les banques et les fonds d'investissement dans le renforcement de leurs équipes juridiques en France et à l'international"
				/>
				<meta itemProp="name" content="Gladstone" />
				<meta
					itemProp="description"
					content="Nous accompagnons les cabinets d'avocats, les directions juridiques, les banques et les fonds d'investissement dans le renforcement de leurs équipes juridiques en France et à l'international"
				/>
				<meta itemProp="image" content="/gladstone-favicon.png" />
			</Head>
			<Intro />
			<Activity />
			<OurApproach />
			<Team />
			<Contact />
		</div>
	);
}

const sectionVariants = {
	visible: { opacity: 1, scale: 1, transition: { duration: 0.85 } },
	hidden: { opacity: 0, scale: 0.95 },
};

const Intro = () => (
	<section
		className="relative h-[calc(100vh-theme(height.28))] grid place-items-center radial-shadow before:top-1/2 before:-translate-y-1/2 before:scale-[2] lg:before:top-0 lg:before:translate-y-0 lg:before:scale-100"
		// style={{
		// 	backgroundImage: `url(${Cubes?.src})`,
		// }}
	>
		<motion.div
			className="relative p-6 text-center "
			initial={{ y: 20, scale: 0.95, opacity: 0 }}
			animate={{ y: 0, scale: 1, opacity: 1 }}
			transition={{ duration: 1.25 }}
		>
			<div className="space-y-6 -translate-y-8">
				<div className="max-w-full mx-auto w-60">
					<Logo />
				</div>
				<h1 className="inline-block uppercase text-xs tracking-[0.2em]">
					Legal executive search
				</h1>
			</div>
		</motion.div>
		<div className="max-w-[35vw] absolute left-0 top-1/2 -z-10 translate-y-12 lg:translate-y-0">
			<img src={CubeLeft?.src} alt="Cube Left" />
		</div>
		<div className="max-w-[35vw] absolute right-0 bottom-0 lg:top-1/4 -z-10 translate-y-48 lg:translate-y-0">
			<img src={CubeRight?.src} alt="Cube Right" />
		</div>
	</section>
);

const Activity = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	React.useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		// else {
		// 	controls.start("hidden");
		// }
	}, [controls, inView]);

	return (
		<motion.section
			id="activity"
			className="relative py-16 lg:py-20 radial-shadow before:top-0 lg:before:top-1/2 lg:before:-translate-y-1/2 before:scale-150 lg:before:hidden"
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={sectionVariants}
			// transition={{ duration: 0.85 }}
		>
			<div className="container-sm">
				<div className="text-center">
					<Title>What we do</Title>
					<p className="mx-auto lg:max-w-2xl__ xl:px-16">
						GLADSTONE is a Paris based legal Executive Search firm.
						We work with law firms, in-house legal departments,
						banks and investment funds on strengthening and building
						their legal teams. We are specialists in recruiting for
						roles that require French law expertise, both in France
						and abroad, and can advise in French and English.
					</p>
				</div>

				<ArticleRow className="mt-28">
					<div className="text-justify radial-shadow lg:before:hidden before:scale-150 before:min-h-[50vh] before:bottom-0 before:top-auto before:translate-y-24">
						<LinedTitle>
							<h3>PRIVATE PRACTICE</h3>
						</LinedTitle>
						<p>
							We have a long history in{" "}
							<strong>
								recruiting partners, associates and teams
							</strong>{" "}
							in all areas of business law: M&A, Private Equity,
							Tax, IT, IP, Data Protection, Employment, Public
							Law, Real Estate, Restructuring, Funds Formation,
							Banking & Finance, Projects and Project Financing,
							Litigation...
						</p>
						<p>
							Our clients are{" "}
							<strong>international and French law firms</strong>
							and we work with Managing Partners, Global Heads of
							Practice, Executive Committees, Heads of Lateral
							Recruitment and Human Resources Directors.
						</p>
						<p>
							Our expertise also includes{" "}
							<strong>advising clients on strategy</strong>,
							whether in relation to{" "}
							<strong>
								creating new departments, merger plans, or
								remuneration policy
							</strong>
							. We would also be delighted to assist with your
							ideas around <strong>diversity</strong>.
						</p>
					</div>

					<div className="text-justify">
						<LinedTitle>
							<h3>COMPANIES, BANKS AND INVESTMENT FUNDS</h3>
						</LinedTitle>
						<p>
							We recruit at all{" "}
							<strong>
								levels of seniority and across all areas of
								activity
							</strong>
							. Our work with{" "}
							<strong>in-house legal departments</strong> has
							given us particular insight into the Healthcare, IT,
							Luxury and Art sectors. We have also worked on
							numerous occasions with{" "}
							<strong>
								banks and investment funds in Paris and London
							</strong>
							.
						</p>
						<LinedTitle>
							<h3>Candidates</h3>
						</LinedTitle>
						<p>
							GLADSTONE welcomes the opportunity to assist and
							support{" "}
							<strong>lawyers and in-house counsels</strong> on
							their <strong>career ambitions and goals</strong>.
							We are here to provide you with a clear view of the
							market and to advise you on the opportunities
							available for career progression.
						</p>
					</div>
				</ArticleRow>
			</div>

			<div className="lg:hidden max-w-[35vw] absolute left-0 top-12 lg:top-1/2 -z-10 translate-y-full lg:translate-y-28">
				<img src={CubeLeft?.src} alt="Cube Left" />
			</div>
			<div className="lg:hidden max-w-[35vw] absolute right-0 top-48 lg:top-1/2 -z-10 translate-y-full lg:translate-y-44">
				<img src={CubeRight?.src} alt="Cube Right" />
			</div>
		</motion.section>
	);
};

const OurApproach = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	React.useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.section
			id="our-approach"
			className="relative py-16 lg:py-20 radial-shadow before:-translate-y-1/4 before:scale-150"
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={sectionVariants}
		>
			<div className="relative container-sm">
				<ArticleRow>
					<div className="grid place-items-center">
						<Title className="m-0 !mb-24 text-center lg:mb-8">
							Our <br /> approach
						</Title>
					</div>
					{/* <Image
						className="rounded__"
						src={ApproachImg}
						width={417}
						height={373}
						// layout="fill"
						objectFit="cover"
					/> */}
					<img
						className="rounded__"
						src={ApproachImg.src}
						alt="Notre approche"
						// width={417}
						// height={373}
						// layout="fill"
						// objectFit="cover"
					/>
				</ArticleRow>
				<ArticleRow className="mt-12 lg:mt-28">
					<div className="text-justify">
						<div className="mb-6 lg:mb-12">
							<LinedTitle>
								<h3>COMMITMENT</h3>
							</LinedTitle>
							<p>
								<strong>
									We will personally look after your search
									from start to finish
								</strong>
								. From identifying potential candidates through
								to offer acceptance, we believe in giving every
								stage of the recruitment process our{" "}
								<strong>
									undivided attention and highest quality
									service
								</strong>
								.
							</p>
						</div>
						<div className="mb-6 lg:mb-12 radial-shadow lg:before:hidden before:min-h-[50vh] before:scale-150 before:max-h-[50vh] before:-translate-y-1/2">
							<LinedTitle>
								<h3>Transparency</h3>
							</LinedTitle>
							<p>
								<strong>
									We never privilege one client over another
								</strong>
								. Together we will resolve any potential
								conflicts of interest which might impede us in
								successfully completing our search goals.
							</p>
						</div>
						<div className="mb-6 lg:mb-12">
							<LinedTitle>
								<h3>Market knowledge</h3>
							</LinedTitle>
							<p>
								We recruit at all levels of seniority, which
								provides us with a{" "}
								<strong>
									thorough and global understanding of the
									legal recruitment market
								</strong>
								. We have been assisting certain candidates for
								more than 10 years and many have since become
								clients.
							</p>
						</div>
						<div className="mb-6 lg:mb-12">
							<LinedTitle>
								<h3>International</h3>
							</LinedTitle>
							<p>
								Our own career paths have given us many years of
								experience working with counterparts in{" "}
								<strong>
									Europe, the UK and the Middle East
								</strong>
								. We have worked on searches involving multiple
								jurisdictions and are well equipped to assist
								you with your searches abroad.
							</p>
						</div>
					</div>

					<div className="text-justify radial-shadow lg:before:hidden before:scale-150 before:max-h-[50vh] before:-translate-y-1/2">
						<div className="mb-6 lg:mb-12">
							<LinedTitle>
								<h3>Targeted search</h3>
							</LinedTitle>
							<p>
								We search, scrupulously. We proceed with a
								<strong>direct approach</strong> towards the
								candidates that we believe correspond to your
								requirements. Our{" "}
								<strong>extensive network</strong> allows us to
								offer you a{" "}
								<strong>
									selection of quality profiles to save you
									time
								</strong>
								. We submit the right number of candidates, not
								too many, not too few.
							</p>
						</div>
						<div className="mb-6 lg:mb-12">
							<LinedTitle>
								<h3>Your values are our objective</h3>
							</LinedTitle>
							<p>
								A candidate hire can only be successful when the
								<strong>
									values and expectations of both parties are
									clearly expressed and appreciated
								</strong>
								. We act as your <strong>ambassadors</strong>{" "}
								and will work with you to develop{" "}
								<strong>
									the right message with which to approach
									candidates
								</strong>
								.
							</p>
						</div>
						<div className="mb-6 lg:mb-12">
							<LinedTitle>
								<h3>CONFIDENTIALITY</h3>
							</LinedTitle>
							<p>
								One of the most rewarding aspects of our
								profession is building long lasting and trusting
								relationships with our clients and candidates.
								Everything that you share with us is treated
								with the greatest{" "}
								<strong>discretion and confidentiality</strong>.
							</p>
						</div>
					</div>
				</ArticleRow>
			</div>

			{/* Cubes */}
			<div className="max-w-[35vw] absolute left-0 top-0 lg:top-1/4 -translate-y-8 lg:-translate-y-1/4 -z-10">
				<img src={CubeLeft?.src} alt="Cube Left" />
			</div>
			<div className="max-w-[35vw] absolute top-28 lg:top-0 right-0 lg:-translate-y-1/4 -z-10">
				<img src={CubeRight?.src} alt="Cube Right" />
			</div>
		</motion.section>
	);
};

const Team = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	React.useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.section
			id="team"
			className="relative py-16 lg:py-20 radial-shadow before:max-h-[50vh] before:top-0 before:-translate-y-36 before:scale-150 lg:scale-100 lg:before:-top-1/2"
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={sectionVariants}
		>
			<div className="relative z-10 container-sm">
				<div className="text-center">
					<Title className="!mb-32 lg:!mb-20">Our Team</Title>
				</div>
				<ArticleRow>
					<div className="text-justify radial-shadow lg:before:hidden before:scale-150 before:max-h-[50vh] before:translate-y-full">
						{/* <Image
							className="max-w-full -mx-4"
							src={Yasmine.src}
							width={417}
							height={376}
							objectFit="cover"
							quality={100}
						/> */}
						<img
							className="max-w-full"
							src={Yasmine.src}
							alt="Yasmine khouri"
							// width={417}
							// height={376}
							// objectFit="cover"
							// quality={100}
						/>
						<LinedTitle className="mt-8 text-2xl lg:mt-12">
							<h3>Yasmine khouri</h3>
						</LinedTitle>
						<p>
							After completing her legal studies at Université
							Paris II Panthéon-Assas, Yasmine began her
							professional career working as a lawyer at an
							intellectual property firm. In 2014, Yasmine joined
							the Paris office of Fox Rodney as a legal
							recruitment consultant. Here she focused on the
							recruitment of partners and associates for
							international and French law firms, and developed an
							in-depth understanding of the French legal
							recruitment market. Yasmine also recruits for
							corporate legal departments, banks and investment
							funds, at all levels of seniority, in France and
							abroad.
						</p>
						<p>
							Yasmine met Hanna at Fox Rodney, where they worked
							together for 6 years, before joining forces to
							establish GLADSTONE.
						</p>
					</div>

					<div className="text-justify radial-shadow lg:before:hidden before:scale-150 before:max-h-[50vh] before:translate-y-1/4">
						{/* <Image
							className="max-w-full"
							src={Hanna.src}
							width={417}
							height={376}
							objectFit="cover"
							quality={100}
						/> */}
						<img
							className="max-w-full"
							src={Hanna.src}
							alt="Hanna Ehrlich"
							// width={417}
							// height={376}
							// objectFit="cover"
							// quality={100}
						/>
						<LinedTitle className="mt-8 text-2xl lg:mt-12">
							<h3>Hanna Ehrlich</h3>
						</LinedTitle>
						<p>
							After graduating with a master’s degree in Applied
							Economics from Paris Dauphine-PSL, a Magistère
							Juriste d&#39;Affaires from Paris II Panthéon-Assas
							and an LL.M. from New York University, Hanna first
							practiced law at SJ Berwin as a member of the Paris
							and New York Bars. Hanna began her career in
							recruitment working at SSQ in London and Paris. She
							then established the Paris office of Fox Rodney,
							where she was head of office until the creation of
							GLADSTONE.
						</p>
						<p>
							Hanna has developed an expertise in the recruitment
							of associates, partners and significant teams for
							French and international law firms. Hanna also
							specialises in cross border partner recruitment
							covering multiple jurisdictions and is called upon
							by law firms to advise on strategy.
						</p>
					</div>
				</ArticleRow>
			</div>

			{/* Cubes */}
			<div className="lg:block max-w-[35vw] absolute left-0 bottom-0 translate-y-12 lg:-translate-y-1/2 lg:top-1/4 z-0">
				<img src={CubeLeft?.src} alt="Cube Left" />
			</div>
			<div className="max-w-[35vw] absolute top-16 lg:top-0 right-0 -translate-y-1/2__ -z-10">
				<img src={CubeRight?.src} alt="Cube Right" />
			</div>
		</motion.section>
	);
};

const Contact = () => {
	const ContactSection = React.useRef(null);

	const controls = useAnimation();
	const [ref, inView] = useInView();
	React.useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const Scroll = () => {
		ContactSection?.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<motion.section
			id="contact"
			className="relative py-16 radial-shadow before:-top-1/2 lg:py-20 before:scale-150 lg:before:scale-100"
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={sectionVariants}
		>
			<div className="container-sm">
				<Button className="mx-auto" onClick={Scroll}>
					Contact us
				</Button>
				<div ref={ContactSection} className="pt-32">
					<ArticleRow>
						<div className="text-center">
							<LinedTitle className="text-center before:-translate-x-1/2 before:!left-1/2">
								Yasmine khouri
							</LinedTitle>
							<p className="!mb-4 space-y-1.5">
								<strong className="block">
									Founding Partner
								</strong>
								<a
									href="tel:+33 6 14 42 23 84"
									className="block mx-auto w-max underline-offset-2 hover:underline"
								>
									+33 6 14 42 23 84
								</a>
								<a
									href="mailto:yasmine.khouri@gladstone-search.com"
									className="block mx-auto w-max texgt-sm underline-offset-2 hover:underline"
								>
									yasmine.khouri@gladstone-search.com
								</a>
							</p>
							<div className="flex items-center justify-center gap-3">
								<a
									className="transition-transform hover:-translate-y-0.5"
									href="https://www.linkedin.com/in/yasmine-khouri-3005b531/"
									target="_blank"
									rel="noreferrer"
								>
									<Icon name="linkedin" />
								</a>
								<a
									className="transition-transform hover:-translate-y-0.5"
									download
									href="/files/Gladstone.Yasmine-Khouri.vcf"
								>
									<Icon name="contact" className="!w-9" />
								</a>
							</div>
						</div>

						<div className="text-center radial-shadow lg:before:hidden before:scale-[2] before:max-h-[50vh] before:opacity-40 before:translate-y-1/4__">
							<LinedTitle className="text-center before:-translate-x-1/2 before:!left-1/2">
								Hanna ehrlich
							</LinedTitle>
							<p className="space-y-2 !mb-4">
								<strong className="block">
									Founding Partner
								</strong>
								<a
									href="tel:+33 6 73 90 82 49"
									className="block mx-auto w-max underline-offset-2 hover:underline"
								>
									+33 6 73 90 82 49
								</a>
								<a
									href="mailto:hanna.ehrlich@gladstone-search.com"
									className="block mx-auto w-max texgt-sm underline-offset-2 hover:underline"
								>
									hanna.ehrlich@gladstone-search.com
								</a>
							</p>
							<div className="flex items-center justify-center gap-3">
								<a
									className="transition-transform hover:-translate-y-0.5"
									href="https://www.linkedin.com/in/hannaehrlich/"
									target="_blank"
									rel="noreferrer"
								>
									<Icon name="linkedin" />
								</a>
								<a
									className="transition-transform hover:-translate-y-0.5"
									download
									href="/files/Gladstone.Hanna-Ehrlich.vcf"
								>
									<Icon name="contact" className="!w-9" />
								</a>
							</div>
						</div>
					</ArticleRow>
				</div>
			</div>
		</motion.section>
	);
};
