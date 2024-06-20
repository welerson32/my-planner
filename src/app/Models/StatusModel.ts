export interface Status {
  name: string,
  code: number
}

export const StatusOptions: Status[] = [
  {
    name: 'Pending',
    code: 1
  },
  {
    name: 'In Progress',
    code: 2
  },
  {
    name: 'Done',
    code: 3
  }
]

export const FilterOptions: Status[] = [
  {
    name: 'All Tasks',
    code: 0
  },
  {
    name: 'Pending',
    code: 1
  },
  {
    name: 'In Progress',
    code: 2
  },
  {
    name: 'Done',
    code: 3
  }
]