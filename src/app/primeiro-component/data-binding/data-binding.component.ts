import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  url: string;
  urlImage: string;
  cursoAngular: boolean;

  getValores() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {
    this.url = 'http://pedro.com';
    this.urlImage = 'http://lorempixel.com.br/400/200';
    this.cursoAngular = true;
  }

  ngOnInit(): void {}
}
