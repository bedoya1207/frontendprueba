import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/persona.model';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl ='http://localhost:8080/personas/'
  constructor(private http: HttpClient) { }

  findAll(): Observable<Persona[]>{
    return this.http.get<Persona[]>('${this.apiUrl}');

  }
  savePersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.apiUrl, persona)
  }
}