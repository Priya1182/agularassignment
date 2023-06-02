import { priorityDetails } from "../task/priprity"

export class Task {
    title: string = ''
    desc: string = ''
    dueDate: string = ''
    priority!: priorityDetails
    id:number=0
}