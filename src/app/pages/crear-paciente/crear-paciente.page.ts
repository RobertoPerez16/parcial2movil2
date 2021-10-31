import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Paciente } from '../../interfaces/paciente';
import { PacienteService } from '../../services/paciente/paciente.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.page.html',
  styleUrls: ['./crear-paciente.page.scss'],
})
export class CrearPacientePage implements OnInit {

  formPaciente = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    edad: new FormControl(0, [Validators.required,Validators.maxLength(3)]),
    telefono: new FormControl(0, Validators.required),
    direccion: new FormControl('', Validators.required),
    estadoCivil: new FormControl('', Validators.required),
    profesion: new FormControl('', Validators.required),
    estrato: new FormControl(0, [Validators.required, Validators.maxLength(2)]),
    cargo: new FormControl('', Validators.required),
    horasTrabajadasDia: new FormControl(0, [Validators.required, Validators.maxLength(2)]),
    cantAlimentosDia: new FormControl(0, [Validators.required, Validators.maxLength(2)]),
    ultimoNivelEstudio: new FormControl('', Validators.required)
  });

  paciente: Paciente = {
    id: '',
    nombre: '',
    apellido: '',
    edad: 0,
    telefono: 0,
    direccion: '',
    estadoCivil: '',
    profesion: '',
    estrato: 0,
    cargo: '',
    horasTrabajadasDia: 0,
    cantAlimentosDia: 0,
    ultimoNivelEstudio: ''
  };

  constructor(private pacienteService: PacienteService,
              public alertCtrl: AlertController, public loadingCtrl: LoadingController,
              public router: Router) { }

  ngOnInit() {
  }

  async submit() {
    this.paciente = {
      id: '',
      nombre: this.formPaciente.value.nombre,
      apellido: this.formPaciente.value.apellido,
      edad: this.formPaciente.value.edad,
      telefono: this.formPaciente.value.telefono,
      direccion: this.formPaciente.value.direccion,
      estadoCivil: this.formPaciente.value.estadoCivil,
      profesion: this.formPaciente.value.profesion,
      estrato: this.formPaciente.value.estrato,
      cargo: this.formPaciente.value.cargo,
      horasTrabajadasDia: this.formPaciente.value.horasTrabajadasDia,
      cantAlimentosDia: this.formPaciente.value.cantAlimentosDia,
      ultimoNivelEstudio: this.formPaciente.value.ultimoNivelEstudio
    };

    const loading = await this.loadingCtrl.create();
    this.pacienteService.crearPaciente(this.paciente).then(
        () => {
          loading.dismiss().then(() =>{
            this.router.navigateByUrl('/');
          });
        },
        async error => {
          const alert = await this.alertCtrl.create({
            message: error.message,
            buttons: [{
              text: 'Ok',
              role: 'cancel'
            }]
          });
          await alert.present();
          return;
        }
    );
    return await loading.present();

  }

}
