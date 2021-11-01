import { Component, OnInit } from '@angular/core';
import { TallerService } from '../../services/taller/taller.service';
import { ActivatedRoute } from '@angular/router';
import { Taller } from '../../interfaces/taller';
import { AlertController, ToastController } from '@ionic/angular';
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
  pacientesPorTaller: any = [];

  constructor(private tallerService: TallerService, private activateRoute: ActivatedRoute,
              public alertCtrl: AlertController, private pacienteService: PacienteService,
              public toastController: ToastController) { }


  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.taller = this.tallerService.obtenerTaller(this.id).valueChanges();
    this.taller.forEach(tall => {
      const { pacientes } = tall;
      this.pacientesPorTaller = [];
      pacientes.forEach(p => {
        const parseado = JSON.parse(p);
        this.pacientesPorTaller.push(parseado);
      });
    });


    this.paciente = this.pacienteService.obtenerPacientes().valueChanges();
    this.paciente.forEach(p => {
        p.forEach(paciente => {
          this.arrayInputs.push({
            label: paciente.nombre,
            type: 'checkbox',
            value: JSON.stringify(paciente),
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
                    if(this.pacientesId.length > 0){
                      this.tallerService.agregarPacienteTaller(this.pacientesId, this.id, this.pacientesId.length).then(
                          () => {
                            this.presentToast('Lista de Pacientes Guardada Exitosamente');
                          },
                          error => {
                            console.log('Error: ', error);
                          }
                      );
                    }else{
                      this.presentToast('Seleccione al menos un paciente');
                    }
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

  async abrirAlertComentario() {
    const alertaComentario = await this.alertCtrl.create({
      header: 'Agrege un comentario de este Taller',
      inputs: [
        {
          placeholder: 'Escriba su comentario',
          type: 'textarea',
          value: ''
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: conf => {
            if(conf[0] !== ''){
              this.tallerService.agregarComentarioTaller(conf['0'], this.id).then(
                () =>{
                  this.presentToast('Comentarios Guardados Exitosamente');
                },
                error => {
                  console.log(error);
                }
              );
            }else{
              this.presentToast('La caja de texto no puede estar vacia');
            }
            console.log(conf);
          }
        }
      ]
    });

    await alertaComentario.present();
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: `${mensaje}`,
      duration: 2000
    });
    toast.present();
  }

}
