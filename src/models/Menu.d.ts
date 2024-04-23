export interface Items {
    id: SectionNames,
    name: string,
    link: string
    status: boolean
}

export type SectionNames = "Home" | "Projects" | "Blog" | "Contact" | "AboutMe"

export interface SocialMedia {
    icon: ReactNode,
    link: string
}