import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interfaces/paciente';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss'],
})
export class ListaPacientesComponent implements OnInit {
  pacientes: Paciente | any = [];

  constructor(
    private pacienteService: PacienteService
  ) { }

  ngOnInit() {
    this.pacientes = this.pacienteService.obtenerPacientes().valueChanges();
  }
    /* this.pacienteService.obtenerPacientesCriticos().then(data =>{
      data.forEach((p) => {
        this.pacientes.push({
          id: p.id,
          ...p.data() as Paciente,
        });
      });
    }).catch(err => console.log(err)); */


}
