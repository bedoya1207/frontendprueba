import { Component,OnInit } from '@angular/core';
import { PersonaService } from '../api/persona/persona.service';
import { Persona } from '../models/persona.model';
import { Empresa } from '../models/empresa.model';
import { EmpresaService } from '../api/empresa/empresa.service';
@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  personas:Persona[]=[];
  empresas:Empresa[]=[];
  empresas2:any[]=[];
  textoEmpresa:String='nombre de la epresa';
  nuevaPersona: Persona={
    id: 0, nombres: '', apellidos: '', empresa: { id: 0, nombre: '' } 
  };
  
  constructor(private personaService:PersonaService,
    private empresaService:EmpresaService ){}
  
  ngOnInit(): void {
   this.getAllPersonas();
   this.getAllEmpresas();
  }
  getAllPersonas(): void {
    this.personaService.findAll().subscribe(personas => {
      this.personas = personas;
    });
  }
  getAllEmpresas(): void {
    this.empresaService.findAll().subscribe(empresas => {
      this.empresas = empresas;
    });
  }
  guardarPersona(): void {
    
    if (this.textoEmpresa) {
      
      const nuevaEmpresa: Empresa = { id: 1, nombre: this.textoEmpresa, personas: [] };
  
     
      this.empresaService.saveEmpresa(nuevaEmpresa).subscribe(empresaGuardada => {
       
        this.nuevaPersona.empresa = empresaGuardada;
        console.log(this.nuevaPersona.empresa.nombre);
        
        this.personaService.savePersona(this.nuevaPersona).subscribe(persona => {
          this.personas.push(persona);
          
          this.nuevaPersona = { id: 1, nombres: '', apellidos: '', empresa: { id: 1, nombre: '', personas: [] } };
          
          this.textoEmpresa = '';
        });
      });
    } else {
      // Si no hay texto de empresa, guarda la persona con la empresa actual
      this.personaService.savePersona(this.nuevaPersona).subscribe(persona => {
        this.personas.push(persona);
        // Restablece la nuevaPersona
        this.nuevaPersona = { id: 0, nombres: '', apellidos: '', empresa: { id: 0, nombre: '', personas: [] } };
       
      });
    }
  }

}
