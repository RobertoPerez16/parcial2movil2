import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Paciente } from '../../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private firestore: AngularFirestore) { }

  crearPaciente(paciente: Paciente) {
    paciente.id = this.firestore.createId();
    return this.firestore.collection('pacientes').add(paciente);
  }
}
