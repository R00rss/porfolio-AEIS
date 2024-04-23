import { Items } from "../models/Menu";

export const DEFAULT_ITEMS: Items[] = [
    {
        id: "Home",
        name: "Home",
        link: "/",
        status: true
    },
    {
        id: "AboutMe",
        name: "About",
        link: "/",
        status: true
    },
    {
        id: "Projects",
        name: "Projects",
        link: "/",
        status: false
    },
    {
        id: "Blog",
        name: "Blog",
        link: "/",
        status: false
    },
    {
        id: "Contact",
        name: "Contact",
        link: "/",
        status: false
    }
]

export const NAVBAR_HEIGHT = 70;
export const ICON_COLOR = "#ffffff"
 