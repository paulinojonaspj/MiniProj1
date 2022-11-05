import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbiesComponent } from './componentes/hobbies/hobbies.component';
import { OQueFacoComponent } from './componentes/o-que-faco/o-que-faco.component';
import { QuemSouEuComponent } from './componentes/quem-sou-eu/quem-sou-eu.component';
const routes: Routes = [
  {path:'',component:QuemSouEuComponent},
  {path:'o-que-faco',component:OQueFacoComponent},
  {path:'hobbie',component:HobbiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
