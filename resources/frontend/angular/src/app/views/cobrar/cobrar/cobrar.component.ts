import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cobrar',
  templateUrl: './cobrar.component.html',
  styleUrls: ['./cobrar.component.css']
})
export class CobrarComponent implements OnInit {

  //Page Title:
  titlePage = "Cobrar Pagamento"

  //Form Variables:
  mensagem = ''

  constructor() { }

  ngOnInit(): void {
  }

}
