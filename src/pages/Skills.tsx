const MAX_LEVEL = 100
const NUMBER_OF_STARS = 10

const DEFAULT_SKILLS: Skill[] = [
    { id: '1', name: 'React', level: 100 },
    { id: '2', name: 'React Native', level: 80 },
    { id: '3', name: 'Node.js', level: 70 },
    { id: '4', name: 'Express', level: 60 },
    { id: '5', name: 'MongoDB', level: 80 },
    { id: '6', name: 'PostgreSQL', level: 60 },
]


interface Skill {
    id: string,
    name: string,
    level: number //no more than 100
}

interface Props {
    skills?: Skill[]
}

export default function Skills({ skills = DEFAULT_SKILLS }: Props) {
    return (
        <section>

            <section className="text-slate-50 tracking-tighter w-standard-md mx-auto flex justify-center items-center flex-col gap-10">
                <h1 className="text-9xl">My skills</h1>
                <ul className="grid grid-cols-2 w-[800px] gap-[10px_70px]">
                    {
                        skills.map(skill => {
                            const { id, level, name } = skill
                            const calf = Math.floor((level / MAX_LEVEL) * NUMBER_OF_STARS)
                            const arrayStars = Array(NUMBER_OF_STARS).fill(null).map((_, i) => i < calf)
                            console.log(arrayStars)
                            return (
                                <li className="flex justify-between" key={id}>
                                    <span>
                                        {name}
                                    </span>
                                    <ul className="flex justify-center items-center gap-3">
                                        {arrayStars.map((star, i) => {
                                            const bgColor = star ? 'bg-primary-900' : 'bg-primary-900/20'
                                            return (
                                                <li key={i} className={`w-3 h-3 text-slate-50 text-slate-100 rounded-full ${bgColor}`}></li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                </ul>
            </section>
        </section>
    )
}
