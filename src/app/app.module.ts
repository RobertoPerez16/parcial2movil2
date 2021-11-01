import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// firebase //
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { firebaseConfig } from './credenciales';

// forms //
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// menu //
import { MenuComponent } from './components/menu/menu.component';
import { ListaTalleresComponent } from './components/lista-talleres/lista-talleres.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaTalleresComponent,
    ListaPacientesComponent
  ],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      AngularFirestoreModule,
      AngularFireModule.initializeApp(firebaseConfig),
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
