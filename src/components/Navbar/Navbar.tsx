import React, { useState } from 'react';
import ThemeComponent from '../ThemeComponent/ThemeComponent';
import NavbarStyles from './Navbar.module.css';
import { useMenuNavbar } from '../../hooks/useMenuNavbar';
import { useWindowSize } from '../../hooks/useWindowSize';
import { ScrollToSection } from '../../App';

interface Props {
    scrollToSection: ScrollToSection;
}

const Navbar: React.FC<Props> = ({ scrollToSection }) => {
    const { width } = useWindowSize();
    const [openMenu, setOpenMenu] = useState(false);
    const { changeSelectedItem, items } = useMenuNavbar();
    const isMdScreen = width > 768;
    const isMenuOpen = openMenu || isMdScreen;
    const toggleMenu = () => setOpenMenu(prev => !prev);

    return (
        <nav className={`${NavbarStyles.bg_gradient_menu} z-10 fixed center_x_position_fixed mt-2 mb-2 py-3 md:py-0 top-2 shadow-[0px_0px_8px_-4px_var(--primary-900)] rounded-full w-standard text-slate-100 flex flex-col md:flex-row gap-4 md:gap-2 lg:gap-5 xl:gap-10 md:pl-10 md:pr-1.5 px-4`}>
            <button className="text-xl lg:text-2xl font-medium min-w-max hidden md:block">Ronny Garcia</button>
            <section className="flex md:hidden w-full justify-between items-center">
                <button className="text-2xl drop-shadow-[1px_1px_2px_var(--primary-900)] font-medium min-w-max block md:hidden">RG</button>
                <section className="flex justify-center items-center gap-5">
                    {!isMdScreen && <ThemeComponent />}
                    <button
                        onClick={toggleMenu}
                        className={`${openMenu ? NavbarStyles.hamburger_button_selected : ''} duration-500 ${NavbarStyles.hamburger_button} flex md:hidden outline-none focus:outline-none z-[2]`}
                    >
                        <span className=""></span>
                        <span className=""></span>
                        <span className=""></span>
                    </button>
                </section>
            </section>

            <section className={`flex flex-col md:flex-row justify-center md:justify-between items-center rounded-b-xl md:rounded-none w-[200px] md:w-full absolute top-12 left-4 md:static px-2 bg-black/90 md:bg-transparent md:px-0 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                <ul className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:h-[70px] text-base gap-2 md:gap-0 xl:gap-5 justify-center md:justify-start w-full`}>
                    {items.map((item) => {
                        const { id, name, status } = item;
                        return (
                            <li key={id} className={`mb-1 py-2 md:py-0 ${NavbarStyles.item_base} ${status ? NavbarStyles.item_active : NavbarStyles.item_inactive}`}>
                                <button
                                    className="w-full text-start"
                                    onClick={() => {
                                        scrollToSection[id]();
                                        changeSelectedItem(id);
                                    }}
                                >
                                    {name}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {isMdScreen && <ThemeComponent />}
            </section>
            <button
                className="hidden md:block h-14 md:h-auto min-w-max text-base font-semibold bg-primary-900/20 px-10 md:px-5 lg:px-10 my-2 rounded-full border-2 border-primary-900/20 hover:bg-transparent hover:text-primary-900/70 duration-300"
            >
                Contact me
            </button>
        </nav>
    );
};

export default Navbar;
