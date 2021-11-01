import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Paciente } from '../../interfaces/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private firestore: AngularFirestore) { }

  crearPaciente(paciente: Paciente) {
    paciente.id = this.firestore.createId();
    return this.firestore.doc(`pacientes/${ paciente.id }`).set(paciente);
  }

  obtenerPacientes(): AngularFirestoreCollection<Paciente> {
    return this.firestore.collection('pacientes');
  }

  guardarEncuesta(sumatoriaEncuesta: number, id: string) {
    return this.firestore.collection('pacientes').doc(id).update({
      sumatoriaEncuesta
    });
  }
}
