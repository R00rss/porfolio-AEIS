import { ReactNode } from "react"
import DiscordIcon from "./Icons/DiscordIcon"
import FacebookIcon from "./Icons/FacebookIcon"
import InstagramIcon from "./Icons/InstagramIcon"
import TwitterIcon from "./Icons/TwitterIcon"
import YouTubeIcon from "./Icons/YouTubeIcon"
import TelegramIcon from "./Icons/TelegramIcon"


interface SocialMedia {
    icon: ReactNode,
    link: string
}

const SocialMediaItems: SocialMedia[] = [
    {
        icon: <DiscordIcon />,
        link: "https://www.discord.com"
    },
    {
        icon: <FacebookIcon />,
        link: "https://www.facebook.com"
    },
    {
        icon: <InstagramIcon />,
        link: "https://www.instagram.com"
    },
    {
        icon: <TwitterIcon />,
        link: "https://www.twitter.com"
    },
    {
        icon: <YouTubeIcon />,
        link: "https://www.youtube.com"
    },
    {
        icon: <TelegramIcon />,
        link: "https://www.telegram.com"
    }
]

function SocialMediaBar() {
    return (
        <nav className="fixed right-4 top-24">
            <ul className="flex flex-col gap-3 justify-center items-center">
                {SocialMediaItems.map((item, index) => {
                    return (
                        <li key={index} className="w-9 h-9 bg-black p-2 rounded-full group cursor-pointer hover:shadow-[0px_0px_14px_-6px_var(--primary-900)] duration-300">
                            <a href={item.link} target="_blank" >
                                {item.icon}
                            </a>
                        </li>
                    )
                })}
            </ul>

        </nav>
    )
}

export default SocialMediaBar