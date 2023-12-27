import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListaEmpresasComponent } from './lista-empresas/lista-empresas.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { PersonaService } from './api/persona/persona.service';
import { EmpresaService } from './api/empresa/empresa.service';
@NgModule({
  declarations: [
    AppComponent,
    ListaEmpresasComponent,
    ListaPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonaService,EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
