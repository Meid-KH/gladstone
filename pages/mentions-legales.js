import React from "react";
import LinedTitle from "../components/ui/LinedTitle";
import CubeLeft from "../assets/img/cube-left.png";
import CubeRight from "../assets/img/cube-right.png";

const Politics = () => {
	return (
		<section className="relative py-16 radial-shadow before:!top-[10vh] before:!h-[100vh] lg:py-20">
			<div className="container max-w-[1015px]__">
				<h1 className="mb-20 text-4xl font-light tracking-widest text-center uppercase">
					Mentions légales
				</h1>

				<div className="content">
					<p>
						Ce site est produit par la société{" "}
						<strong>GLADSTONE</strong>, société par actions
						simplifiée, immatriculée au RCS de Paris sous le numéro
						890 976 657 dont le siège social est situé au 16 Cours
						Albert 1er 75008 Paris, contact :{" "}
						<a
							href="tel:+33183756401"
							className="underline-offset-2 hover:underline"
						>
							+33 1 83 75 64 01
						</a>{" "}
						et{" "}
						<a
							href="mailto:contact@gladstone-search.com"
							className="underline-offset-2 hover:underline"
						>
							contact@gladstone-search.com
						</a>{" "}
						(« <strong>GLADSTONE</strong> »)
					</p>
					<p>
						L'utilisation du nom <strong>GLADSTONE</strong> ne vous
						confère aucun droit. Ces droits restent la propriété
						exclusive de <strong>GLADSTONE</strong>. Ainsi, tous les
						textes, images, logos, documents téléchargeables et
						autres éléments reproduits sur le site sont réservés et
						protégés par le droit de la propriété intellectuelle. À
						ce titre et conformément au Code de la Propriété
						Intellectuelle, seule l'utilisation pour un usage privé
						est autorisée et toute autre utilisation est
						constitutive de contrefaçon et/ou d'atteinte aux droits
						d'auteurs, sanctionnées par ledit Code. En conséquence,
						vous ne pouvez en aucun cas et d'aucune manière,
						reproduire, représenter, diffuser, commercialiser,
						modifier tout ou partie du site sans l'accord préalable
						et exprès des auteurs. Toute utilisation illicite de
						tout ou partie du site (piratage, contrefaçon, etc.)
						pourra donner lieu à des poursuites.
					</p>

					<LinedTitle className="mt-12 text-2xl lg:mt-16">
						<h2>Hébergeur</h2>
					</LinedTitle>
					<p>Ce site est hébergé par la société OVH</p>
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
						<h2>EDITEUR</h2>
					</LinedTitle>
					<p>
						BACKUP, dont le siège social est situé : 25, rue du clos
						75020.
					</p>
					<p>
						Immatriculée au RCS de Paris sous le numéro : 899414767
						00017
					</p>
					<p>
						Site internet :{" "}
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
						<h2>INFORMATIONS SUR LES SERVICES PROPOSÉS</h2>
					</LinedTitle>
					<p>
						<strong>GLADSTONE</strong> est une société fournissant
						des services de placement, au sens de l'article L5321-1
						et suivants du Code du travail, visant à rapprocher les
						offres et les demandes d'emploi.
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
