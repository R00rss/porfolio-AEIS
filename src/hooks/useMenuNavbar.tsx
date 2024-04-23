import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Items, SectionNames } from '../models/Menu';
import { DEFAULT_ITEMS } from '../constants/Menu';
import useDetectSection from './useDetectSection';

interface MenuNavbarContextType {
    items: Items[];
    changeSelectedItem: (index: SectionNames) => void;
}

const DEFAULT_CONTEXT: MenuNavbarContextType = {
    items: DEFAULT_ITEMS,
    changeSelectedItem: () => { },
}
const MenuNavbarContext = createContext<MenuNavbarContextType>(DEFAULT_CONTEXT);
// eslint-disable-next-line react-refresh/only-export-components
export const useMenuNavbar = () => useContext(MenuNavbarContext);
export const MenuNavbarProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<Items[]>(DEFAULT_ITEMS)
    const sectionInView = useDetectSection<SectionNames>({ offSetTop: 0 });

    useEffect(() => {
        if (sectionInView) changeSelectedItem(sectionInView)
    }, [sectionInView])

    function changeSelectedItem(sectionName: SectionNames) {
        setItems(prevItems => prevItems.map((item) => ({
            ...item,
            status: item.id === sectionName
        })));
    }

    return (
        <MenuNavbarContext.Provider value={{ items, changeSelectedItem }}>
            {children}
        </MenuNavbarContext.Provider>
    );
};
