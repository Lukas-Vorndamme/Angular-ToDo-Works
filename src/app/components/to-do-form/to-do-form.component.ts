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

  ngOnInit() {
    this.alleswiederherstellen();
  }

  save() {
    this.ToDoDataServices.saveTodo(this.todo);

    const data = {
      beschreibung: this.todo.description,
      fertig: this.todo.done,
      deadline: this.todo.deadline,
    };

    let storedData = localStorage.getItem('Todos');
    let dataArray = storedData ? JSON.parse(storedData) : [];

    if (!Array.isArray(dataArray)) {
      dataArray = [];
    }

    dataArray.push(data);

    localStorage.setItem('Todos', JSON.stringify(dataArray));

    //console.log(localStorage.getItem('Todos'));

    this.todo = new ToDo(null, false, null);
  }

  alleswiederherstellen() {
    const storedData = localStorage.getItem('Todos');

    if (storedData) {
      const dataArray = JSON.parse(storedData);
      for (let index = 0; index < dataArray.length; index++) {
       
        this.ToDoDataServices.saveTodo(new ToDo(dataArray[index].beschreibung, dataArray[index].fertig, dataArray[index].deadline));
       
      }
      console.log('Wiederherstellung Erfolgreich');
    }
    else(console.log('Es wurden keine Daten zum Wiederherstellen gefunden'))
  }
 
  Testloeschen() {
    localStorage.removeItem('Todos');
    console.log("localStorage wurde gelöscht")
  }
}
