import type { Laboratory } from '../types/laboratory'
import laboratoriesJson from './laboratories.json'

const laboratories: Laboratory[] = laboratoriesJson as Laboratory[]

export const getLaboratories = (): Laboratory[] => laboratories
