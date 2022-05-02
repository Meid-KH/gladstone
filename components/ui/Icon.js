import React from "react";

const Icons = {
	close: () => (
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
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	),
	contact: () => (
		<svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.1 34.1">
			<path
				d="M38.6,30.4H7.1c-1.5,0-2.8-1.2-2.8-2.8V6.2c0-1.5,1.2-2.8,2.8-2.8h31.5c1.5,0,2.8,1.2,2.8,2.8V27.7c-.1,1.5-1.3,2.7-2.8,2.7Z"
				fill="#1a1433"
				stroke="#f7dee0"
				strokeMiterlimit="10"
			/>
			<line
				x1="24.6"
				y1="11.3"
				x2="35"
				y2="11.3"
				fill="none"
				stroke="#f7dee0"
				strokeLinecap="round"
				strokeMiterlimit="10"
			/>
			<line
				x1="24.6"
				y1="22.5"
				x2="35"
				y2="22.5"
				fill="none"
				stroke="#f7dee0"
				strokeLinecap="round"
				strokeMiterlimit="10"
			/>
			<line
				x1="24.6"
				y1="16.9"
				x2="35"
				y2="16.9"
				fill="none"
				stroke="#f7dee0"
				strokeLinecap="round"
				strokeMiterlimit="10"
			/>
			<circle cx="14.8" cy="13.4" r="3.1" fill="#f7dee0" />
			<path
				d="M20.5,23.1c-.1-3.1-2.6-5.6-5.7-5.6s-5.7,2.5-5.8,5.6h11.5Z"
				fill="#f7dee0"
			/>
		</svg>
	),
	linkedin: () => (
		<svg viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 1.93405C0 0.866692 0.918204 0 2.05067 0H25.6941C26.827 0 27.7448 0.866692 27.7448 1.93405V25.0664C27.7448 26.1341 26.827 27 25.6941 27H2.05067C0.918204 27 0 26.1341 0 25.0668V1.93364V1.93405Z"
				fill="#FFE1E1"
			/>
			<path
				d="M8.41155 22.6016V10.4095H4.22079V22.6016H8.41155ZM6.31702 8.74501C7.77805 8.74501 8.68782 7.80897 8.68782 6.63882C8.6604 5.44257 7.77805 4.53223 6.34485 4.53223C4.91166 4.53223 3.97363 5.44257 3.97363 6.63882C3.97363 7.80897 4.88298 8.74501 6.2896 8.74501H6.31702ZM10.7309 22.6016H14.9212V15.7936C14.9212 15.4298 14.9491 15.0652 15.0596 14.805C15.3624 14.0765 16.052 13.3228 17.2106 13.3228C18.7265 13.3228 19.3334 14.4408 19.3334 16.0799V22.6016H23.5238V15.6109C23.5238 11.8664 21.4571 10.1236 18.6995 10.1236C16.4392 10.1236 15.4463 11.3471 14.8947 12.1775H14.9225V10.4099H10.7322C10.787 11.5519 10.7309 22.6016 10.7309 22.6016Z"
				fill="#1A1534"
			/>
		</svg>
	),
	// plus: () => <i className="bg-red-400">plus</i>,
	default: () => (
		<i className="text-sm font-light underline bg-red-400__">icon</i>
	),
};

const Icon = ({ name, className = "" }) => {
	const IconElem = Icons[name] ? Icons[name] : Icon.default;
	return (
		<span className={`inline-block flex-shrink-0 w-6 ${className}`}>
			<IconElem />
		</span>
	);
};

export default Icon;
