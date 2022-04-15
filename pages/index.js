import Head from "next/head";
import Image from "next/image";
import Logo from "../components/Logo";
import LinedTitle from "../components/ui/LinedTitle";
import ArticleRow from "../components/ui/ArticleRow";
import Title from "../components/ui/Title";
import Cubes from "../assets/img/cube-bg.png";
import CubeLeft from "../assets/img/cube-left.png";
import CubeRight from "../assets/img/cube-right.png";
import ApproachImg from "../assets/img/appreach-img.png";
import Yasmine from "../assets/img/yasmine-khouri.png";
import Hanna from "../assets/img/hanna-ehrlich.png";

export default function Home() {
	// console.log(Cubes.src);
	return (
		<>
			<Intro />
			<Activity />
			<OurApproach />
			<Team />
			<Contact />
		</>
	);
}

const Intro = () => (
	<section
		className="relative h-[calc(100vh-theme(height.28))] grid place-items-center radial-shadow"
		// style={{
		// 	backgroundImage: `url(${Cubes?.src})`,
		// }}
	>
		<div className="relative space-y-6 text-center p-6">
			<div className="w-[230px] max-w-full mx-auto">
				<Logo />
			</div>
			<h1 className="inline-block uppercase text-xs tracking-[0.2em]">
				Conseil en Recrutement Juridique
			</h1>
		</div>
		<div className="absolute top-1/2 left-0 -z-10">
			<img src={CubeLeft?.src} alt="Cube Left" />
		</div>
		<div className="absolute top-1/4 right-0 -z-10">
			<img src={CubeRight?.src} alt="Cube Right" />
		</div>
	</section>
);

const Activity = () => (
	<section id="activity" className="py-16 lg:py-20">
		<div className="container-sm">
			<div className="text-center">
				<Title>Activité</Title>
				<p className="lg:max-w-3xl mx-auto tracking-wider text-lg">
					GLADSTONE est un cabinet d'Executive Search spécialisé dans
					le recrutement juridique qui accompagne les cabinets
					d'avocats, les directions juridiques, les banques et les
					fonds d'investissement dans le renforcement de leurs équipes
					juridiques. Nos recrutements portent sur des postes
					nécessitant une connaissance du droit français, tant en
					France qu'à l'étranger. Nous travaillons indifféremment en
					français ou en anglais.
				</p>
			</div>

			<ArticleRow className="mt-12 lg:mt-28">
				<div className="text-justify__">
					<LinedTitle>
						<h3>Cabinets d'avocats</h3>
					</LinedTitle>
					<p>
						Nous avons un long historique de{" "}
						<strong>
							recrutement d'équipes, d'associés et de
							collaborateurs
						</strong>{" "}
						dans tous les domaines du droit des affaires : M&A,
						Private Equity, Fiscalité, IT, IP, Data Protection,
						Social, Public, Immobilier, Restructuring, Formation de
						Fonds, Financement, Projets et Financement de Projets,
						Contentieux...
					</p>
					<p>
						Nous intervenons pour des{" "}
						<strong>
							cabinets d'avocats internationaux et français
						</strong>
						. Nos interlocuteurs sont, selon les cas, les Managing
						Partners, Global Heads of Practice, Comités Exécutifs,
						Heads of Lateral Recruitment ou Directions des
						Ressources Humaines des cabinets.
					</p>
					<p>
						Nous avons également une forte activité de{" "}
						<strong>conseil stratégique</strong>, que ce soit sur la{" "}
						<strong>création de nouveaux départements</strong>, les{" "}
						<strong>projets de fusion de cabinets</strong>, ou
						encore sur les{" "}
						<strong>politiques de rémunération</strong>. Par
						ailleurs, nous sommes ravies de vous accompagner dans
						vos réflexions sur la{" "}
						<strong>parité et la diversité</strong>.
					</p>
				</div>

				<div className="text-justify__">
					<LinedTitle>
						<h3>
							Recrutement juridique en entreprises, banques et
							fonds d'investissement
						</h3>
					</LinedTitle>
					<p>
						Nous recrutons à tous niveaux de seniorité et dans tous
						les domaines d'activité. Notre expérience avec les
						directions juridiques d'entreprises nous a mené à
						développer une connaissance approfondie des secteurs de
						la Santé, de l'IT, du Luxe, et de l'Art. Nous avons
						également assisté à plusieurs reprises des banques et
						fonds d'investissement tant en France qu'à
						l'international.
					</p>
					<LinedTitle>
						<h3>Candidats</h3>
					</LinedTitle>
					<p>
						GLADSTONE accompagne les avocats et les juristes
						souhaitant discuter de leur projet professionnel. Nous
						sommes là pour vous permettre d'avoir une vision
						approfondie du marché, vous conseiller et vous éclairer
						sur les possibilités d'évolution qui peuvent s'offrir à
						vous.
					</p>
				</div>
			</ArticleRow>
		</div>
	</section>
);

const OurApproach = () => (
	<section
		id="our-approach"
		className="relative radial-shadow before:-translate-y-1/4 py-16 lg:py-20"
	>
		<div className="container-sm relative">
			<ArticleRow>
				<div className="grid place-items-center">
					<Title className="m-0">
						Notre <br /> approche
					</Title>
				</div>
				<Image
					className="rounded"
					src={ApproachImg}
					width={417}
					height={373}
					// layout="fill"
					objectFit="cover"
				/>
			</ArticleRow>
			<ArticleRow className="mt-12 lg:mt-28">
				<div>
					<div className="mb-6 lg:mb-12">
						<LinedTitle>
							<h3>Implication</h3>
						</LinedTitle>
						<p>
							<strong>
								Nous nous occupons personnellement de votre
								recherche du début à la fin
							</strong>
							. De l'identification des candidats jusqu'à
							l'acceptation de l'offre, nous considérons que
							toutes les étapes du recrutement requièrent la{" "}
							<strong>
								même exigence de qualité et d'implication
							</strong>{" "}
							de notre part.
						</p>
					</div>
					<div className="mb-6 lg:mb-12">
						<LinedTitle>
							<h3>Transparence</h3>
						</LinedTitle>
						<p>
							<strong>
								Nous ne privilégierons jamais un client à un
								autre
							</strong>
							. Notre relation avec vous est trop précieuse et
							nous ne l'envisageons que sur le long terme.
						</p>
					</div>
					<div className="mb-6 lg:mb-12">
						<LinedTitle>
							<h3>Connaissance du marche</h3>
						</LinedTitle>
						<p>
							Nous recrutons à tous les niveaux de séniorité, ce
							qui nous permet d'avoir une{" "}
							<strong>connaissance approfondie du marché</strong>.
							Nous suivons certains de nos candidats depuis plus
							de 10 ans. Beaucoup deviennent nos clients !
						</p>
					</div>
					<div className="mb-6 lg:mb-12">
						<LinedTitle>
							<h3>International</h3>
						</LinedTitle>
						<p>
							Du fait de nos parcours, nous travaillons depuis de
							nombreuses années avec des homologues en{" "}
							<strong>
								Europe, au Royaume-Uni et au Moyen-Orient
							</strong>
							. Nous avons l'expérience de missions impliquant
							plusieurs juridictions et sommes parfaitement à même
							de vous aider dans vos projets à l'étranger.
						</p>
					</div>
				</div>

				<div>
					<div className="mb-6 lg:mb-12">
						<LinedTitle>
							<h3>Recherche ciblee</h3>
						</LinedTitle>
						<p>
							Nous cherchons, véritablement. Nous procédons par
							<strong>approche directe</strong> avec les candidats
							qui nous semblent vous correspondre. Notre
							<strong>solide réseau</strong> nous permet également
							de vous proposer une{" "}
							<strong>
								sélection ciblée de profils afin de vous faire
								gagner du temps
							</strong>
							. Nous vous présenterons le bon nombre de candidats,
							ni trop, ni trop peu.
						</p>
					</div>
					<div className="mb-6 lg:mb-12">
						<LinedTitle>
							<h3>Vos valeurs sont nos objectifs</h3>
						</LinedTitle>
						<p>
							Un recrutement ne peut être un succès que si les
							attentes des deux côtés sont clairement exprimées et
							les{" "}
							<strong>
								valeurs d'éthique et de travail partagées
							</strong>
							. Nous sommes <strong>vos ambassadrices</strong> et
							élaborons avec vous le{" "}
							<strong>message à transmettre aux candidats</strong>{" "}
							lors de nos approches.
						</p>
					</div>
					<div className="mb-6 lg:mb-12">
						<LinedTitle>
							<h3>Confidentialite</h3>
						</LinedTitle>
						<p>
							L'une des grandes satisfactions de notre métier est
							de créer des relations durables et de confiance avec
							nos clients et nos candidats. Ce que vous partagez
							avec nous est traité avec la plus grande
							<strong>discrétion et confidentialité</strong>.
						</p>
					</div>
				</div>
			</ArticleRow>
		</div>

		{/* Cubes */}
		<div className="absolute top-1/4 -translate-y-1/4 left-0 -z-10">
			<img src={CubeLeft?.src} alt="Cube Left" />
		</div>
		<div className="absolute top-0 -translate-y-1/4 right-0 -z-10">
			<img src={CubeRight?.src} alt="Cube Right" />
		</div>
	</section>
);

const Team = () => (
	<section
		id="team"
		className="relative radial-shadow before:-top-1/2 py-16 lg:py-20"
	>
		<div className="text-center">
			<Title className="mb-12 lg:mb-20">Équipe</Title>
		</div>
		<div className="container-sm relative">
			<ArticleRow>
				<div>
					<Image
						className="rounded max-w-full"
						src={Yasmine.src}
						width={417}
						height={376}
						objectFit="cover"
					/>
					<LinedTitle className="text-2xl mt-8 lg:mt-12">
						<h3>Yasmine khouri</h3>
					</LinedTitle>
					<p>
						Après avoir effectué ses études de droit à l'Université
						Paris II Panthéon-Assas, Yasmine commence sa carrière en
						tant qu'avocate dans un cabinet spécialisé en droit de
						la propriété intellectuelle.
					</p>
					<p>
						En 2014, elle rejoint le bureau de Paris de Fox Rodney
						et devient conseil en recrutement juridique. Elle
						intervient dans le recrutement d'associés et de
						collaborateurs pour des cabinets d'avocats
						internationaux et français. Elle y developpe une
						connaissance approfondie du marché français. Yasmine
						assiste également des directions juridiques, des banques
						et des fonds d'investissement dans leurs recrutements, à
						tous niveaux de séniorité, en France et à l'étranger.
					</p>
					<p>
						Après avoir effectué ses études de droit à l'Université
						Paris II Panthéon-Assas, Yasmine commence sa carrière en
						tant qu'avocate dans un cabinet spécialisé en droit de
						la propriété intellectuelle. En 2014, elle rejoint le
						bureau de Paris de Fox Rodney et devient conseil en
						recrutement juridique. Elle intervient dans le
						recrutement d'associés et de collaborateurs pour des
						cabinets d'avocats internationaux et français. Elle y
						developpe une connaissance approfondie du marché
						français. Yasmine assiste également des directions
						juridiques, des banques et des fonds d'investissement
						dans leurs recrutements, à tous niveaux de séniorité, en
						France et à l'étranger. Yasmine rencontre Hanna chez Fox
						Rodney. Elles travaillent ensemble 6 ans avant de
						s'associer au sein de GLADSTONE.
					</p>
				</div>

				<div>
					<Image
						className="rounded max-w-full"
						src={Hanna.src}
						width={417}
						height={376}
						objectFit="cover"
					/>
					<LinedTitle className="text-2xl mt-8 lg:mt-12">
						<h3>Hanna Ehrlich</h3>
					</LinedTitle>
					<p>
						Diplômée d'une Maîtrise d'Economie Appliquée de Paris
						Dauphine-PSL, du Magistère Juriste d'Affaires de Paris
						II Panthéon-Assas et titulaire d'un LL.M. de New York
						University, Hanna exerce d'abord chez SJ Berwin, en tant
						qu'avocate aux Barreaux de Paris et New York.
					</p>
					<p>
						Elle commence ensuite sa carrière de conseil en
						recrutement juridique chez SSQ, à Londres, puis à Paris.
						Elle établit ensuite le bureau parisien de Fox Rodney et
						restera à sa tête jusqu'à la création de GLADSTONE.
						Hanna y développe une expertise en mouvements de
						collaborateurs, d'associés et d'équipes significatifs en
						cabinets français et internationaux. Elle est intervient
						également sur des projets cross-border de recrutements
						d'associés dans plusieurs juridictions pour un même
						cabinet. Elle est aussi sollicitée par des cabinets
						d'avocats pour des conseils sur leur stratégie.
					</p>
				</div>
			</ArticleRow>
		</div>

		{/* Cubes */}
		<div className="absolute top-1/4 -translate-y-1/2 left-0 -z-10">
			<img src={CubeLeft?.src} alt="Cube Left" />
		</div>
		<div className="absolute top-0 -translate-y-1/2 right-0 -z-10">
			<img src={CubeRight?.src} alt="Cube Right" />
		</div>
	</section>
);

const Contact = () => (
	<section
		id="contact"
		className="relative radial-shadow before:-top-1/2 py-16 lg:py-20"
	></section>
);
