import { Component, OnInit } from '@angular/core';
import { TallerService } from '../../services/taller/taller.service';
import { ActivatedRoute } from '@angular/router';
import { Taller } from '../../interfaces/taller';
import { AlertController } from '@ionic/angular';
import { Paciente } from '../../interfaces/paciente';
import { PacienteService } from '../../services/paciente/paciente.service';

@Component({
  selector: 'app-detalle-taller',
  templateUrl: './detalle-taller.page.html',
  styleUrls: ['./detalle-taller.page.scss'],
})
export class DetalleTallerPage implements OnInit {
  id: string;
  taller: Taller | any;
  paciente: Paciente | any;
  arrayInputs = [];
  pacientesId: Array<string> = [];

  constructor(private tallerService: TallerService, private activateRoute: ActivatedRoute,
              public alertCtrl: AlertController, private pacienteService: PacienteService) { }


  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.taller = this.tallerService.obtenerTaller(this.id).valueChanges();
    this.paciente = this.pacienteService.obtenerPacientes().valueChanges();
    this.paciente.forEach(p => {
        p.forEach(paciente => {
          this.arrayInputs.push({
            label: paciente.nombre,
            type: 'checkbox',
            value: paciente.id,
          });
        });
    });
  }

  async abrirAlertPaciente() {
    const alertaPaciente = await this.alertCtrl.create({
      header: 'Selecciona a uno o varios pacientes que deseas agregar al taller',
      inputs: [...this.arrayInputs],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: async data => {
            this.pacientesId = data;
            const confirmar = await this.alertCtrl.create({
              header: 'La lista nueva reemplazará a la anterior, ¿Está seguro de realizar la acción?',
              buttons: [
                {
                  text: 'No',
                  handler: conf => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Sí',
                  handler: conf => {
                    this.tallerService.agregarPacienteTaller(this.pacientesId, this.id).then(
                        () => {
                          console.log('se realizó bien');
                        },
                        error => {
                          console.log('Error: ', error);
                        }
                    );
                  }
                }
              ]
            });
            await confirmar.present();
          }
        }
      ]
    });

    await alertaPaciente.present();
  }

}
