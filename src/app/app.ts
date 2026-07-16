import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';//!Remove importação do routerOutlet, pois não estou usando ele
import { Produto } from './features/produtos/produto/produto'; //importa o componente
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos'; 
@Component({
 selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
