import { diaryEntry, NonSensitiveInfoDiarieEntry } from '../types'
import diaryData from './diaries.json'

const diaries: diaryEntry[] = diaryData as diaryEntry[]

export const getEntries = (): diaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiarieEntry | undefined =>{
    const entry = diaries.find(d => d.id === id)
    if(entry){
        const {comment, ...restOfDiary} = entry
        return restOfDiary
    }
    return undefined
}

export const getEntriesWithoutSenssitiveInfo = (): NonSensitiveInfoDiarieEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return {
            id,
            date, 
            weather,
            visibility
        }
    })
}

export const addEntry = (): undefined => undefined 