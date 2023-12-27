import { Persona } from "./persona.model";

export interface Empresa{
    id: number;
    nombre: String;
    personas?:Persona[];
}