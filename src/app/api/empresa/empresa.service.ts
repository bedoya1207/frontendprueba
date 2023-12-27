import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa.model';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl ='http://localhost:8080/empresa/'
  constructor(private http: HttpClient) { }

  findAll(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>('${this.apiUrl}');

  }
  saveEmpresa(empresa:Empresa):Observable<Empresa>{
    return this.http.post<Empresa>(this.apiUrl, empresa)
  }
}
