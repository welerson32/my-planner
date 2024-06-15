import { Task } from "./TaskModel"

export interface Board {
  id: string
  name: string
  tasks: Task[]
}