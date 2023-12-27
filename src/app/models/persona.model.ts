import { Empresa } from "./empresa.model";

export interface Persona{
    id:number;
    nombres:string;
    apellidos:string;
    empresa:Empresa;
}