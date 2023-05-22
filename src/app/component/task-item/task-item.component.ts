import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
   @Input() task!: Task;
   @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
   @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

   faTime = faTimes

   onDelete(task:Task){
    this.onDeleteTask.emit(task)
      
   }

   onToggle(task:Task){
      this.onToggleReminder.emit(task)
   }
}
