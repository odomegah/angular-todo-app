import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  /**
   * Recuparation de la liste des todos depuis le parent.
   * 
   */
@Input()
public todosListe:Array<Todo> = [];

/**
 * Creation d'une instance de EventEmitter() qui va etre ecoute par le parent
 */
@Output()
public todoModifieEvent = new EventEmitter() 

public style = "color: red"

constructor(){}

public todoComplete(checkedValue: HTMLInputElement, id: number|undefined){

  console.log(checkedValue.checked)
  this.todosListe.find((e)=> e.id == id)!.complete = checkedValue.checked

  this.todoModifieEvent.emit(this.todosListe)
  // console.table(this.todosListe)
}
}
