import type { Experience } from '../types/experiences'
import experiencesJson from './experiences.json'

const experiences: Experience[] = experiencesJson as Experience[]

export const getExperiences = (): Experience[] => experiences
