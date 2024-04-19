import { ReactNode } from "react"
import DiscordIcon from "./Icons/DiscordIcon"
import FacebookIcon from "./Icons/FacebookIcon"
import InstagramIcon from "./Icons/InstagramIcon"
import TwitterIcon from "./Icons/TwitterIcon"
import YouTubeIcon from "./Icons/YouTubeIcon"
import TelegramIcon from "./Icons/TelegramIcon"

const ICON_COLOR = "#ffffff"

interface SocialMedia {
    icon: ReactNode,
    link: string
}

const SocialMediaItems: SocialMedia[] = [
    {
        icon: <DiscordIcon fill={ICON_COLOR} />,
        link: "https://www.discord.com"
    },
    {
        icon: <FacebookIcon fill={ICON_COLOR} />,
        link: "https://www.facebook.com"
    },
    {
        icon: <InstagramIcon fill={ICON_COLOR} />,
        link: "https://www.instagram.com"
    },
    {
        icon: <TwitterIcon fill={ICON_COLOR} />,
        link: "https://www.twitter.com"
    },
    {
        icon: <YouTubeIcon fill={ICON_COLOR} />,
        link: "https://www.youtube.com"
    },
    {
        icon: <TelegramIcon fill={ICON_COLOR} />,
        link: "https://www.telegram.com"
    }
]

function SocialMediaBar() {
    return (
        <nav className="fixed right-4">
            <ul className="flex flex-col gap-3 justify-center items-center">

                {SocialMediaItems.map((item, index) => {
                    return (
                        <li key={index} className="w-9 h-9 bg-black p-2 rounded-full">
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