import { Component } from '@angular/core';
import {Cliente} from '../cliente/cliente';
import { ServicoService } from '../servico/servico.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  private  cliente: Cliente = {nome: null, idade: null};
  
  constructor(private servico: ServicoService) { }

  ngOnInit () {  }

  add():void {
    this.servico.add(this.cliente)
  }


}
