import React from "react";

const Icons = {
	contact: () => (
		<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2 12.5V13H3V12.5H2ZM7 12.5V13H8V12.5H7ZM3 12.5V11.9999H2V12.5H3ZM7 11.9997V12.5H8V11.9997H7ZM5 10C6.10466 10 7 10.8952 7 11.9997H8C8 10.3427 6.65677 9 5 9V10ZM3 11.9999C3 10.8953 3.8954 10 5 10V9C3.34318 9 2 10.343 2 11.9999H3ZM5 4C3.89543 4 3 4.89543 3 6H4C4 5.44772 4.44772 5 5 5V4ZM7 6C7 4.89543 6.10457 4 5 4V5C5.55228 5 6 5.44772 6 6H7ZM5 8C6.10457 8 7 7.10457 7 6H6C6 6.55228 5.55228 7 5 7V8ZM5 7C4.44772 7 4 6.55228 4 6H3C3 7.10457 3.89543 8 5 8V7ZM1.5 3H13.5V2H1.5V3ZM14 3.5V11.5H15V3.5H14ZM13.5 12H1.5V13H13.5V12ZM1 11.5V3.5H0V11.5H1ZM1.5 12C1.22386 12 1 11.7761 1 11.5H0C0 12.3284 0.671574 13 1.5 13V12ZM14 11.5C14 11.7761 13.7761 12 13.5 12V13C14.3284 13 15 12.3284 15 11.5H14ZM13.5 3C13.7761 3 14 3.22386 14 3.5H15C15 2.67157 14.3284 2 13.5 2V3ZM1.5 2C0.671573 2 0 2.67157 0 3.5H1C1 3.22386 1.22386 3 1.5 3V2ZM9 6H12V5H9V6ZM9 9H12V8H9V9Z"
				fill="currentColor"
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