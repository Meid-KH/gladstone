import React from "react";
export const MenuContext = React.createContext();

export const MenuContextProvider = ({ children }) => {
	const [openMenu, setOpenMenu] = React.useState(false);
	const toggleMenu = () => setOpenMenu(!openMenu);
	// const OpenTheMenu = () => setOpenMenu(true);
	// const CloseTheMenu = () => setOpenMenu(true);
	return (
		<MenuContext.Provider value={{ openMenu, setOpenMenu, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	);
};
