import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../model/ToDo';
import { ToDoDataService } from '../../services/to-do-data.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  todo : ToDo;

  constructor(private ToDoDataServices: ToDoDataService) { 
    this.todo = new ToDo(null,false,null)
  }

  ngOnInit() {
  }

  save() {
    this.ToDoDataServices.saveTodo(this.todo);
  }
}