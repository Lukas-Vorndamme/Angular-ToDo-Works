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

      const storedData = localStorage.getItem('Todo');
      const tableBody = document.querySelector('.table tbody');
      
      if (storedData) {
        const dataArray = JSON.parse(storedData);
      
        for (const data of dataArray) {
          const row = document.createElement('tr');
          row.className = "table-primary";
      
          const descriptionCell = document.createElement('td');
          descriptionCell.textContent = data.beschreibung;
          row.appendChild(descriptionCell);
      

          const deadlineCell = document.createElement('td');
          deadlineCell.textContent = data.deadline;
          row.appendChild(deadlineCell);
      
          tableBody.appendChild(row);

          localStorage.removeItem('Todo')
        }
      } else {
        console.log("No stored data found.");
      }
    }  
}
      
    
