import { Task } from "./TaskModel"

export interface Board {
  id: string
  boardName: string
  tasks: Task[]
}