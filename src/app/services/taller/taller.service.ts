import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';

import { Taller } from '../../interfaces/taller';

@Injectable({
  providedIn: 'root'
})
export class TallerService {

  constructor(private firestore: AngularFirestore) { }

  crearTaller(taller: Taller) {
    taller.id = this.firestore.createId();
    return this.firestore.doc(`talleres/${taller.id}`).set(taller);
  }

  obtenerTalleres(): AngularFirestoreCollection<Taller> {
    return this.firestore.collection('talleres');
  }

  obtenerTaller(id: string): AngularFirestoreDocument<Taller> {
    return this.firestore.collection('talleres').doc(id);
  }

  agregarPacienteTaller(pacientes: Array<string>, id: string) {
    return this.firestore.collection('talleres').doc(id).update({
      pacientes
    });
  }
}
