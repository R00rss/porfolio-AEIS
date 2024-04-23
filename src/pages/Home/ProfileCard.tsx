import profileImage from '../../assets/images/fake_profile.png'

export default function ProfileCard() {
    return (
        <section className='w-full flex justify-center items-center'>
            <img src={profileImage} alt="profileImage" />
        </section>
    )
}
