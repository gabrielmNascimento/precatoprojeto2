import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {

  //Page Title:
  titlePage = "Listagem de Solicitações"

  constructor() { }

  ngOnInit(): void {
  }

}
