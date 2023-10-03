import type { Project } from '../types/project'
import projectsJson from './projects.json'

const projects: Project[] = projectsJson as Project[]

export const getProjects = (): Project[] => projects
