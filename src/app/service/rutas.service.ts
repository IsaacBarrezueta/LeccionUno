import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  
  private rutas:Rutas[]=[
    {
      ciudadOrigen: "Cuenca",
      ciudadDestino: "Machala",
      precio: "5",
      descrip: "--",
      tipo:"Todos"
    },
    {
      ciudadOrigen: "Quito",
      ciudadDestino: "Machala",
      precio: "8",
      descrip: "--",
      tipo:"Interno"
    },
    {
      ciudadOrigen: "Cuenca",
      ciudadDestino: "Pasaje",
      precio: "3",
      descrip: "--",
      tipo:"Externo"
    },
    {
      ciudadOrigen: "Cuenca",
      ciudadDestino: "Loja",
      precio: "5",
      descrip: "--",
      tipo:"Externo"
    },
    {
      ciudadOrigen: "Pasaje",
      ciudadDestino: "Machala",
      precio: "1",
      descrip: "--",
      tipo:"Externo"
    },
    {
      ciudadOrigen: "Pasaje",
      ciudadDestino: "Guayaquil",
      precio: "10",
      descrip: "--",
      tipo:"Interno"
    },
    {
      ciudadOrigen: "Cuenca",
      ciudadDestino: "Ambato",
      precio: "6",
      descrip: "--",
      tipo:"Todos"
    },
    {
      ciudadOrigen: "Ambato",
      ciudadDestino: "Pasaje",
      precio: "12",
      descrip: "--",
      tipo:"Todos"
    },
    {
      ciudadOrigen: "Ambato",
      ciudadDestino: "Guayaquil",
      precio: "8",
      descrip: "--",
      tipo:"Interno"
    },
    {
      ciudadOrigen: "Guayaquil",
      ciudadDestino: "Loja",
      precio: "5",
      descrip: "--",
      tipo:"Todos"
    }
  ];

  getRutas()
  {
    return this.rutas;
  }
  
  constructor() { 
    console.log("Servicio listo para usar...");
  }
  
  getRuta(idx: number):Rutas{
    return this.rutas[idx];
  }
}

export interface Rutas{
  ciudadOrigen: string;
  ciudadDestino: string;
  precio: string;
  descrip: string;
  tipo: string;
}
