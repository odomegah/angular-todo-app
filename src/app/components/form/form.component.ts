import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  /**
   * Declaration d'une nouvelle todo qui peut etre null.
   * Cette todo est private car elle ne sera pas accessible depuis l'exterieur de la classe.
   */
  private todo?: Todo;

  /**
   * creation d'une nouvelle instace d'un evenement qui sera ecouter par le parent, pour ajouter un nouveau todo
   */
  @Output()
   public envoyerTodoAuParent = new EventEmitter();

  constructor(){}

  /**
   * cette methode verifie si le input a une valeur null
   * sinon, mise en forme d'une nouvelle todo sans le id( qui sera ajoute dans le AppComponent).
   * 
   * Comment j'ai obtenu la valeur du input ?
   * Parmit les possibilites qu'offre Angular j'ai opter pour LA REFERENCE D'OBJET LOCAL
   */
  public ajouter(leInput: HTMLInputElement){
    
    if (leInput.value) {
     this.todo = {titre: leInput.value, complete: false};
     //envoie du nouveau todo au parent
     this.envoyerTodoAuParent.emit(this.todo);
    }

    leInput.value = ""
  }
}
