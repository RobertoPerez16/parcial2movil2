import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Paciente } from 'src/app/interfaces/paciente';
import { PacienteService } from 'src/app/services/paciente/paciente.service';

@Component({
  selector: 'app-encuesta-estres',
  templateUrl: './encuesta-estres.page.html',
  styleUrls: ['./encuesta-estres.page.scss'],
})
export class EncuestaEstresPage implements OnInit {

  form: FormGroup;
  datos: any = {};
  loading = false;
  pacientes: Paciente | any;
  paciente: Paciente;

  constructor(
    private nav: NavController,
    private pacienteService: PacienteService
  ) {
    this.loading = false;
  }

  ngOnInit(){
    this.crearForm();
    this.pacientes = this.pacienteService.obtenerPacientes().valueChanges();
  }

  crearForm(){
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      pregunta1: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta2: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta3: new FormControl(null,[Validators.required, Validators.nullValidator]),
      pregunta4: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta5: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta6: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta7: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta8: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta9: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta10: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta11: new FormControl(null, [Validators.required, Validators.nullValidator]),
      pregunta12: new FormControl(null, [Validators.required, Validators.nullValidator])
    });
    this.nombre.valueChanges.subscribe(
      data=>{
        console.log(data);
        this.paciente = data;
        this.edad.setValue(data.edad);
      }
    );
  }

  enviar() {
    if (this.form.valid) {
      this.loading = true;
      const respuestas: any[] = [];
      respuestas.push(
          this.pregunta1,
          this.pregunta2,
          this.pregunta3,
          this.pregunta4,
          this.pregunta5,
          this.pregunta6,
          this.pregunta7,
          this.pregunta8,
          this.pregunta9,
          this.pregunta10,
          this.pregunta11,
          this.pregunta12,
      );
      setTimeout(() => {
        const sumatoria = respuestas.reduce((a, b) => a + b);
        this.datos = {
          paciente: this.nombre.value,
          sumatoria
        };
        this.nav.navigateForward(`/resultado-encuesta/${ JSON.stringify(this.datos) }`);
        this.loading = false;
      }, 2000);
      return;
    }
  }

  get nombre(){
    return this.form.controls.nombre;
  }

  get edad(){
    return this.form.controls.edad;
  }

  get pregunta1(){
    return Number(this.form.controls.pregunta1.value);
  }
  get pregunta2(){
    return Number(this.form.controls.pregunta2.value);
  }
  get pregunta3(){
    return Number(this.form.controls.pregunta3.value);
  }
  get pregunta4(){
    return Number(this.form.controls.pregunta4.value);
  }
  get pregunta5(){
    return Number(this.form.controls.pregunta5.value);
  }
  get pregunta6(){
    return Number(this.form.controls.pregunta6.value);
  }
  get pregunta7(){
    return Number(this.form.controls.pregunta7.value);
  }
  get pregunta8(){
    return Number(this.form.controls.pregunta8.value);
  }
  get pregunta9(){
    return Number(this.form.controls.pregunta9.value);
  }
  get pregunta10(){
    return Number(this.form.controls.pregunta10.value);
  }
  get pregunta11(){
    return Number(this.form.controls.pregunta11.value);
  }
  get pregunta12(){
    return Number(this.form.controls.pregunta12.value);
  }

}
