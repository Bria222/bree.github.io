import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoText: string = "";
  todoList: any = [];
  isTodoListEmpty = false;

  constructor() { }

  ngOnInit() {
    this.isTodoListEmpty=true;
  }

  onAddTodoText() {
    if (this.todoText!=""){
      console.log("adding the todoText - ", this.todoText);
      let todoObj = {todoId: this.todoList.length, text: this.todoText, isCompleted: false, buttonText:"Done"};

      this.todoList.push(todoObj);
      this.todoText = "";
      this.isTodoListEmpty=false;  
    }
  }
  
  onClearTodoText() {
    console.log("clearing the todoList - ", this.todoList);
    this.todoList=[];
    this.todoText="";
    this.isTodoListEmpty=true;
  }

  onCompletingTask(todoId:number){
    if (this.todoList[todoId].isCompleted){
      this.todoList[todoId].isCompleted = false;
      this.todoList[todoId].buttonText = "Done";
    }else{
      this.todoList[todoId].isCompleted = true;
      this.todoList[todoId].buttonText = "Undone";
    }
  }
}
