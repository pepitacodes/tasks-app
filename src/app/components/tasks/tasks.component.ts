import { Component } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent{
  taskList: Task[] = []
  taskName = '';
  constructor() {}
  ngOnInit(): void {
  }

  addTask() {
    const task: Task = {
      nombre: this.taskName,
      estado: false
    }
    
    this.taskList.push(task);
    this.taskName = '';
  }
  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }

  updateTask(index: number, task: Task): void {
    this.taskList[index].estado = !task.estado;

  }
}
