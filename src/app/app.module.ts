import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, Componente1Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
