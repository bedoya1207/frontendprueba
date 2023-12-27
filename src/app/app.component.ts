// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-lista-empresas></app-lista-empresas>
    <app-lista-personas></app-lista-personas>
  `,
  styles: []
})
export class AppComponent {}
