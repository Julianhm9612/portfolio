import type { Skill } from "./skill"

export interface Project {
    title: string
    description: string
    img: string
    skills: Skill[]
    github: string
    demo: string
}
