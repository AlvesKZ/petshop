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

export interface Cuidador {
  id?: string;
  nome: string;
  telefone: string;
  experiencia: number;
  especialidades?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {

  constructor(private firestore: Firestore) {}

  public getCuidadores(): Observable<Cuidador[]> {
    const cuidadoresRef = collection(this.firestore, 'cuidadores');
    const q = query(cuidadoresRef, orderBy('nome'));
    return collectionData(q, { idField: 'id' }) as Observable<Cuidador[]>;
  }

  public getCuidador(id: string): Observable<Cuidador | undefined> {
    const cuidadorRef = doc(this.firestore, `cuidadores/${id}`);
    return docData(cuidadorRef, { idField: 'id' }) as Observable<Cuidador | undefined>;
  }

  public addCuidador(cuidador: Cuidador) {
    const cuidadorRef = collection(this.firestore, 'cuidadores');
    return addDoc(cuidadorRef, { ...cuidador, ceratedAt: Date.now() });
  }

  public updateCuidador(cuidador: Cuidador) {
    const cuidadorRef = doc(this.firestore, `cuidadores/${cuidador.id}`);
    return updateDoc(cuidadorRef, { nome: cuidador.nome, telefone: cuidador.telefone, experiencia: cuidador.experiencia, especialidades: cuidador.especialidades });
  }

  public deleteCuidador(id: string) {
    const cuidadorRef = doc(this.firestore, `cuidadores/${id}`)
    return deleteDoc(cuidadorRef);
  }
}
