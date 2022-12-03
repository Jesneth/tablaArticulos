import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articulos: any;

  constructor(private articulosServicios: ArticulosService) {}

  ngOnInit() {
    this.articulos = this.articulosServicios.retornar();
  }
}
