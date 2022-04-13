import Head from "next/head";
import Image from "next/image";
import Logo from "../components/Logo";

export default function Home() {
	return (
		<div
			className="h-[calc(100vh-theme(height.28))] grid place-items-center radial-shadow"
			// style={{
			// 	background:
			// 		"radial-gradient(50% 50% at 50% 50%, rgba(233, 155, 72, 0.7) 0%, rgba(222, 196, 167, 0) 100%)",
			// }}
		>
			<div className="relative space-y-6 text-center p-6">
				<div className="w-[230px] max-w-full mx-auto">
					<Logo />
				</div>
				<span className="inline-block uppercase text-xs tracking-[0.2em]">
					Conseil en Recrutement Juridique
				</span>
			</div>
		</div>
	);
}
