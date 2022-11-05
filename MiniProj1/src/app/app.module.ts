import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuemSouEuComponent } from './componentes/quem-sou-eu/quem-sou-eu.component';
import { OQueFacoComponent } from './componentes/o-que-faco/o-que-faco.component';
import { HobbiesComponent } from './componentes/hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    QuemSouEuComponent,
    OQueFacoComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
