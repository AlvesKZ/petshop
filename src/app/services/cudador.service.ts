import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  doc,
  addDoc,
  collectionData,
  docData,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  } from '@angular/fire/firestore';
  import { Observable } from 'rxjs';

export interface Cuidaidor {
  id?: string;
  nome: string;
  telefone: number;
  experiencia: number;
  especialidades?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CuidaidorService {

  constructor(private firestore: Firestore) {}

  public getCuidaidors(): Observable<Cuidaidor[]> {
    const cuidaidoresRef = collection(this.firestore, 'cuidaidores');
    const q = query(cuidaidoresRef, orderBy('nome'));
    return collectionData(q, { idField: 'id' }) as Observable<Cuidaidor[]>;
  }

  public getCuidaidor(id: string): Observable<Cuidaidor | undefined> {
    const cuidaidorRef = doc(this.firestore, `cuidaidores/${id}`);
    return docData(cuidaidorRef, { idField: 'id' }) as Observable<Cuidaidor | undefined>;
  }

  public addCuidaidor(cuidaidor: Cuidaidor) {
    const cuidaidorRef = collection(this.firestore, 'cuidaidores');
    return addDoc(cuidaidorRef, { ...cuidaidor, ceratedAt: Date.now() });
  }

  public updateCuidaidor(cuidaidor: Cuidaidor) {
    const cuidaidorRef = doc(this.firestore, `cuidaidores/${cuidaidor.id}`);
    return updateDoc(cuidaidorRef, { nome: cuidaidor.nome, telefone: cuidaidor.telefone, experiencia: cuidaidor.experiencia, especialidades: cuidaidor.especialidades });
  }

  public deleteCuidaidor(cuidaidor: Cuidaidor) {
    const cuidaidorRef = doc(this.firestore, `cuidaidores/${cuidaidor.id}`)
    return deleteDoc(cuidaidorRef);
  }
}
