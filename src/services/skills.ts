import type { Skill } from '../types/skill'
import skillsJson from './skills.json'
import softSkillsJson from './soft-skills.json'
import cloudSkillsJson from './cloud-skills.json'

const skills: Skill[] = skillsJson as Skill[]
const softSkills: Skill[] = softSkillsJson as Skill[]
const cloudSkills: Skill[] = cloudSkillsJson as Skill[]

export const getSkills = (): Skill[] => skills

export const getSoftSkills = (): Skill[] => softSkills

export const getCloudSkills = (): Skill[] => cloudSkills
