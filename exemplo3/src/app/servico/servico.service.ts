import{Injectable} from '@angular/core';
import {Cliente} from '../cliente/cliente';


@Injectable({
    providedIn: 'root'
})

export class ServicoService {
    private lista:Cliente[]=[];

    constructor() {}

    add(cliente: Cliente): void {
        let cli: Cliente = new Cliente();

        cli.nome = cliente.nome;
        cli.idade = cliente.idade;

        this.lista.push(cli);
    }

    get dados():Cliente[] {
        return this.lista;
    }
}