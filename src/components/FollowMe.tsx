import { SocialMedia } from "../models/Menu"
import DiscordIcon from "./Icons/DiscordIcon"
import FacebookIcon from "./Icons/FacebookIcon"
import InstagramIcon from "./Icons/InstagramIcon"
import TelegramIcon from "./Icons/TelegramIcon"
import TwitterIcon from "./Icons/TwitterIcon"
import YouTubeIcon from "./Icons/YouTubeIcon"

const classes = "fill-black group-hover:animation-bounce duration-300"

const SocialMediaItems: SocialMedia[] = [
    {
        icon: <DiscordIcon classes={classes} />,
        link: "https://www.discord.com"
    },
    {
        icon: <FacebookIcon classes={classes} />,
        link: "https://www.facebook.com"
    },
    {
        icon: <InstagramIcon classes={classes} />,
        link: "https://www.instagram.com"
    },
    {
        icon: <TwitterIcon classes={classes} />,
        link: "https://www.twitter.com"
    },
    {
        icon: <YouTubeIcon classes={classes} />,
        link: "https://www.youtube.com"
    },
    {
        icon: <TelegramIcon classes={classes} />,
        link: "https://www.telegram.com"
    }
]

export default function FollowMe() {
    const pointsList = Array(18).fill(1).map((_, i) => i)
    const cte = 1 / pointsList.length
    const points = <ul className="flex justify-end flex-row-reverse gap-2">{pointsList.map((value, i) => <li key={i} style={{ opacity: value * cte }} className={`w-3 h-3 rounded-full bg-primary-900`}></li>)}</ul>

    return (
        <section className="text-slate-50 flex justify-between items-center w-standard mx-auto">
            <section className="flex flex-col gap-7 justify-center">
                <h1 className="text-8xl tracking-wider font-medium">Follow me</h1>
                {points}
            </section>
            <nav className="flex justify-between p-10">
                <ul className=" grid grid-cols-3 gap-5">
                    {SocialMediaItems.map((item, index) => {
                        return (
                            <li key={index} className="w-14 h-14 bg-primary-900 p-2 rounded-full group cursor-pointer hover:scale-105 duration-500">
                                <a href={item.link} target="_blank" >
                                    {item.icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </section>
    )
}
