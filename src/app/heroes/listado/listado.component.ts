import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes = ['Thor','Superman','Ironman', 'Batman'];
  heroeBorrado = '';
  constructor() { }

  borrarUltimo(){
    this.heroeBorrado = this.heroes.pop() || '';    
  }

  
}
