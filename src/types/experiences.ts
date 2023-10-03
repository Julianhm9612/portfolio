import type { Skill } from "./skill"

export interface Experience {
    title: string
    company: string
    description: string
    startDate: string
    endDate: string
    skills: Skill[]
}
