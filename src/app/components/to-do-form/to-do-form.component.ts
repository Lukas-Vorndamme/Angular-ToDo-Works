import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/ToDo';
import { ToDoDataService } from '../../services/to-do-data.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css'],
})
export class ToDoFormComponent implements OnInit {
  todo: ToDo;

  constructor(private ToDoDataServices: ToDoDataService) {
    this.todo = new ToDo(null, false, null);
  }

  ngOnInit() {}

  speicher: string[];

  save() {
    this.ToDoDataServices.saveTodo(this.todo);

    var speicher = JSON.stringify([
      new String(this.todo.description),
      new Boolean(this.todo.done),
      new String(this.todo.deadline),
    ]);
    this.todo = new ToDo(null, false, null);

    console.log(speicher);
  }

  //wiederherstellen(){
  //this.ToDoDataServices.saveTodo(JSON.parse(this.todo.description ,this.todo.done, this.todo.deadline}
}
