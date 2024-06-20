import { Task } from "./TaskModel"

export interface Board {
  id: number
  boardName: string
  tasks: Task[]
}

export const EmptyBoard = {
  id: 0,
  boardName: '',
  tasks: []
}