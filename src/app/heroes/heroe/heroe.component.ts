import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {


  nombre:string = "Heroe";
  edad:number = 33;

  constructor() { }

  leerNombre():string {
    return `${this.nombre} - ${this.edad}`;
  }

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }

  cambiarNombre(){
    if (this.nombre === 'SpiderMan') {
      this.nombre = 'IronMan'
    } else {
      this.nombre = 'SpiderMan';  
    }
    
  }

  cambiarEdad():void{
    this.edad = 44;
  }

  

}
