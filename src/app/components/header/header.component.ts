import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /**
   * Declaration d'un decorateur fournit par Angular qui nous permet d'etablir une communication Parent-Enfant.
   * @todosTaile est fournis par le Parent AppComponent
   */
  @Input()
  todosTaile: number = 0;

  constructor(){}
}
