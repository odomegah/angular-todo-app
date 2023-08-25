import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public jeVeuxModifier: boolean = false

  /**
   * Recuparation de la liste des todos depuis le parent.
   * 
   */
@Input()
public todo!:Todo;

/**
 * Creation d'une instance de EventEmitter() qui va etre ecoute par le parent
 */
@Output()
public todoModifieEvent = new EventEmitter() 

constructor(){}

public todoModification(inputValue: HTMLInputElement, id: number|undefined, type: string){

  if (type === "complete") {
    this.todo!.complete = inputValue.checked  
  }else if(type === "supprimer"){
    this.todo!.titre = "" 
  }else if(type === "modifier"){
    this.todo!.titre = inputValue.value
    this.jeVeuxModifier = false  
  }
this.todoModifieEvent.emit(this.todo)
}

}
