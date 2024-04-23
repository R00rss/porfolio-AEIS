const userInfo = {
    name: "Ronny",
    lastName: "Garcia",
    profession: "FULL-STACK WEB DEVELOPER",
    description: "I'm a full-stack web developer and I work remotely from South America."
}

export default function HomeInfo() {
    return (
        <section className="text-slate-50 min-w-max">
            <h2 className="text-slate-50/50 text-4xl">{userInfo.profession}</h2>
            <h1 className="mt-5 flex flex-col text-9xl  tracking-tighter font-medium">
                <span>{userInfo.name}</span>
                <span>{userInfo.lastName}</span>
            </h1>
            <p className="text-2xl text-slate-50/50 border-l-slate-50/30 w-56 text-pretty border-l-2 pl-5 mb-5 mt-12">{userInfo.description}</p>
        </section>
    )
}
