import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/dados';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent  {
  cliente: Cliente = { nome: '',idade: null };
  clientes: Cliente[] = []; 

  add() :void {

    let aux = { nome: this.cliente.nome, idade: this.cliente.idade}

    this.clientes.push(aux);
    console.log(this.clientes)
  }

}
