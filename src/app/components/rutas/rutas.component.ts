import { Component } from '@angular/core';
import { Rutas, RutasService } from '../../service/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  rutas:Rutas[]=[]

  ngOnInit(): void{

  this.rutas = this._rutasService.getRutas();
  }

  constructor(public _rutasService:RutasService, private router:Router){
   
  }
  
  verRutas(ob: Rutas){
    console.log(ob);
    this.router.navigate(['/ruta',this.rutas.indexOf(ob)]);
  }
}
