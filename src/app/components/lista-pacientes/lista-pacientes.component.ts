import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/paciente';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss'],
})
export class ListaPacientesComponent implements OnInit {
  paciente: Paciente | any;

  constructor(
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.paciente = this.pacienteService.obtenerPacientes().valueChanges();
    console.log(this.paciente);
  }

}
