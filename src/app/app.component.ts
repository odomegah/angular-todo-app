import { Component } from '@angular/core';
import { Todo } from './interfaces/todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  /**
   * Declaration et initialisation d'une proprite @todos
   * @todos doit etre un tableau d'objet de type Todo
   * 
   */
private todos : Array<Todo>=[];


public constructor(){}

/**
 * Un getter qui retourne la liste de tous les todos
 */
public get listeDesTodos (){
  return this.todos;
}

public get completeListeDesTodos (){
  return this.todos.filter((e)=> e.complete == true);
}
/**
 * Cette methode va ajouter une nouvelle todo a notre liste @todos
 * @param unTodo ce parametre represent un todo
 * la porte avec le mot cle @public, qui est optionnel mais pour une bonne lisibilite de mon code je prefere toujours le mettre.
 */
public ajouterUnTodo(unTodo: Todo){

  //Ajout d'un id dynamique a notre nouveau todo
  unTodo.id = this.todos.length + 1
  this.todos.push(unTodo);
}

public modifierTodo(todoModifie: Todo){
   if(this.todos.find((e)=>{ return e.id == todoModifie.id})!.titre === ""){
    this.todos = this.todos.filter((e)=>e.id != todoModifie.id)
   }
   console.table(this.todos)
}



}
