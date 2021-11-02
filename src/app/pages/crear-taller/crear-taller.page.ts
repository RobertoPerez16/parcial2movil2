import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Taller } from '../../interfaces/taller';
import { TallerService } from '../../services/taller/taller.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-taller',
  templateUrl: './crear-taller.page.html',
  styleUrls: ['./crear-taller.page.scss'],
})
export class CrearTallerPage implements OnInit {

  formTaller = new FormGroup({
    nombre: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    experto: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required)
  });

  taller: Taller = {
    id: '',
    nombre: '',
    hora: '',
    experto: '',
    cantInscritos: 0,
    pacientes: [],
    comentarios: '',
    precio: 0
  };

  constructor(private tallerService: TallerService, public alertCtrl: AlertController,
              public loadingCtrl: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  async submit() {
    this.taller = {
      id: '',
      nombre: this.formTaller.value.nombre,
      hora: this.formTaller.value.hora,
      experto: this.formTaller.value.experto,
      cantInscritos: 0,
      pacientes: [],
      comentarios: '',
      precio: this.formTaller.value.precio
    };

    const loading = await this.loadingCtrl.create();
    this.tallerService.crearTaller(this.taller).then(
        () => {
          loading.dismiss().then(() =>{
            this.router.navigateByUrl('/lista-talleres');
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
