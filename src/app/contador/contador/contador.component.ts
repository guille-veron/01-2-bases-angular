import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
        <h1>{{title}}</h1>
        <h3>La base es <strong>{{base}}</strong></h3>

        <button (click)="acumular(base)">+{{base}}</button>
        <span>{{contador}}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
    `

})
export class ContadorComponente {    
    
    title = 'Contador App';
    contador:number = 0;
    base:number = 6;
  
    acumular(num:number){
        this.contador+=num;
    }
}