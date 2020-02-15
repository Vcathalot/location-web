import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() pageAAfficher = new EventEmitter<string>();
  public listePages = ["Accueil","Localisation","Contact","Disponibilités","Photos","Avis","Equipements"];
  
  constructor() { }

  ngOnInit(): void {
  }

  afficherPage(value: string) {
    this.pageAAfficher.emit(value);
  }

 
}
