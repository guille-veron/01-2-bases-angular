import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder: 7500
    },
    {
      nombre:'Krillin',
      poder: 1500
    }
  ]
  
  get personajes():Personaje[]{
    return [...this._personajes]; // para romper la referencia al arreglo original
  }

  constructor() { }
  
  agregarPersonaje(nuevo:Personaje){
    if (nuevo.nombre.trim().length === 0) {
      return;
    }
    this._personajes.push(nuevo)
  }
}
