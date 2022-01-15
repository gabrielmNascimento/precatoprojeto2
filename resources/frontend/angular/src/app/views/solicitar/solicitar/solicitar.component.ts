import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.css']
})
export class SolicitarComponent implements OnInit {

  //Page Title:
  titlePage = "Solicitar Pagamento"

  //Form Variables:
  valorInicial = ''
  valorFinal = ''
  data = ''

  constructor() { }

  ngOnInit(): void {
  }

}
