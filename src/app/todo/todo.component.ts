import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  public items = []; 
  
  public newTask; 

  ngOnInit(): void{
    if (window.localStorage.getItem) {
      this.items = JSON.parse(window.localStorage.getItem('todo'));
    }
    else{}
  }

  public addToList() { 
    if (this.newTask == '') { 
        alert("enter a task")
      } 
      else { 
        this.items.push(this.newTask);       
        this.newTask = ''; 
        window.localStorage.setItem('todo', JSON.stringify(this.items));       
      } 
  } 

  public deleteTask(index) { 
    this.items.splice(index, 1); 
    window.localStorage.setItem('todo', JSON.stringify(this.items));
  } 

  public editTask(item,index) {
    this.newTask = item;
    this.deleteTask(index);
  }
  
}
