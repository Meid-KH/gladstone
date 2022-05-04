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
						Ce site est produit par la société GLADSTONE, société
						par actions simplifiée à associé unique, immatriculée au
						RCS de Paris sous le numéro 890 976 657 dont le siège
						social est situé au 16 Cours Albert 1er 75008 Paris,
						contact : 0183756401 et contact@gladstone-search.com
						(«GLADSTONE »)
					</p>
					<p>
						L'utilisation du Gladstone ne vous confère aucun droit.
						Ces droits restent la propriété exclusive de Gladstone.
						Ainsi, tous les textes, images, logos, documents
						téléchargeables et autres éléments reproduits sur le
						site sont réservés et protégés par le droit de la
						propriété intellectuelle. A ce titre et conformément au
						Code de la Propriété Intellectuelle, seule l'utilisation
						pour un usage privé est autorisée et toute autre
						utilisation est constitutive de contrefaçon et/ou
						d'atteinte aux droits d'auteurs, sanctionnées par ledit
						Code. En conséquence, vous ne pouvez en aucun cas et
						d'aucune manière, reproduire, représenter, diffuser,
						commercialiser, modifier tout ou partie du site sans
						l'accord préalable et exprès des auteurs. Toute
						utilisation illicite de tout ou partie du site
						(piratage, contrefaçon, etc.) pourra donner lieu à des
						poursuites.
					</p>

					<LinedTitle className="mt-12 text-2xl lg:mt-16">
						<h2>Hébergeur</h2>
					</LinedTitle>
					<p>Ce site est hébergé par la société OVH</p>
					<ul>
						<li>SAS OVH - https://www.ovh.com/</li>
						<li>2 rue Kellermann</li>
						<li>BP 80157</li>
						<li>59100 Roubaix</li>
					</ul>

					<LinedTitle className="mt-12 text-2xl lg:mt-16">
						<h2>EDITEUR</h2>
					</LinedTitle>
					<p>
						BACKUP, dont le siège social est situé : 25, rue du clos
						75020. Immatriculée au RCS de Paris sous le numéro :
						899414767 00017 Site internet : collectif-backup.fr
					</p>

					<LinedTitle className="mt-12 text-2xl lg:mt-16">
						<h2>INFORMATIONS SUR LES SERVICES PROPOSÉS</h2>
					</LinedTitle>
					<p>
						GLADSTONE est une société fournissant des services de
						placement, au sens de l'article L5321-1 et suivants du
						Code du travail, visant à rapprocher les offres et les
						demandes d'emploi.
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
