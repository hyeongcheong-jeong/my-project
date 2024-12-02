
export type Day = {
  id: string,
  day: number,
}
export type WordType = {
  id: string,
  day: number,
  eng: string,
  kor: string,
  isDone: boolean,
}

export type Modal = {
  isModify: boolean,
  isCreateWord: boolean,
  info: WordType,
}
