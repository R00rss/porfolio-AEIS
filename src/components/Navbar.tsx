import { useState } from "react";
import ThemeComponent from "./ThemeComponent/ThemeComponent";

interface Items {
    name: string,
    link: string
    status: boolean
}

const DEFAULT_ITEMS: Items[] = [
    {
        name: "Home",
        link: "/",
        status: true
    },
    {
        name: "Projects",
        link: "/",
        status: false
    },
    {
        name: "Blog",
        link: "/",
        status: false
    },
    {
        name: "Contact",
        link: "/",
        status: false
    }
]

const STYLES_STATUS = {
    true: "border-primary-900",
    false: "border-transparent"
}

export default function Navbar() {
    const [items, setItems] = useState<Items[]>(DEFAULT_ITEMS)

    function handleChanges(index: number) {
        console.log({ index })
        const cloneItems = [...items]
        cloneItems.forEach((item, i) => item.status = i === index)
        setItems(cloneItems)
    }

    return (
        <nav className="
        sticky
        mt-5
        top-0
        shadow-[0px_0px_6px_-4px]
        rounded-full
        w-[min(90%,1200px)]
        mx-auto
        text-slate-100
        flex 
        gap-10
        flex-row
        justify-between
        pl-10
        pr-1.5
        ">
            <button className="text-2xl font-medium min-w-max">Ronny Garcia</button>
            <section className="flex justify-between items-center w-full">
                <ul className="h-[60px] text-sm pl-2 flex gap-5 justify-start w-full">
                    {items.map((item, index) => {
                        const { link, name, status } = item
                        const style = STYLES_STATUS[status] // TODO: Change the key to a string
                        return (
                            <li key={index} className={`px-2 duration-[1000ms] flex justify-center items-center border-b-4 ${style}`}>
                                <button onClick={() => handleChanges(index)}>{name}</button>
                            </li>
                        )
                    })}
                </ul>
                <ThemeComponent />
            </section>
            <button className="
            min-w-max
            text-base
            font-semibold
            bg-primary-900/20
            px-10
            my-1
            rounded-full
            border-2
            border-primary-900/20
            hover:bg-transparent
            hover:text-primary-900/70
            duration-300
            ">Contact me</button>
        </nav>
    )
}