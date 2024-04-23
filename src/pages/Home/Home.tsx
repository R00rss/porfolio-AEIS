import ButtonCV from './ButtonCV'
import HomeInfo from './HomeInfo'
import ProfileCard from './ProfileCard'
interface Props { reference: React.RefObject<HTMLElement> }

export default function Home({ reference }: Props) {
    return (
        <section
            data-sections="Home"
            ref={reference}
            className="w-full bg_gradient_home min-h-[700px] h-[700px]"
        >
            <section className='flex items-end h-full w-standard-md mx-auto relative'>
                <HomeInfo />
                <ProfileCard />
                <ButtonCV />
            </section>
        </section>
    )
}
