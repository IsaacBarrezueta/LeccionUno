import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutasService } from 'src/app/service/rutas.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  filtro='';
  ruta:any={};
  constructor(private activatedRoute: ActivatedRoute, private _rutaService:RutasService){
    this.activatedRoute.params.subscribe(params =>{
      this.ruta= _rutaService.getRuta(params['id']);
      console.log(this.ruta);
    })
  }
  ngOnInit():void{
    window.scroll(0,0);
  }
}
