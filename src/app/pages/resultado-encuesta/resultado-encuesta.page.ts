import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-resultado-encuesta',
  templateUrl: './resultado-encuesta.page.html',
  styleUrls: ['./resultado-encuesta.page.scss'],
})
export class ResultadoEncuestaPage implements OnInit {

  textos: string[] = [
    `No existe sintoma alguno de estres. 
      tienes un buen equilibrio, continua asi y contagia a los demas
      de tus estrategias de afrontamiento!`,
    `Te encuentras en fase de alarma, trata de identificar el o los factores
      que te causan estres para poder ocuparte de ellos de manera preventiva.`,
    `Haz conciencia de la situacion en la que te encuentras y trata de ubicar
      que puedes modificar, ya que si la situacion estresante se prolonga, puedes romper
      tu equilibrio entre lo laboral y lo personal. No agotes tus resitencias!`,
    `Te encuentras en una fase de agotamiento de recursos fisiologicos con desgaste fisico
      y mental. Esto puede tener consecuencias mas serias para tu salud.`,
    `Busca ayuda`
  ];
  mensaje: string;
  datos: any;
  color: string;
  diagnostico: string;
  porcentaje: number;
  infoData: any;
  urlSave: any;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    //this.datos = JSON.parse(this.route.snapshot.paramMap.get('datos'));
    const res = JSON.parse(this.route.snapshot.paramMap.get('datos'));
    this.datos = res;
    this.verify();
  }

  verify() {
    const suma = this.datos.sumatoria;
    this.porcentaje = (suma * 100)/72;

    if (this.datos.sumatoria === 12) {
      this.color = '#34d5eb';
      this.diagnostico = 'Sin estrés';
      this.mensaje = this.textos[0];
    }

    if (this.datos.sumatoria > 12 && this.datos.sumatoria <= 24 ) {
      this.color = '#347deb';
      this.diagnostico = 'Sin estrés';
      this.mensaje = this.textos[0];
    }

    if (this.datos.sumatoria > 24 && this.datos.sumatoria <= 36) {
      this.color = '#34eb71';
      this.diagnostico = 'Estrés Leve';
      this.mensaje = this.textos[1];
    }

    if (this.datos.sumatoria > 36 && this.datos.sumatoria <= 48) {
      this.color = '#ebe234';
      this.diagnostico = 'Estrés Medio';
      this.mensaje = this.textos[2];
    }

    if (this.datos.sumatoria > 48 && this.datos.sumatoria <= 60) {
      this.color = '#eba234';
      this.diagnostico = 'Estrés Alto';
      this.mensaje = this.textos[3];
    }

    if (this.datos.sumatoria > 60 && this.datos.sumatoria <= 72) {
      this.color = '#eb3434';
      this.diagnostico = 'Estrés Grave';
      this.mensaje = this.textos[4];
    }
  }

  guardarResultado(){
    this.pacienteService.guardarEncuesta(this.datos.sumatoria, this.datos.id).then(
      () => {
        this.presentToast('Resultados Guardados');
      },
      error => {
        console.log(error);
      }
    );
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: `${mensaje}`,
      duration: 2000
    });
    toast.present();
  }

  async download() {
    const texto = `
      Nombre: ${ this.datos.paciente.nombre } ${this.datos.paciente.apellido} 
      Edad: ${ this.datos.paciente.edad } 
      Sumatoria: ${ this.datos.sumatoria } 
      Diagnostico: ${ this.diagnostico } 
      ${ this.mensaje }    
    `;

    /* this.urlSave = await Filesystem.writeFile({
      path: 'datos.txt',
      data: texto,
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });

    this.infoData = await Filesystem.readFile({
      path: 'datos.txt',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    }); */

    /* const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texto));
    element.setAttribute('download', 'persona');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element); */
  }

}
