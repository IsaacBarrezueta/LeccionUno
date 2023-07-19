import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutasComponent } from './components/rutas/rutas.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RutaComponent } from './components/ruta/ruta.component';

const routes: Routes = [
  {path:'rutas', component:RutasComponent},
  {path:'ruta', component:RutaComponent},
  {path:'quienessomos', component:  QuienessomosComponent},
  {path: '**', pathMatch:'full', redirectTo: 'rutas'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
