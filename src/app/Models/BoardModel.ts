import { Task } from "./TaskModel"

export interface Board {
  id: number
  boardName: string
  tasks: Task[]
}