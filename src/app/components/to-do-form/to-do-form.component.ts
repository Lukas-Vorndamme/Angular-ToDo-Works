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




  save() {
    this.ToDoDataServices.saveTodo(this.todo);

    const data = {
      beschreibung: this.todo.description,
      fertig: this.todo.done,
      deadline: this.todo.deadline
    };
    localStorage.setItem('Todo', JSON.stringify(data));

    const storedData = localStorage.getItem('Todo');
    let dataArray = storedData ? JSON.parse(storedData) : [];

    if (!Array.isArray(dataArray)) {
      dataArray = [];
    }

    dataArray.push(data);
    
    localStorage.setItem('Todo', JSON.stringify(dataArray));
    
    console.log(localStorage.getItem('Todo'));

    this.todo = new ToDo(null, false, null);
  }
  

    wiederherstellen() {

      const storedData = localStorage.getItem('Todo')

      if(storedData) {
        const dataArray = JSON.parse(storedData);
        
        for (const data of dataArray) {
          console.log("Description:", data.description);
          console.log("Done:", data.done);
          console.log("Deadline", data.deadline);
        }
        localStorage.removeItem('Todo')
      }
      else{
        console.log("Keine Gespeicherten Daten gefunden.")
      }
    }
}
      //this.ToDoDataServices.todos.push()
      //console.log(localStorage.getItem('Todo'))
      //localStorage.removeItem('Todo')
    