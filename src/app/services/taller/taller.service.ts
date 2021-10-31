import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Taller } from '../../interfaces/taller';

@Injectable({
  providedIn: 'root'
})
export class TallerService {

  constructor(private firestore: AngularFirestore) { }

  crearTaller(taller: Taller) {
    taller.id = this.firestore.createId();
    return this.firestore.collection('talleres').add(taller);
  }
}
