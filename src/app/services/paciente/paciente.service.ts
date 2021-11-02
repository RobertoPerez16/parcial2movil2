import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Paciente } from '../../interfaces/paciente';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  crearPaciente(paciente: Paciente) {
    paciente.id = this.firestore.createId();
    return this.firestore.doc(`pacientes/${ paciente.id }`).set(paciente);
  }

  obtenerPacientes(): AngularFirestoreCollection<Paciente> {
    return this.firestore.collection('pacientes');
  }

  obtenerPacientesCriticos() {
    return this.firestore.collection('pacientes').ref.where('sumatoriaEncuesta', '>=', 60).get();
  }

  guardarEncuesta(sumatoriaEncuesta: number, id: string) {
    return this.firestore.collection('pacientes').doc(id).update({
      sumatoriaEncuesta
    });
  }

  proximosPacientes() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);
  }
}
