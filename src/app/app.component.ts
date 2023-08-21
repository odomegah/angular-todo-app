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
   * la porte avec le mot cle @public, qui est optionnel mais pour une bonne lisibilite de mon code je prefere toujours le mettre.
   */
private todos : Array<Todo>=[];


public constructor(){}
/**
 * Cette methode va ajouter une nouvelle todo a notre liste @todos
 * @param unTodo ce parametre represent un todo
 */
public ajouterUnTodo(unTodo: Todo){
this.todos.push(unTodo);
}

}
