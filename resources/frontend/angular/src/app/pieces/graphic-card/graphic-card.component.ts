import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.css']
})
export class GraphicCardComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
