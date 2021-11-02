import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menu: any = [
    { title: 'Home', route: '', icon: 'home' },
    { title: 'Crear Paciente', route: 'crear-paciente', icon: 'person' },
    { title: 'Crear Taller', route: 'crear-taller', icon: 'attach' },
    { title: 'Encuesta de Estrés', route: 'encuesta-estres', icon: 'clipboard' },
    { title: 'Próximos pacientes', route: 'proximos-pacientes', icon: 'calendar' }
  ];
  constructor() { }

  ngOnInit() {}

}
