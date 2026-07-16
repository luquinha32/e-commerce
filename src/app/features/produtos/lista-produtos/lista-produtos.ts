import { Component, signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core'
import { isNgTemplate } from '@angular/compiler';
 import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos= signal( [
    {nome: 'Teclado Gamer',
      preco:49.99
    },
    {nome: 'Mouse Gamer',
      preco:29.99
    },
    {nome: 'monitor Gamer',
      preco:599.99
    },
    {nome: 'Desktop Gamer', 
      preco:189.99
    },
    {nome: 'Headset Gamer', 
      preco:699.99
    }
  ]);
  exibirProduto (nome:string){
    console.log ('Produto Selecionado: ', nome);
  }
  adicionarProduto(){
    this.produtos.update(listaAtual => [
      ...listaAtual, {nome:'Sony Playstation 5', preco:1000}
    ]);
  }
  totalProdutos = computed(() => this.produtos(). length);
  //adicionado uma função nova para dar o total dos produtos
  valorTotal = computed(()=>  {return this.produtos().reduce((total, item) => total + item.preco, 0)});
  substituirProdutos(){
    this.produtos.set([
      {nome: 'Arroz fazenda', preco:400},
    ]);
  }
}