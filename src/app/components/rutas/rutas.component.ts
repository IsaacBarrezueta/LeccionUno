// app/rutas/rutas.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Rutas, RutasService } from '../../service/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  rutas: Rutas[] = [];
  filtroForm!: FormGroup; // Agregamos el signo de exclamación para indicar que se inicializará en el constructor

  constructor(
    private formBuilder: FormBuilder,
    private rutasService: RutasService,
    private router: Router
  ) {
    // Inicializamos filtroForm antes de llamar a initFiltroForm()
    this.filtroForm = this.formBuilder.group({
      tipo: ['Todos'],
      busquedaCiudad: ['']
    });
  }

  ngOnInit(): void {
    this.rutas = this.rutasService.getRutas();
    this.initFiltroForm();
  }

  initFiltroForm(): void {
    this.filtroForm.valueChanges.subscribe(() => this.actualizarRutas());
  }

  actualizarRutas(): void {
    const tipo = this.filtroForm.get('tipo')?.value;
    const busquedaCiudad = this.filtroForm.get('busquedaCiudad')?.value?.toLowerCase();

    if (tipo !== undefined && busquedaCiudad !== undefined) {
      this.rutas = this.rutasService.getRutas()
        .filter(ruta => tipo === 'Todos' || ruta.tipo === tipo)
        .filter(ruta => ruta.ciudadOrigen.toLowerCase().includes(busquedaCiudad) ||
                        ruta.ciudadDestino.toLowerCase().includes(busquedaCiudad));
    }
  }

  verRutas(ob: Rutas) {
    console.log(ob);
    this.router.navigate(['/ruta', this.rutas.indexOf(ob)]);
  }
}
