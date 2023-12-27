import { Component,OnInit } from '@angular/core';
import { EmpresaService } from '../api/empresa/empresa.service';
import { Empresa } from '../models/empresa.model';
@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {
  empresas:Empresa[]=[];
   nuevaEmpresa: Empresa={
    id:0, nombre:'',personas:[]
   };
   constructor(private empresaSevice:EmpresaService){}


  ngOnInit(): void {
    this.getAllEmpresas();
  }
  getAllEmpresas(): void {
    this.empresaSevice.findAll().subscribe(empresas => {
      this.empresas = empresas;
    });
  }
  guardarEmpresa():void{
    this.empresaSevice.saveEmpresa(this.nuevaEmpresa).subscribe(empresa => {
      this.empresas.push(empresa);
      this.nuevaEmpresa = { id: 1, nombre: '', personas: [] }; // Limpiar el formulario
    });
  }
}
