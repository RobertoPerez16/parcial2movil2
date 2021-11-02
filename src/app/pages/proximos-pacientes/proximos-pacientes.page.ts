import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente/paciente.service';

@Component({
  selector: 'app-proximos-pacientes',
  templateUrl: './proximos-pacientes.page.html',
  styleUrls: ['./proximos-pacientes.page.scss'],
})
export class ProximosPacientesPage implements OnInit {

  pacientes: any = [];
  constructor(private paciente: PacienteService) { }

  ngOnInit() {
    this.paciente.proximosPacientes().subscribe(data => {
      this.pacientes = data;
    });
  }

}
