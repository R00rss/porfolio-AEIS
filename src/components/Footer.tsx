export default function Footer() {
    const currentDate = new Date().getFullYear();
    const fullName = "AEIS"
    return (
        <footer className="
        text-slate-100
        w-standard
        mx-auto
        ">
            <nav className="flex justify-between p-10 border-t-2 mt-5 border-primary-900">
                <button className="text-2xl">{fullName}</button>
                <ul className="flex gap-10 text-base tracking-wide">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <ul className="flex justify-end gap-10 text-slate-100/40 font-semibold">
                <li>{currentDate} {fullName}. All rights reserved</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
            </ul>
        </footer>
    )
}
