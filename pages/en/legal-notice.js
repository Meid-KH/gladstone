import React from "react";
import LinedTitle from "../../components/ui/LinedTitle";
import CubeLeft from "../../assets/img/cube-left.png";
import CubeRight from "../../assets/img/cube-right.png";

const Politics = () => {
	return (
		<section className="relative py-16 radial-shadow before:!top-[10vh] before:!h-[100vh] lg:py-20">
			<div className="container max-w-[1015px]__">
				<h1 className="mb-20 text-4xl font-light tracking-widest text-center uppercase">
					Legal notice
				</h1>

				<div className="content">
					<p>
						This website has been produced by{" "}
						<strong>GLADSTONE</strong>, a simplified joint-stock
						company, registered with the Paris RCS under the number
						890 976 657, whose head office is located at 16 Cours
						Albert 1<sup>er</sup> 75008 Paris, contact:{" "}
						<a
							href="tel:+33183756401"
							className="underline-offset-2 hover:underline"
						>
							+33 1 83 75 64 01
						</a>{" "}
						and{" "}
						<a
							href="mailto:contact@gladstone-search.com"
							className="underline-offset-2 hover:underline"
						>
							contact@gladstone-search.com
						</a>{" "}
						(“<strong>GLADSTONE</strong>”).
					</p>
					<p>
						Use of the name GLADSTONE does not entitle you to any
						rights. These rights remain the exclusive property of{" "}
						<strong>GLADSTONE</strong>. All texts, images, logos,
						downloadable documents and other elements reproduced on
						the website are reserved and protected by intellectual
						property law. As such and in accordance with the
						Intellectual Property Code, authorisation applies to
						private use only and any other use constitutes
						counterfeiting and/or infringement of copyright,
						sanctioned by the Code. Consequently, you cannot in any
						case or in any way, reproduce, represent, distribute,
						market, modify all or part of the website without the
						prior and express agreement of the authors. Any illicit
						use of all or part of the website (piracy,
						counterfeiting, etc.) could lead to prosecution.
					</p>

					<LinedTitle className="mt-12 text-2xl lg:mt-16">
						<h2>Host</h2>
					</LinedTitle>
					<p>The website is hosted by OVH</p>
					<ul>
						<li>
							SAS OVH -{" "}
							<a
								href="https://www.ovh.com/"
								className="underline-offset-2 hover:underline"
								target="_blank"
								rel="noreferrer"
							>
								https://www.ovh.com/
							</a>{" "}
						</li>
						<li>2 rue Kellermann</li>
						<li>BP 80157</li>
						<li>59100 Roubaix</li>
					</ul>

					<LinedTitle className="mt-12 text-2xl lg:mt-16">
						<h2>EDITOR</h2>
					</LinedTitle>
					<p>
						BACKUP, whose head office is located at: 25, rue du clos
						75020 Paris.
					</p>
					<p>
						Registered with the Paris RCS under the number:
						899414767 00017{" "}
					</p>
					<p>
						Website:{" "}
						<a
							href="https://collectif-backup.fr/"
							className="underline-offset-2 hover:underline"
							target="_blank"
							rel="noreferrer"
						>
							collectif-backup.fr
						</a>
					</p>

					<LinedTitle className="mt-12 text-2xl lg:mt-16">
						<h2>INFORMATION ON SERVICES PROVIDED</h2>
					</LinedTitle>
					<p>
						<strong>GLADSTONE</strong> is a company providing
						employment services, as defined by article L5321-1 et
						seq. of the French employment code, aimed at matching
						offers and job applications.
					</p>
				</div>
			</div>
			<div className="max-w-[35vw] absolute left-0 top-[35vh]  lg:top-96 -z-10">
				<img src={CubeLeft?.src} alt="Cube Left" />
			</div>
			<div className="max-w-[35vw] absolute right-0 top-[35vh] translate-y-1/4 lg:translate-y-0 lg:top-36 -z-10">
				<img src={CubeRight?.src} alt="Cube Right" />
			</div>
		</section>
	);
};

export default Politics;
