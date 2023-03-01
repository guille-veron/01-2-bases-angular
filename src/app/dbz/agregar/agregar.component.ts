import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  nuevo:Personaje = {
    nombre:'',
    poder:0
  };

  // Version cont output
  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();           

  // agregar(){
  //   if (this.nuevo.nombre.trim().length === 0) {
  //     return;
  //   }
  //   this.onNewPersonaje.emit(this.nuevo);
  //   this.nuevo = {nombre:'',poder:0};    
  //   console.log(this.nuevo);

  // }

 
  constructor(private dbzService:DbzService){}

   agregar(){
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo)
    this.nuevo = {nombre:'',poder:0};    
    console.log(this.nuevo);

  }

}
