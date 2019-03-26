import { Component } from '@angular/core';
import {Cliente} from '../cliente/cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  private  cliente: Cliente = {nome: null, idade: null};
  constructor() { }



}
