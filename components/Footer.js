import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Icon from "./ui/Icon";

const Footer = () => {
	const router = useRouter();
	return (
		<footer className="pt-16__ xl:pt-40__">
			<div className="container">
				<div className="relative mx-auto max-full w-6xl">
					<svg
						className="hidden lg:block"
						// width="1042"
						// height="287"
						viewBox="0 0 1042 287"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M731.098 43.2131C723.284 42.5214 715.415 42.0202 707.424 42.0202H581.929C642.483 47.3479 699.534 73.7879 742.872 117.11C791.596 165.816 819.002 231.877 819.069 300.782V300.783V433.9C819.069 502.85 791.693 568.976 742.962 617.737C698.673 662.052 640.042 688.726 577.979 693.234H707.424C715.414 693.234 723.283 692.732 731.098 692.041C780.061 664.238 820.788 623.954 849.133 575.288C877.496 526.591 892.447 471.243 892.462 414.884V320.37C892.447 264.01 877.496 208.662 849.133 159.965C820.788 111.3 780.062 71.0162 731.098 43.2131ZM559.202 692.917C559.204 692.917 559.207 692.917 559.21 692.917C627.869 692.9 693.711 665.603 742.255 617.03C790.799 568.457 818.069 502.585 818.069 433.9V300.783C818.002 232.143 790.702 166.335 742.165 117.817C693.629 69.2986 627.825 42.0369 559.21 42.0202H482.79C414.119 42.0202 348.261 69.3093 299.704 117.884C251.146 166.459 223.867 232.341 223.867 301.036V434.154C223.867 502.85 251.146 568.731 299.704 617.306C348.159 665.779 413.841 693.055 482.355 693.17C482.441 693.019 482.603 692.917 482.79 692.917H559.202ZM559.21 41.0202H482.79H334.512C327.223 41.0202 320.041 41.4351 312.923 42.0299C360.365 15.3245 413.891 1.27835 468.352 1.26074C468.424 1.30105 468.507 1.32403 468.596 1.32403H573.467C573.556 1.32403 573.639 1.30108 573.711 1.26082C628.128 1.30012 681.609 15.3452 729.014 42.0299C721.895 41.4351 714.713 41.0202 707.424 41.0202H559.21ZM298.997 117.177C342.343 73.8156 399.422 47.3507 460.008 42.0202H334.512C326.522 42.0202 318.653 42.5214 310.839 43.213C261.896 71.0343 221.189 111.324 192.857 159.986C164.507 208.68 149.56 264.019 149.538 320.37V414.884C149.56 471.234 164.507 526.573 192.857 575.267C221.189 623.93 261.896 664.22 310.839 692.041C318.653 692.732 326.522 693.234 334.512 693.234H460.74C399.882 688.053 342.517 661.549 298.997 618.013C250.252 569.251 222.867 503.115 222.867 434.154V301.036C222.867 232.076 250.252 165.94 298.997 117.177ZM482.79 694.234C483.001 694.234 483.182 694.102 483.255 693.917H558.744C558.817 694.102 558.998 694.234 559.21 694.234H707.424C714.713 694.234 721.895 693.819 729.014 693.224C685.665 717.625 637.237 731.457 587.658 733.676H573.467H573.404H468.596L468.585 733.676L468.578 733.676C468.573 733.676 468.569 733.677 468.564 733.677C468.554 733.676 468.543 733.676 468.532 733.676H454.279C404.7 731.457 356.271 717.625 312.923 693.224C320.041 693.819 327.223 694.234 334.512 694.234H482.79ZM733.518 691.808C796.959 685.394 855.834 655.775 898.82 608.587C942.328 560.826 966.413 498.518 966.347 433.901V433.9V300.783C966.335 236.22 942.213 173.99 898.713 126.296C855.615 79.0427 796.575 49.4345 732.984 43.1387C781.481 70.9995 821.833 111.106 849.997 159.462C878.449 208.312 893.447 263.833 893.462 320.37V414.884C893.447 471.42 878.449 526.942 849.997 575.791C821.936 623.97 781.777 663.96 733.518 691.808ZM602.397 733.676C647.704 729.54 691.716 715.719 731.405 693.017C795.934 687.05 855.908 657.179 899.559 609.26C943.235 561.315 967.414 498.767 967.347 433.9V300.782C967.335 235.97 943.12 173.501 899.452 125.622C855.784 77.744 795.812 47.911 731.296 41.9729C731.201 41.9641 731.109 41.9827 731.029 42.0223C690.354 18.83 645.155 4.95461 598.684 1.26074H721.682C806.284 1.26074 887.422 34.881 947.245 94.7256C1007.07 154.57 1040.68 235.737 1040.68 320.37V414.567C1040.68 499.2 1007.07 580.367 947.245 640.211C887.422 700.056 806.284 733.676 721.682 733.676H602.397ZM308.421 691.807C260.181 663.942 220.041 623.946 191.992 575.77C163.553 526.924 148.56 471.411 148.538 414.884V320.37C148.56 263.842 163.553 208.33 191.992 159.483C220.041 111.307 260.181 71.3117 308.421 43.4461C245.082 49.863 186.294 79.406 143.325 126.471C99.8335 174.109 75.6792 236.268 75.5894 300.783V433.901C75.5373 498.514 99.628 560.814 143.133 608.572C186.116 655.757 244.984 685.381 308.421 691.807ZM573.481 0.260742L573.404 0.260752C573.316 0.260742 573.233 0.283718 573.161 0.324029H468.776C468.704 0.283718 468.621 0.260742 468.533 0.260752L468.455 0.260742H320.254C235.392 0.277574 154.01 34.0087 94.0029 94.0372C33.996 154.066 0.27708 235.477 0.260254 320.37V414.567C0.27708 499.46 33.996 580.871 94.0029 640.899C154.01 700.928 235.392 734.659 320.254 734.676H454.257C459.006 734.888 463.766 734.994 468.533 734.993C468.744 734.993 468.925 734.862 468.998 734.676H572.939C573.012 734.862 573.193 734.993 573.404 734.993C578.171 734.994 582.931 734.888 587.68 734.676H721.682C806.55 734.676 887.941 700.95 947.952 640.918C1007.96 580.886 1041.68 499.465 1041.68 414.567V320.37C1041.68 235.472 1007.96 154.051 947.952 94.0187C887.941 33.9865 806.55 0.260742 721.682 0.260742H573.481ZM310.532 42.2366C246.106 48.2079 186.221 78.0025 142.586 125.797C98.927 173.619 74.6795 236.018 74.5894 300.782V300.783V433.9C74.5371 498.763 98.7207 561.303 142.394 609.245C186.042 657.161 246.008 687.036 310.532 693.017C350.221 715.719 394.233 729.54 439.54 733.676H320.255C235.657 733.659 154.53 700.034 94.7101 640.193C34.8907 580.352 1.27703 499.195 1.26025 414.567V320.37C1.27703 235.742 34.8907 154.585 94.7101 94.7442C154.53 34.9032 235.657 1.27752 320.255 1.26074H443.252C396.639 4.96597 351.305 18.9155 310.532 42.2366Z"
							fill="#FFE1E1"
						/>
					</svg>
					<div className="inset-0 grid lg:absolute place-items-center">
						<div className="max-w-lg mx-auto text-center lg:max-w-xl">
							<div className="flex flex-col gap-3 mt-20 text-xs tracking-[0.25em] font-medium">
								<span className="uppercase tracking-[0.35em]">
									Gladstone
								</span>
								<span>
									16 Cours Albert 1<sup>er</sup> 75008 Paris
								</span>
								<Link
									href={
										router.pathname.startsWith("/en")
											? "/en/privacy-policy"
											: "/politique-de-confidentialite"
									}
								>
									<a className="underline-offset-2 hover:underline">
										{router.pathname.startsWith("/en")
											? "Privacy policy"
											: "Politique de confidentialité"}
									</a>
								</Link>
								<Link
									href={
										router.pathname.startsWith("/en")
											? "/en/legal-notice"
											: "/mentions-legales"
									}
								>
									<a className="underline-offset-2 hover:underline">
										{router.pathname.startsWith("/en")
											? "Legal notice"
											: "Mentions légales"}
									</a>
								</Link>
							</div>
							<a
								className="block w-max mx-auto mt-8 transition-transform hover:-translate-y-0.5"
								href="https://www.linkedin.com/company/gladstone-search/"
								target="_blank"
								rel="noreferrer"
							>
								<Icon name="linkedin" />
							</a>
							<p className="pb-3 mt-6 text-xs font-normal tracking-widest uppercase">
								{router.pathname.startsWith("/en")
									? "Copyright © 2022 Gladstone all rights reserved | design"
									: "Copyright © 2022 Gladstone tous droits réservés | Design"}{" "}
								<a
									className="underline"
									target="_blank"
									rel="noreferrer"
									href="https://www.magali-cariguel.com/"
								>
									Magali Cariguel
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="relative mt-8 lg:hidden">
					<svg
						className="lg:hidden"
						// width="1042"
						// height="287"
						viewBox="0 0 1042 287"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M731.098 43.2131C723.284 42.5214 715.415 42.0202 707.424 42.0202H581.929C642.483 47.3479 699.534 73.7879 742.872 117.11C791.596 165.816 819.002 231.877 819.069 300.782V300.783V433.9C819.069 502.85 791.693 568.976 742.962 617.737C698.673 662.052 640.042 688.726 577.979 693.234H707.424C715.414 693.234 723.283 692.732 731.098 692.041C780.061 664.238 820.788 623.954 849.133 575.288C877.496 526.591 892.447 471.243 892.462 414.884V320.37C892.447 264.01 877.496 208.662 849.133 159.965C820.788 111.3 780.062 71.0162 731.098 43.2131ZM559.202 692.917C559.204 692.917 559.207 692.917 559.21 692.917C627.869 692.9 693.711 665.603 742.255 617.03C790.799 568.457 818.069 502.585 818.069 433.9V300.783C818.002 232.143 790.702 166.335 742.165 117.817C693.629 69.2986 627.825 42.0369 559.21 42.0202H482.79C414.119 42.0202 348.261 69.3093 299.704 117.884C251.146 166.459 223.867 232.341 223.867 301.036V434.154C223.867 502.85 251.146 568.731 299.704 617.306C348.159 665.779 413.841 693.055 482.355 693.17C482.441 693.019 482.603 692.917 482.79 692.917H559.202ZM559.21 41.0202H482.79H334.512C327.223 41.0202 320.041 41.4351 312.923 42.0299C360.365 15.3245 413.891 1.27835 468.352 1.26074C468.424 1.30105 468.507 1.32403 468.596 1.32403H573.467C573.556 1.32403 573.639 1.30108 573.711 1.26082C628.128 1.30012 681.609 15.3452 729.014 42.0299C721.895 41.4351 714.713 41.0202 707.424 41.0202H559.21ZM298.997 117.177C342.343 73.8156 399.422 47.3507 460.008 42.0202H334.512C326.522 42.0202 318.653 42.5214 310.839 43.213C261.896 71.0343 221.189 111.324 192.857 159.986C164.507 208.68 149.56 264.019 149.538 320.37V414.884C149.56 471.234 164.507 526.573 192.857 575.267C221.189 623.93 261.896 664.22 310.839 692.041C318.653 692.732 326.522 693.234 334.512 693.234H460.74C399.882 688.053 342.517 661.549 298.997 618.013C250.252 569.251 222.867 503.115 222.867 434.154V301.036C222.867 232.076 250.252 165.94 298.997 117.177ZM482.79 694.234C483.001 694.234 483.182 694.102 483.255 693.917H558.744C558.817 694.102 558.998 694.234 559.21 694.234H707.424C714.713 694.234 721.895 693.819 729.014 693.224C685.665 717.625 637.237 731.457 587.658 733.676H573.467H573.404H468.596L468.585 733.676L468.578 733.676C468.573 733.676 468.569 733.677 468.564 733.677C468.554 733.676 468.543 733.676 468.532 733.676H454.279C404.7 731.457 356.271 717.625 312.923 693.224C320.041 693.819 327.223 694.234 334.512 694.234H482.79ZM733.518 691.808C796.959 685.394 855.834 655.775 898.82 608.587C942.328 560.826 966.413 498.518 966.347 433.901V433.9V300.783C966.335 236.22 942.213 173.99 898.713 126.296C855.615 79.0427 796.575 49.4345 732.984 43.1387C781.481 70.9995 821.833 111.106 849.997 159.462C878.449 208.312 893.447 263.833 893.462 320.37V414.884C893.447 471.42 878.449 526.942 849.997 575.791C821.936 623.97 781.777 663.96 733.518 691.808ZM602.397 733.676C647.704 729.54 691.716 715.719 731.405 693.017C795.934 687.05 855.908 657.179 899.559 609.26C943.235 561.315 967.414 498.767 967.347 433.9V300.782C967.335 235.97 943.12 173.501 899.452 125.622C855.784 77.744 795.812 47.911 731.296 41.9729C731.201 41.9641 731.109 41.9827 731.029 42.0223C690.354 18.83 645.155 4.95461 598.684 1.26074H721.682C806.284 1.26074 887.422 34.881 947.245 94.7256C1007.07 154.57 1040.68 235.737 1040.68 320.37V414.567C1040.68 499.2 1007.07 580.367 947.245 640.211C887.422 700.056 806.284 733.676 721.682 733.676H602.397ZM308.421 691.807C260.181 663.942 220.041 623.946 191.992 575.77C163.553 526.924 148.56 471.411 148.538 414.884V320.37C148.56 263.842 163.553 208.33 191.992 159.483C220.041 111.307 260.181 71.3117 308.421 43.4461C245.082 49.863 186.294 79.406 143.325 126.471C99.8335 174.109 75.6792 236.268 75.5894 300.783V433.901C75.5373 498.514 99.628 560.814 143.133 608.572C186.116 655.757 244.984 685.381 308.421 691.807ZM573.481 0.260742L573.404 0.260752C573.316 0.260742 573.233 0.283718 573.161 0.324029H468.776C468.704 0.283718 468.621 0.260742 468.533 0.260752L468.455 0.260742H320.254C235.392 0.277574 154.01 34.0087 94.0029 94.0372C33.996 154.066 0.27708 235.477 0.260254 320.37V414.567C0.27708 499.46 33.996 580.871 94.0029 640.899C154.01 700.928 235.392 734.659 320.254 734.676H454.257C459.006 734.888 463.766 734.994 468.533 734.993C468.744 734.993 468.925 734.862 468.998 734.676H572.939C573.012 734.862 573.193 734.993 573.404 734.993C578.171 734.994 582.931 734.888 587.68 734.676H721.682C806.55 734.676 887.941 700.95 947.952 640.918C1007.96 580.886 1041.68 499.465 1041.68 414.567V320.37C1041.68 235.472 1007.96 154.051 947.952 94.0187C887.941 33.9865 806.55 0.260742 721.682 0.260742H573.481ZM310.532 42.2366C246.106 48.2079 186.221 78.0025 142.586 125.797C98.927 173.619 74.6795 236.018 74.5894 300.782V300.783V433.9C74.5371 498.763 98.7207 561.303 142.394 609.245C186.042 657.161 246.008 687.036 310.532 693.017C350.221 715.719 394.233 729.54 439.54 733.676H320.255C235.657 733.659 154.53 700.034 94.7101 640.193C34.8907 580.352 1.27703 499.195 1.26025 414.567V320.37C1.27703 235.742 34.8907 154.585 94.7101 94.7442C154.53 34.9032 235.657 1.27752 320.255 1.26074H443.252C396.639 4.96597 351.305 18.9155 310.532 42.2366Z"
							fill="#FFE1E1"
						/>
					</svg>
					<a
						className="absolute block mx-auto -translate-x-1/2 -translate-y-2 left-1/2 top-1/2 w-max"
						href="https://www.linkedin.com/company/gladstone-search/"
						target="_blank"
						rel="noreferrer"
					>
						<Icon name="linkedin" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
