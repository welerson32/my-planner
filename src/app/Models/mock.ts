import { Board } from "./BoardModel";
import { Task } from "./TaskModel";

export const Mock: Board[] = [
  {
    "id": 1,
    "boardName": "Teste 1",
    "tasks": [
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174002",
        "title": "dolor-sit-amet",
        "desc": "Lorem ipsum dolor sit amet",
        "dueDate": "2023-12-25T18:30:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174000",
        "title": "lorem-ipsum",
        "desc": "Lorem ipsum dolor sit amet",
        "dueDate": "2023-12-25T18:30:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "boardId": "123e4567-e89b-12d3-a456-426614174001",
        "title": "lorem-ipsum",
        "desc": "Consectetur adipiscing elit",
        "dueDate": "2023-12-25T18:30:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174002",
        "boardId": "123e4567-e89b-12d3-a456-426614174000",
        "title": "lorem-ipsum",
        "desc": "Consectetur adipiscing elit",
        "dueDate": "2023-01-01T00:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "boardId": "123e4567-e89b-12d3-a456-426614174001",
        "title": "lorem-ipsum",
        "desc": "Lorem ipsum dolor sit amet",
        "dueDate": "2023-07-04T12:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174001",
        "title": "lorem-ipsum",
        "desc": "Lorem ipsum dolor sit amet",
        "dueDate": "2023-01-01T00:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174002",
        "title": "lorem-ipsum",
        "desc": "Sed do eiusmod tempor incididunt",
        "dueDate": "2023-01-01T00:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174002",
        "title": "consectetur-adipiscing",
        "desc": "Consectetur adipiscing elit",
        "dueDate": "2023-07-04T12:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174002",
        "boardId": "123e4567-e89b-12d3-a456-426614174002",
        "title": "consectetur-adipiscing",
        "desc": "Sed do eiusmod tempor incididunt",
        "dueDate": "2023-01-01T00:00:00",
        "status": "Em Progresso"
      }
    ]
  },
  {
    "id": 2,
    "boardName": "Teste 2",
    "tasks": [
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174002",
        "title": "dolor-sit-amet",
        "desc": "Lorem ipsum dolor sit amet",
        "dueDate": "2023-12-25T18:30:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174000",
        "title": "lorem-ipsum",
        "desc": "Lorem ipsum dolor sit amet",
        "dueDate": "2023-12-25T18:30:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "boardId": "123e4567-e89b-12d3-a456-426614174001",
        "title": "lorem-ipsum",
        "desc": "Consectetur adipiscing elit",
        "dueDate": "2023-12-25T18:30:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174002",
        "boardId": "123e4567-e89b-12d3-a456-426614174000",
        "title": "lorem-ipsum",
        "desc": "Consectetur adipiscing elit",
        "dueDate": "2023-01-01T00:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "boardId": "123e4567-e89b-12d3-a456-426614174001",
        "title": "lorem-ipsum",
        "desc": "Lorem ipsum dolor sit amet",
        "dueDate": "2023-07-04T12:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174001",
        "title": "lorem-ipsum",
        "desc": "Lorem ipsum dolor sit amet",
        "dueDate": "2023-01-01T00:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174002",
        "title": "lorem-ipsum",
        "desc": "Sed do eiusmod tempor incididunt",
        "dueDate": "2023-01-01T00:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174001",
        "boardId": "123e4567-e89b-12d3-a456-426614174002",
        "title": "consectetur-adipiscing",
        "desc": "Consectetur adipiscing elit",
        "dueDate": "2023-07-04T12:00:00",
        "status": "Em Progresso"
      },
      {
        "id": "123e4567-e89b-12d3-a456-426614174002",
        "boardId": "123e4567-e89b-12d3-a456-426614174002",
        "title": "consectetur-adipiscing",
        "desc": "Sed do eiusmod tempor incididunt",
        "dueDate": "2023-01-01T00:00:00",
        "status": "Em Progresso"
      }
    ]
  }
]