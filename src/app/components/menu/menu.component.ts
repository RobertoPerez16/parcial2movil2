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
  ];
  constructor() { }

  ngOnInit() {}

}
