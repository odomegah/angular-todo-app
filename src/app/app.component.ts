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
/**
 * Cette methode va ajouter une nouvelle todo a notre liste @todos
 * @param unTodo ce parametre represent un todo
 * la porte avec le mot cle @public, qui est optionnel mais pour une bonne lisibilite de mon code je prefere toujours le mettre.
 */
public ajouterUnTodo(unTodo: Todo){

  //Ajout d'un id dynamique a notre nouveau todo
  unTodo.id = this.todos.length + 1
this.todos.push(unTodo);
console.table(this.todos)
}

}
