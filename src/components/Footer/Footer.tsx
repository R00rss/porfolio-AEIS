import { ScrollToSection } from "../../App";
import { useMenuNavbar } from "../../hooks/useMenuNavbar";
import FooterStyles from "../Navbar/Navbar.module.css";

interface Pros {
    scrollToSection: ScrollToSection
}

export default function Footer({ scrollToSection }: Pros) {
    const currentDate = new Date().getFullYear();
    const { items, changeSelectedItem } = useMenuNavbar()
    const fullName = "Ronny Garcia"
    return (
        <footer className="
        text-slate-100
        w-standard
        mx-auto
        ">
            <nav className="flex justify-between p-5 border-t-2 mt-5 border-primary-900">
                <button className="text-2xl">{fullName}</button>
                <ul className="flex gap-10 text-base tracking-wide">
                    {items.map((item) => {
                        const { name, status } = item
                        return (
                            <li key={name} className={`h-20 ${FooterStyles.item_base} ${status ? FooterStyles.item_active : FooterStyles.item_inactive}`}>
                                <button onClick={() => {
                                    scrollToSection[name]()
                                    changeSelectedItem(name)
                                }}>{name}</button>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <ul className="flex justify-end gap-10 text-slate-100/40 font-semibold">
                <li>&#169; {currentDate} {fullName}. All rights reserved</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
            </ul>
        </footer>
    )
}
