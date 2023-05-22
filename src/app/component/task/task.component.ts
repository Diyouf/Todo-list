import { Component,OnInit } from '@angular/core';
import { Task } from '../../task'
import { TaskService } from '../../service/task.service'


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(private taskservice:TaskService){

  }
  task: Task[] = [];

  ngOnInit():void{
    this.taskservice.getTasks().subscribe((res)=> this.task = res);
  }

  deleteTask(task:Task){
    this.taskservice.deleteTask(task).subscribe(() => (this.task = this.task.filter(t => t.id !== task.id)))
  }

  toggleRiminder(task:Task){
    task.reminder = !task.reminder
    this.taskservice.updateTaskReminder(task).subscribe()
  }

  addTask(task:Task){
    this.taskservice.addTask(task).subscribe((res)=> this.task.push(res));
  }
}
