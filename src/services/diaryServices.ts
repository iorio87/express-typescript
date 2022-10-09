import { diaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: diaryEntry[] = diaryData as diaryEntry[]

export const getEntries = (): diaryEntry[] => diaries

export const addEntry = (): undefined => undefined 