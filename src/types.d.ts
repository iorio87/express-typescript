export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface diaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}


/* 2 formas de hacer un nuevo tipo a partir de otro: */

//export type NonSensitiveInfoDiarieEntry = Pick<diaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiarieEntry = Omit<diaryEntry, 'comment'>