import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  retornar() {
    return [
      { codigo: 1, nombre: 'iphone', precio: 400 },
      { codigo: 2, nombre: 'samsung', precio: 350 },
      { codigo: 3, nombre: 'xiaomi', precio: 200 },
    ];
  }
  constructor() {}
}
