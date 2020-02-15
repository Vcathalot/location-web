import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public pageSelectionnee: string;

  definirPage(page: string){
    this.pageSelectionnee = page;
  }
}
