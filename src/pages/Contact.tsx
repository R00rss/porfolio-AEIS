import { useState } from "react"
import { sendEmail } from "../service/Email"

interface Props { reference: React.RefObject<HTMLElement> }

export default function Contact({ reference }: Props) {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log({ data })

        sendEmail(data).then((isEmailSent) => {
            console.log({ isEmailSent })
            if (isEmailSent) return alert("Email sent")
            alert("Error sending email1")
        }).catch((err) => {
            console.error(err)
            alert("Error sending email2")
        })
    }

    return (
        <section
            data-sections="Contact"
            ref={reference}
            className="w-full bg_gradient_home py-32"
        >
            <h1 className="text-9xl text-slate-50 tracking-tighter font-medium text-center">
                Contact me
            </h1>
            <form
                onSubmit={handleSubmit}
                className="text-lg text-slate-50 w-[min(90%,900px)] mx-auto" action="">
                <label className="flex flex-col mt-5 gap-3" htmlFor="">
                    <span className="font-semibold ml-6 text-xl">Full name*</span>
                    <input
                        required
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        placeholder="Enter your full name ..."
                        className="bg-primary-900/20 rounded-full py-2 px-4 h-14 text-xl outline-none focus:outline-none" type="text" />
                </label>
                <label className="flex flex-col mt-5 gap-3" htmlFor="">
                    <span className="font-semibold ml-6 text-xl">Email*</span>
                    <input
                        required
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        placeholder="Enter your email ..."
                        className="bg-primary-900/20 rounded-full py-2 px-4 h-14 text-xl outline-none focus:outline-none" type="email" />
                </label>
                <label className="flex flex-col mt-5 gap-3" htmlFor="">
                    <span className="font-semibold ml-6 text-xl">Message*</span>
                    <textarea
                        required
                        value={data.message}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                        placeholder="Enter your message ..."
                        className="bg-primary-900/20 rounded-xl py-2 px-4 text-xl h-14 outline-none focus:outline-none min-h-44" name="" id=""></textarea>
                </label>
                <div className="w-full flex justify-center items-center">
                    <button className="bg-primary-900 w-[min(90%,200px)] mt-12 py-3 px-2 rounded-3xl font-semibold border-[3px] border-primary-900 hover:bg-transparent hover:text-primary-900 duration-500" type="submit">See all</button>
                </div>
            </form>
        </section>
    )
}
