import { Component, Output,EventEmitter } from '@angular/core';
import { Task } from '../../task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text!: string;
  day!: string;
  reminder:boolean = false
  showAddTask! :boolean
  subscription:Subscription

  constructor(private Uiservice :UiService ){
    this.subscription = this.Uiservice.onToggle().subscribe((value)=>this.showAddTask = value)
  }

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter()

  onSubmit(){
    if(!this.text){
      alert('Please enter a task')
      return;
    }

    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
  
    this.onAddTask.emit(newTask)
    // @Todo - emit event

    this.text=''
    this.day=''
    this.reminder=false;
  }

}
